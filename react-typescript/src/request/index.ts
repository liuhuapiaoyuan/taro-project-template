import Taro from '@tarojs/taro'
import interceptors from './interceptors'
import {TokenRepository} from './token'


const API_HOST =  'http://localhost:8328'
export const getApi = (api)=>{
  return API_HOST + api
}
class httpRequest {

  constructor(){
    interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))
  }

  baseOptions(params, method = "GET") {
    let { url, data , contentType="application/json" } = params;
    const option = {
      url: getApi(url),
      data,
      method,
      header: {
        'content-type': contentType,
        'Authorization': TokenRepository.get()
      }
    };
    return Taro.request(option);
  }


  get = (url, data?:any )=>{
    let option = { url, data };
    return this.baseOptions(option);
  }

  post = (url, data)=>{
    let params = { url, data };
    return this.baseOptions(params, "POST");
  }

  put = (url, data)=>{
    let option = { url, data };
    return this.baseOptions(option, "PUT");
  }

  delete = (url, data)=>{
    let option = { url, data };
    return this.baseOptions(option, "DELETE");
  }

}

const request =  new httpRequest()

export {request}
