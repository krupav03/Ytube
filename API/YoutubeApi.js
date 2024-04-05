import axios from 'axios';
import { rapidApiKey } from '../Constants';


export const fetchTrendingVideos = async (param) => {
    const options = {
    method: 'GET',
    url: 'https://youtube-v3-alternative.p.rapidapi.com/related',
    params: {
        id: 'dQw4w9WgXcQ',
        geo: 'US',
        lang: 'en'
    },
    headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        return response.data.data
    } catch (error) {
        console.error(error);
    }
}

export const GamingVideos = async (param) => {

    const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
        relatedToVideoId: '7ghhRHRP6t4',
        part: 'id,snippet',
        type: 'video',
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '7e06ad026fmsh6e4786efaceacefp135937jsn6e981c571384',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        return response.data.items
    } catch (error) {
        console.error(error);
    }
}
// export const fetchTrendingVideos = async (param) => {
//     console.log('paerams---->',param)
//     const options = {
//         method: 'GET',
//         url: 'https://youtube-v3-alternative.p.rapidapi.com/video',
//         params: {id: 'dQw4w9WgXcQ'},
//         headers: {
//           'X-RapidAPI-Key': rapidApiKey,
//           'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
//         }
//       };
//       try {
//         const response = await axios.request(options)
//         return response.data;
//       }catch(error) {
//         console.log('errorrr--->',error)
//         return [];
//       }
// }
