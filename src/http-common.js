import axios from "axios";

export default axios.create({
    baseUrl: "http://127.0.0.1:8080/api/",
    headers:{
        "Content-type": "application/json"
    }
})