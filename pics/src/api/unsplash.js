import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID _5cXKOhFlLfmEEAIOdKulIw7nVkW5cmAJFgaunUhfBs",
    }
});
