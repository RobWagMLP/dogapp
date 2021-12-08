import { apikey, baseUrl, limitPerPage, resultOrder } from "../../config";
import { Dog } from "./interfaces";

export const imageSearch = async (page: number): Promise<Array<Dog>> => {
        const method = 'GET';
        const urlPath = 'images/search';
        const queryParams = `?page=${page}&limit=${limitPerPage}&order=${resultOrder}`;
        const headers = {
            "x-api-key": apikey 
        };
        const meta = {
            headers: headers,
            method:  method ,
        }
        const response = await fetch(baseUrl + urlPath + queryParams, meta);
        return await response.json() as Array<Dog>;
}