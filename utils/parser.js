const base642string = require('./base642string');
const string2base64 = require('./string2base64');

const ssParser = (ssString) => {
  ssString = base642string(ssString.slice(5));
  const [method,rest,port] = ssString.split(':');
  const [password,ip] = rest.split('@');
  return {method,password,ip,port};
}

const ssrParser = (ssrString) => {
  ssrString = base642string(ssrString.slice(6));
  const [ip,port,protocol,method,obfs,base64_password,base64_params] = ssrString.split(':');
  const password = base642string(base64_password);
  // const params = base642string(base64_params);
  return {method,password,ip,port,protocol,obfs};
  // return {method,password,ip,port,protocol,obfs,params};
}

const ssrGenerator = (ssObject) => {
  const {method,password,ip,port,protocol='origin',obfs='plain',params_base64=''} = ssObject;
  return `ssr://${string2base64(`${ip}:${port}:${protocol}:${method}:${obfs}:${string2base64(password)}:${string2base64(params_base64)}`)}`;
}

const ssGenerator = (ssrObject) => {
  const {method,password,ip,port}=ssrObject;
  return `ss://${string2base64(`${method}:${password}@${ip}:${port}`)}`;
}

module.exports = {ssParser,ssrParser,ssGenerator,ssrGenerator};