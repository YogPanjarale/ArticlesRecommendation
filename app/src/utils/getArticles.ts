import axios from 'axios';
import { IArticle } from './types';

//get Article function to do a axios get  request to http://127.0.0.1:5000/get-article and return data with type IArticle
export function getArticles(): Promise<IArticle> {
    return axios.get('http://127.0.0.1:5000/get-article')
        .then(response => {
            return response.data.data as IArticle;
        });
}