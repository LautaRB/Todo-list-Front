import { AxiosResponse } from 'axios';

export interface ApiCall<T> {
	call: Promise<AxiosResponse<T>>;
	controller: AbortController;
}
