import axios from "axios";

const axiosConfigured = axios.create({
    baseURL: "http://localhost:5000/api",
    responseType: "json",
})

let reqInterceptor = null

let resInterceptor = null

const bindInterceptors = (token) => {
    reqInterceptor = axiosConfigured.interceptors.request.use(function (request) {
        request.headers.Authorization = `Bearer ${token}`
        return request;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    resInterceptor = axiosConfigured.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });
}

const unbindInterceptors = () => {
    axiosConfigured.interceptors.request.eject(reqInterceptor)
    axiosConfigured.interceptors.request.eject(resInterceptor)
}

export {bindInterceptors, unbindInterceptors}
export default axiosConfigured
