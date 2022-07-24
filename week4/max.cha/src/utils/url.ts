import reg from "./parse";

class Url {
  host: string;
  lastPathComponent: string;
  pathComponents: string[];
  port: number;
  query: string;
  scheme: string;
  isFileURL: boolean;
  user: string;
  password: string;
  absoluteString: string;

  constructor(url) {
    const [
      _absoluteString,
      _scheme,
      _user,
      _password,
      _host,
      _port,
      _path,
      _queryString,
    ] = reg.exec(url);

    let pathList = (_path ?? "").split("/");
    pathList.splice(0, 1, "/");

    this.absoluteString = _absoluteString ?? "";
    this.host = _host ?? "";
    this.port = parseInt((_port ?? ":80").slice(1));
    this.pathComponents = pathList;
    this.lastPathComponent = pathList.slice(-1)[0];
    this.scheme = _scheme ?? "";
    this.user = _user ?? "";
    this.password = (_password ?? "").slice(1);
    this.isFileURL = this.scheme === "file";
    this.query = (_queryString ?? "").slice(1);
  }

  getList() {
    return {
      host: this.host,
      lastPathComponent: this.lastPathComponent,
      pathComponents: this.pathComponents,
      port: this.port,
      query: this.query,
      scheme: this.scheme,
      isFileURL: this.isFileURL,
      user: this.user,
      password: this.password,
      absoluteString: this.absoluteString,
    };
  }
}

export default Url;
