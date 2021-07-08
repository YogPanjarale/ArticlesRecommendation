import axios from "axios"; 

//likeArticle function to do a post request to the http://127.0.0.1:5000/unliked-article/ endpoint    
export const unlikeArticle = () => {
    return axios.post(`http://127.0.0.1:5000/unliked-article/`);
}
