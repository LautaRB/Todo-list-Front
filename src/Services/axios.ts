import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

let axiosInstance: AxiosInstance;

const createAxios = (baseURL: string) => {
	axiosInstance = axios.create({ baseURL, withCredentials: true });
};

const setupInterceptors = () => {
	axiosInstance.interceptors.request.use(
		(config: InternalAxiosRequestConfig) => {
			console.log(`Request made to ${config.url}`);
			return config;
		},
		(error) => {
			return Promise.reject(error);
		},
	);

	axiosInstance.interceptors.response.use(
		(response: AxiosResponse) => {
			console.log(`Response from ${response.config.url}`);
			return response;
		},
		(error) => {
			console.error(error);

			if (error.response && error.response.status === 401) {
				window.location.href = '/signIn';
			}

			return Promise.reject(error);
		},
	);
};

export const axiosService = () => {
	createAxios('https://todografo.vercel.app/api/');
	//createAxios('http://localhost:3000/api/'); Testing
	setupInterceptors();
	return axiosInstance;
};
