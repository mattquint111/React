import axios from 'axios'

const KEY = 'AIzaSyCtAnsaGo9o8bB38m_LjAv5WIDr71duaoE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key : KEY
    }
})