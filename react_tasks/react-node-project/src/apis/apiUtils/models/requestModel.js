export class requestModel {
  constructor() {
    this.url = '';
    this.method = '';
    this.params = null;
    this.data = '';
    this.headers = null;
    this.timeout = 0;
    this.withCredentials = false;
    this.auth = { username: '', password: '' };
    this.responseType = '';
    this.responseEncoding = '';
    this.xsrfCookieName = '';
    this.xsrfHeaderName = '';
    this.maxContentLength = 0;
    this.maxBodyLength = 0;
    this.proxy = {
      protocol: '',
      host: '',
      port: 0,
      auth: {
        username: '',
        password: '',
      },
    };
  }
}
