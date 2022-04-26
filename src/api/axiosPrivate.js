import axios from "axios";

const axiosPrivate = axios.create()

axiosPrivate.interceptors.request.use(function (config) {
    if (!config?.headers?.accessToken) {
        config.headers.accessToken = `bearer ${localStorage.getItem("accessToken")}`
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosPrivate.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    if (error.response.status == 403) {

    }
    return Promise.reject(error);
});

export default axiosPrivate;