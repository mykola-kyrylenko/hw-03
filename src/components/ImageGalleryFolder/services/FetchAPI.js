import axios from 'axios';

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = '21647427-119fc9e63c06e8167cfe2cce4';

export async function getImages (query, page) {
    try{
        const response = await axios.get(`${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
        console.log(response.data);
        return response.data;
    }catch(error){
        console.log(error)
    }

}

