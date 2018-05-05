export interface IMailProvider {
  isEnabled : boolean
  isConfigured : boolean

  sendMail(from : string, to : string, cc: string, bcc: string, subject : string, message : string) : Promise<boolean>

  checkStatus() : Promise<boolean>
}
