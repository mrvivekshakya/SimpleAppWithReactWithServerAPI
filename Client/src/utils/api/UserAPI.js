import axios from 'axios';
import {serverAddress} from '../../constants/index';

const utils = {
  temp : serverAddress+"/User",
  AllUser : (params) => {
    let url = serverAddress+"/User";
    return axios.get(url)
  },
  AddUser: (params) => {
    let url = serverAddress+"/User";
    return axios.post(url,params);
  },
  DeleteUser: (params) => {
    let url = serverAddress+`/User/${params}`;
    return axios.delete(url);
  }
}

export default utils;