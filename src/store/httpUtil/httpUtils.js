import { ApiHandler } from "../apiHandler/apiHandler";

export const doGET = async function (url, token) {
    const reqParam = {};
    const method = "GET";
    const endPoint = url;
    try {
        const response = await ApiHandler({ reqParam, method, endPoint, token });
        return response;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const doPOST = async function (url, data) {
    const reqParam = data;
    const method = "POST";
    const endPoint = url;
    try {
        const response = await ApiHandler({ endPoint, reqParam, method });
        return response;
    } catch (err) {
        throw new Error(err.message);
    }
};