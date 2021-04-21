import { BlogPostResponse, FullBlogPostResponse } from '../api/api'
import { IArticle, IArticlePreview } from '../pages/blog'

export class Mapper {
  static mapBlogPost = (blogPost: BlogPostResponse): IArticlePreview => {
    return {
      slug: blogPost.node._meta.uid,
      title: blogPost.node.title[0].text,
      preview: blogPost.node.preview[0].text,
      badge: blogPost.node.badge,
      cover: blogPost.node.cover.url,
    }
  }
  static mapFullBlogPost = (blogPost: FullBlogPostResponse): IArticle => {
    return {
      slug: blogPost._meta.uid,
      title: blogPost.title[0].text,
      preview: blogPost.preview[0].text,
      badge: blogPost.badge,
      cover: blogPost.cover.url,
      body: blogPost.body,
      description: blogPost.description[0].text,
      page_title: blogPost.page_title[0].text,
    }
  }
}
