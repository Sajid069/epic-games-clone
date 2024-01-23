import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: 'eb5c1411a5ef4b95a056710a33262cec'
    }
})