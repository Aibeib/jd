import axios from 'axios'
import { serveUrl } from '../utils/common'
import {getToken} from './util'
 
const instance = axios.create({
    baseURL: serveUrl,
    timeout: 5000
})

instance.interceptors.request.use(
    function(config) {
      if (getToken()) {
        config.headers.authorization = "Bearer " + getToken();
      }
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
instance.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      return Promise.reject(error);
    }
  );

  export const get = (url,params) => instance.get(url,{params});

  export const post = (url, data) => instance.post(url, data);
  
  export const del = (url) => instance.delete(url);