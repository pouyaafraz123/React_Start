import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID LLlNoPMf8MNDoVFllTn1KwY2OA8D4jqT-zPZo7kn4Fk'
    }
});