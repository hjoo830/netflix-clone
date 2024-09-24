import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "61024ff31e64042803b31a91a081d80e",
    language: "ko-KR",
  },
});

export default instance;
