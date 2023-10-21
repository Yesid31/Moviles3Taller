import { API_URL, API_URL_SERVER } from "../utils/constants";



export const loginApi = async(email,password) =>{
    try {
        const url = `${API_URL_SERVER}/api/v1/users/login`;
        const params = {
            method:"POST",
            headers:{
                "Access-Control-Allow-Origin":"*",
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username:email,
                password
            })
        };
        const response = await fetch(url,params)
        const result = await response.json();
        return result
    } catch (error) {
        console.log(error);
        return null
    }
}