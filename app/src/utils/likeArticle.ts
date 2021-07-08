import axios from "axios";

//likeArticle function to do a post request to the http://127.0.0.1:5000/liked-article/ endpoint    
export const likeArticle = () => {
    return axios.post(`http://127.0.0.1:5000/liked-article/`);
}

//likeArticle function to do a get request to the http://127.0.0.1:5000/liked-article/ endpoint    
export const getLikedArticles = () => {
    return axios.get(`http://127.0.0.1:5000/liked-article`);
}