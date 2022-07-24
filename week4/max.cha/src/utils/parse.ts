const scheme = "([a-z0-9+-.]+)";
const digit = "[0-9]";
const hex = `${digit}|[a-fA-F]`;
const escape = `%${hex}${hex}`;
const unreserved = `[a-zA-Z]|[0-9]|[$\\-_.+]|[!*'(),]`;
const uchar = `${unreserved}|${escape}`;
const user = `${uchar}|[;?&=]`;
const password = `${uchar}|[;?&=]`;
const login = `(?:((?:${user})+)(:(?:${password})+)*@)*`;
const hostname = `[^\\/:]+`;
const hostnumber = `${digit}+.${digit}+.${digit}+.${digit}+`;
const host = `(${hostname}|${hostnumber})+`;
const port = `(:[0-9]+)*`;
const domain = `${host}${port}`;
const left = `(\\/[^?]*)?`;
const right = `(\\?[a-zA-Z=&0-9]*)?`;
const path = `${left}${right}`;

const reg = new RegExp(`${scheme}:\\/\\/${login}${domain}${path}`);

export default reg;
