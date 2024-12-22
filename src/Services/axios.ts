import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

let axiosInstance: AxiosInstance;

const createAxios = (baseURL: string) => {
	axiosInstance = axios.create({ baseURL });
};

const setupInterceptors = () => {
	axiosInstance.interceptors.request.use(
		(config: InternalAxiosRequestConfig) => {
			const token = localStorage.getItem('token');
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
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
			return Promise.reject(error);
		},
	);
};

export const axiosService = () => {
	createAxios('https://todografo.vercel.app/api/');
	setupInterceptors();
	return axiosInstance;
};
