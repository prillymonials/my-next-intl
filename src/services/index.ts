import axios from 'axios';

class Service {
  private http;

  constructor() {
    this.http = axios.create({
      baseURL: 'https://ffxivcollect.com/api',
    });
  }

  public async getMounts(locale: string) {
    const { data: response } = await this.http.get('/mounts', {
      params: {
        language: locale,
      },
    });

    return response.results;
  }
}

const service = new Service();
export default service;
