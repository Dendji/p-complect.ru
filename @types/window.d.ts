export declare global {
  interface Window {
    // add you custom properties and methods
    ym: (id: number, action: string, targetName: string) => void
    gtag: (
      type: string,
      goal: string,
      options: {
        send_to: string
      }
    ) => void
    grecaptcha: any
  }
}
