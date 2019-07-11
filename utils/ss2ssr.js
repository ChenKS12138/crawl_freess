const base642string = require('./base642string');
const string2base64 = require('./string2base64');
const raw = "ss://YWVzLTI1Ni1jZmI6ZjU1LmZ1bi0zMDkxMDUyOUB1c2EuMXNzLmJpZDoxODU4Ngo=";

const ssParser = (ssString) => {
  ssString = Buffer.from(ssString.slice(5,-2),'base64').toString();
  const [method,rest,port] = ssString.split(':');
  const [password,ip] = rest.split('@');
  return {method,password,ip,port};
}

const ssrGenerator = (ssObject) => {
  const {method,password,ip,port,protocol='origin',obfs='plain',params_base64=''} = ssObject;
  return `ssr://${string2base64(`${ip}:${port}:${protocol}:${method}:${obfs}:${string2base64(password)}:${string2base64(params_base64)}`)}`;
}

module.exports = function(rawSsString){
  return ssrGenerator(ssParser(rawSsString));
}