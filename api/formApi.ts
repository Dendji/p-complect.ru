import axios from 'axios'

const apiEndpoint =
  process.env.NODE_ENV === 'production'
    ? 'https://multikit.dbrain.io'
    : 'http://localhost:3020'

export type BodyHash = { [key: string]: string | undefined }

export interface SendFormResponse {
  status: 'success' | 'failure'
  errors?: string[]
}

export class FormApi {
  static sendForm = async (payload: BodyHash) => {
    const res = await axios.post<SendFormResponse>(
      `${apiEndpoint}/form`,
      payload
    )

    return res
  }
}
