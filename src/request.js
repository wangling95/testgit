import {instance} from './api';
import {url} from './config'

// function test(){
//     return instance({url,method,data})
// }

let requestConfig = {
    // post请求参数为data,get请求参数为params
    baidu: (data) => instance({url: url.BAIDU, method: 'post', data}),
    essix: (params) => instance({url: url.ESSIX, method: 'get', params}),
    douban: (params) => instance({url: url.DOUBAN, method: 'get', params})
}

export {requestConfig}
