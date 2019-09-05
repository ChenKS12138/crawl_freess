export default interface commonObj {
  method: string,
  password: string,
  ip: string,
  port: number,
  protocol?: string,
  obfs?: string,
  params_base64?: string,
}