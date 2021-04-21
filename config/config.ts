// old api https://1sgwvmbpnk.execute-api.us-east-1.amazonaws.com/prod

export class Config {
  static SendFormApiEndpoint =
    process.env.NODE_ENV === 'production'
      ? 'https://multikit.dbrain.io'
      : 'http://localhost:3020'
}
