import axios from 'axios';

// const base = 'http://localhost:8000';
// const baseURL = 'http://localhost:8000/api';
const baseURL = `http://${window.location.host}/api`;

axios.defaults.timeout = 10000;


axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.error(error);
  });


// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      // if (response.data.code !== -1) {
      //   return Promise.resolve(response.data);
      // }
      // window.location = `http://${window.location.host}/#/login`;
      return Promise.resolve(response.data);
    }
    response.data.data = [];
    return Promise.reject(response.data);
  },
  (error) => {
    // const status = error.response.status;
  }
);


const Http = {
  // host: base,
  baseURL,
  token: '',
  header: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  request(method, api, data) {
    const headers = this.header;
    headers.Token = this.token;
    // headers.token = userStore.token;
    const reqBody = data;
    const req = {
      method,
      url: api,
      baseURL,
      headers,
      // transformRequest: [fromdata => JSON.stringify(fromdata)],
    };
    if (method === 'get') {
      req.params = reqBody;
    } else {
      req.data = reqBody;
    }
    return axios(req).catch(e => ({}));
  },
  async get(api, data) {
    return this.request('get', api, data);
  },
  post(api, data) {
    return this.request('post', api, data);
  },
  patch(api, data) {
    return this.request('patch', api, data);
  },
  put(api, data) {
    return this.request('put', api, data);
  },
  delete(api, data) {
    return this.request('delete', api, data);
  },
};

export default Http;
