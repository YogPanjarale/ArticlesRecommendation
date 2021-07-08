import axios from "axios";
import { IArticle } from "./types";

// get recommended articles functions do a axios get request to http://127.0.0.1:5000/recommended-articles ans reutrn result as IArticel[]
export function getRecommendedArticles(): Promise<IArticle[]> {
    return axios.get("http://127.0.0.1:5000/recommended-articles")
        .then(res => res.data.data as IArticle[]);
}
