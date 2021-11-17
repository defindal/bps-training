import { axios, baseURL} from '../common/config.js';
//get all data
export async function searchDocumentCategory
(term){
    return await axios.get(
        `${baseURL}/documentCategory/
        autocomplete?term=${term}`);
}
