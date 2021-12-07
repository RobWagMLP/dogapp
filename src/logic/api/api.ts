import { apikey, baseUrl, limitPerPage, resultOrder } from "../../config";
import { Dog } from "./interfaces";
import { ajax, AjaxRequest, AjaxResponse } from 'rxjs/ajax';

export const imageSearch = (page: number): Promise<Array<Dog>> => {
    return new Promise<Array<Dog>>((resolve) => {
        const method = 'GET';
        const urlPath = 'images/search';
        const queryParams = `?page=${page}&limit=${limitPerPage}&order=${resultOrder}`;
        const headers = {
            "x-api-key": apikey 
        };
        const requestParams: AjaxRequest = {
            url: baseUrl + urlPath + queryParams,
            method: method,
            headers: headers,
            async: true,
            crossDomain: true,
        };
        ajax(requestParams)
            .toPromise()
            .then((response: AjaxResponse) => {
                return resolve(response.response as Array<Dog>);
            })
            .catch((error: any) => {
                return resolve(error.response);
            });
    });
}