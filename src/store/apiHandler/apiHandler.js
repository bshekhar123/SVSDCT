import AuthStatus from '../../service/AuthService';

export const ApiHandler = async ({ endPoint, method, reqParam }) => {
    const acceptType = "application/json";
    const contentType = "application/json";
    let response = null;
    try {
        let content = {
            method: method.toUpperCase(),
            headers: await apiHeaders(reqParam, contentType, acceptType),
        };
        if (
            method === "POST" ||
            method === "DELETE" ||
            method === "PATCH" ||
            method === "PUT"
        ) {
            content = {
                ...content,
                body: JSON.stringify(reqParam),
            };
        }
        response = await fetch(endPoint, content);
    } catch (e) {
        console.log(e);
    }
    if (response) {
        const resContentType = response.headers.get("content-type");
        let data = null;
        if (resContentType === null) return Promise.resolve(null);
        // else if (resContentType === "application/json")
        else if (resContentType === "application/json; charset=utf-8")
            data = await response.json();
        else if (resContentType.includes("text/plain"))
            data = await response.text();
        else if (resContentType.includes("text/html"))
            data = await response.text();
        else if (resContentType === "application/pdf") {
            data = await response.blob();
        } else if (resContentType === "application/vnd.ms-excel") {
            data = new Blob([await response.blob()], { type: resContentType });
        }
        response = {
            data: data,
            status: response?.status,
            statusText: response?.statusText,
            headers: response.headers,
        };
    }
    if (
        response?.data?.status === "error" &&
        response?.data?.errCode === "ExpiredTokenException"
    ) {
        return response;
    } else {
        return response;
    }
};

export async function apiHeaders(reqParam, contentType, acceptType) {
    const token = AuthStatus.isAuthenticated();
    const requestHeader =
        reqParam instanceof FormData
            ? {
                // "Content-Type": "multipart/form-data",
                Authorization: token !== null ? `Bearer ${token}` : "",
            }
            : {
                Accept: acceptType,
                "x-api-key": "web",
                "Content-Type": contentType,
                Authorization: token !== null ? `Bearer ${token}` : "",
            };
    const headers = requestHeader;
    return headers;
}