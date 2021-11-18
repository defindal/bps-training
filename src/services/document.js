import { axios, baseURL} from '../common/config.js';

export async function save(data){
    return await axios.post(baseURL + `/document`,data);
}
