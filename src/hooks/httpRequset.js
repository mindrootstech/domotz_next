import axios from "axios"
import authConfig from 'src/configs/auth'

export const http = async (data, endPoint, apiType) => {
    return new Promise(async (resolve, reject) => {
        let refresh_token = window.localStorage.getItem(authConfig.onTokenExpiration)
        let config = {
            baseURL: endPoint,
            method: apiType,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "authorization": `Bearer ${refresh_token}`
            },
            data
        };

        try {
            const response = await axios(config);
            if (response) {
                return resolve(response);
            }
        } catch (error) {
            reject(error);
        }
    });
};
