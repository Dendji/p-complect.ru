import Prismic from 'prismic-javascript'

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`

export const API_TOKEN = process.env.PRISMIC_API_TOKEN
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
})

async function fetchAPI(
  query: string,
  args: {
    previewData?: any
    variables?: any
  } = {}
) {
  const { previewData, variables } = args

  const prismicAPI = await PrismicClient.getApi()
  if (!prismicAPI.masterRef.ref) {
    throw new Error('no ref')
  }

  if (!API_LOCALE) {
    throw new Error('no api locale')
  }

  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
        // 'Prismic-Ref': prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  )

  if (res.status !== 200) {
    console.log(await res.text())
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    query {
    allBlog_posts {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `)
  return data?.allBlog_posts?.edges
}

export interface BlogPostResponse {
  node: {
    preview: {
      text: string
    }[]
    badge: string
    cover: {
      url: string
    }
    title: {
      text: string
      type: string
    }[]
    _meta: {
      uid: string
    }
  }
}

export interface IBodyItem {
  text: string
  type:
    | 'paragraph'
    | 'list-item'
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
}
export interface FullBlogPostResponse {
  preview: {
    text: string
  }[]
  body?: IBodyItem[]
  page_title: {
    text: string
    type: string
  }[]
  description: IBodyItem[]
  badge: string
  cover: {
    url: string
  }
  title: {
    text: string
    type: string
  }[]
  _meta: {
    uid: string
  }
}

export async function getAllPostsForHome(
  previewData: any
): Promise<BlogPostResponse[]> {
  const data = await fetchAPI(
    `
    query {
      allBlog_posts {
        edges {
          node {
            title
            body
            preview
            badge
            cover
            _meta {
              uid
            }
          }
        }
      }
    }
  `,
    { previewData }
  )
  console.log('🚀 ~ file: api.ts ~ line 96 ~ getAllPostsForHome ~ data', data)

  return data.allBlog_posts.edges
}

export async function getPostWithSlug(slug: string) {
  console.log('🚀 ~ file: api.ts ~ line 125 ~ getPostWithSlug ~ slug', slug)
  const data = await fetchAPI(
    `
  query PostBySlug($slug: String!, $lang: String!) {
    blog_post(uid: $slug, lang: $lang) {
      title
      body
      badge
      page_title
      description
      preview
      cover
      _meta {
        uid
      }
    }
  }
  `,
    {
      //   previewData,
      variables: {
        slug,
        lang: API_LOCALE,
      },
    }
  )

  return data
}
