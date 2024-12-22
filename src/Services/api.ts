const baseURL = 'https://todografo.vercel.app/api/';
import { ApiCall } from '@customTypes/useApiCall';
import { loadAbort } from '@utils/loadAbort';
import { SignInData, SignUpData } from '@schemas/signForm';
import axios from 'axios';

export const registerUser = (user: SignUpData): ApiCall<null> => {
	const controller = loadAbort();

	return {
		call: axios.post<null>(`${baseURL}auth/register`, user, {
			signal: controller.signal,
		}),
		controller,
	};
};

export const loginUser = (user: SignInData): ApiCall<null> => {
	const controller = loadAbort();

	return {
		call: axios.post<null>(`${baseURL}auth/login`, user, {
			signal: controller.signal,
		}),
		controller,
	};
};
