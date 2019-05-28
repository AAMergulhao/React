import axios from "axios";

const key = "AIzaSyAOY0E4gDcgD6Gvd4BKNlhe-875CCkjBGI";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: key
    }
});