import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// Create axios instance
const axiosInstance: AxiosInstance = axios.create();

console.log("Axios Instance (inside axiosConfig):", axiosInstance);

// Set up interceptors
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  console.log("Request Interceptor:", config);
  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log("Response Interceptor:", response);
    return response;
  },
  (error) => {
    console.log("Error Interceptor:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
