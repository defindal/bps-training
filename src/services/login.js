import {axios, baseURL} from '../common/config.js'

export async function loginPost(data){
    return await axios.post(baseURL + `/users/login`,data);
}
