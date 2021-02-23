import axios from "axios";
import routes from "./routes";
const baseURL = "http://localhost:5000/api"
const axiosConfigured = axios.create({
    baseURL,
    responseType: "json",
})

const handlingErrors = {
    TokenExpiredError: "TokenExpiredError"
}

let reqInterceptor = null

let resInterceptor = null

const bindInterceptors = (token, refresh) => {
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
        if (error.response.data.name === handlingErrors.TokenExpiredError) {
            return new Promise((resolve, reject) => {

            axios.post(`${baseURL}${routes.REFRESH}`, {refresh},
                {headers: {Authorization: `Bearer ${token}`}})
                .then(res => {
                    localStorage.setItem("token", res.data.access)
                    localStorage.setItem("refresh", res.data.refresh)
                    resolve(res)
                })
                .catch(err => {
                    console.log(err.response)
                    reject(err)
                })
        })
        }
        return Promise.reject(error);
    });
}

const unbindInterceptors = () => {
    axiosConfigured.interceptors.request.eject(reqInterceptor)
    axiosConfigured.interceptors.request.eject(resInterceptor)
}

export {bindInterceptors, unbindInterceptors}
export default axiosConfigured
