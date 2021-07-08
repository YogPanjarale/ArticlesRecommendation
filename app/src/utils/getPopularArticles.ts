// do a http get request using axios to the api http://127.0.0.1:5000/popular-articles and return the result   

import axios from 'axios';
import { IArticle } from './types';


export default function getPopularArticles(): Promise<IArticle[]> {
    return axios.get('http://127.0.0.1:5000/popular-articles')
        .then(response => response.data.data as IArticle[]);
}
