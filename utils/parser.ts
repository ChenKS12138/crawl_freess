import commonObj from './interface/commonObj';

export const base642string:Function = (base64: string):string => Buffer.from(base64, 'base64').toString('utf8');
export const string2base64:Function = (raw: string):string => Buffer.from(raw).toString('base64');

export const ssParser:Function = (ssString:String):Object => {
  ssString = base642string(ssString.slice(5));
  const [method,rest,port] = ssString.split(':');
  const [password,ip] = rest.split('@');
  return {method,password,ip,port};
}

export const ssrParser:Function = (ssrString:String):Object => {
  ssrString = base642string(ssrString.slice(6));
  const [ip,port,protocol,method,obfs,base64_password,base64_params] = ssrString.split(':');
  const password = base642string(base64_password);
  return {method,password,ip,port,protocol,obfs};
}

export const ssrGenerator:Function = (ssObject:commonObj):String => {
  const {method,password,ip,port,protocol='origin',obfs='plain',params_base64=''} = ssObject;
  return `ssr://${string2base64(`${ip}:${port}:${protocol}:${method}:${obfs}:${string2base64(password)}:${string2base64(params_base64)}`)}`;
}
  
export const ssGenerator:Function = (ssrObject:commonObj):String => {
  const {method,password,ip,port}=ssrObject;
  return `ss://${string2base64(`${method}:${password}@${ip}:${port}`)}`;
}