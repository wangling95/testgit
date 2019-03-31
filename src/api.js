import axios from 'axios';


let baseURL = '';
var instance = axios.create({
  baseURL: baseURL,
  timeout: 100000,
  headers: {'Content-Type':'application/json'}
});
export {instance}