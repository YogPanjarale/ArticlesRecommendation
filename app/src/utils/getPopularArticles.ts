// do a http get request using axios to the api http://127.0.0.1:5000/popular-articles and return the result   

import axios from 'axios';

//typescript type with lang,title,url,total_events
export interface IArticle {
    lang: string;
    title: string;
    url: string;
    total_events: number;
}

export default function getPopularArticles(): Promise<IArticle[]> {
    return axios.get('http://127.0.0.1:5000/popular-articles')
        .then(response => response.data.data as IArticle[]);
}
