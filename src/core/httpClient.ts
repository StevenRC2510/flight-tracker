import axios from "axios";

export class HttpClient {
  private instance;

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL });
  }

  get(url: string, params = {}) {
    return this.instance.get(url, { params });
  }

  post(url: string, body = {}) {
    return this.instance.post(url, { body });
  }
}
