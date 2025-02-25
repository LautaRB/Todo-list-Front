import { ApiCall } from '@customTypes/ApiCall';
import { loadAbort } from '@utils/loadAbort';
import { FormSignUpData } from '@schemas/signForm';
import { ApiSignInData } from '@customTypes/ApiSignInData';
import { axiosService } from './axios';
import { ApiUserProfileData } from '@customTypes/ApiUserProfileData';
import { ApiResponse } from '@customTypes/ApiResponse';
import { ApiTaskCreate, ApiTaskUpdate, ApiUserTasks } from '@customTypes/ApiUserTasks';

const axiosInstance = axiosService();

export const registerUser = (user: FormSignUpData): ApiCall<null> => {
	const controller = loadAbort();

	return {
		call: axiosInstance.post<null>('auth/register', user, {
			signal: controller.signal,
		}),
		controller,
	};
};

export const loginUser = (user: ApiSignInData): ApiCall<ApiResponse<ApiSignInData>> => {
	const controller = loadAbort();

	return {
		call: axiosInstance.post<ApiResponse<ApiSignInData>>('auth/login', user, {
			signal: controller.signal,
		}),
		controller,
	};
};

export const logoutUser = (): ApiCall<ApiResponse<{}>> => {
	const controller = loadAbort();

	return {
		call: axiosInstance.post<ApiResponse<{}>>(
			'auth/logout',
			{},
			{
				signal: controller.signal,
			},
		),
		controller,
	};
};

export const updateUserProfile = (user: ApiUserProfileData): ApiCall<ApiResponse<ApiUserProfileData>> => {
	const controller = loadAbort();

	return {
		call: axiosInstance.patch<ApiResponse<ApiUserProfileData>>('me/profile', user, {
			signal: controller.signal,
		}),
		controller,
	};
};

export const validateJWT = (): ApiCall<null> => {
	const controller = loadAbort();

	return {
		call: axiosInstance.post<null>(
			'auth/validateAccessToken',
			{},
			{
				signal: controller.signal,
			},
		),
		controller,
	};
};

export const getUserData = (): ApiCall<ApiResponse<ApiUserProfileData>> => {
	const controller = loadAbort();

	return {
		call: axiosInstance.get<ApiResponse<ApiUserProfileData>>('me/profile', {
			signal: controller.signal,
		}),
		controller,
	};
};

export const getUserTasks = (): ApiCall<ApiResponse<ApiUserTasks[]>> => {
	const controller = loadAbort();

	return {
		call: axiosInstance.get<ApiResponse<ApiUserTasks[]>>('me/tasks', {
			signal: controller.signal,
		}),
		controller,
	};
};

export const addUserTask = (task: ApiTaskCreate): ApiCall<ApiResponse<ApiUserTasks>> => {
	const controller = loadAbort();

	return {
		call: axiosInstance.post<ApiResponse<ApiUserTasks>>('me/tasks', task, {
			signal: controller.signal,
		}),
		controller,
	};
};

export const updateUserTask = (taskId: string, taskData: ApiTaskUpdate): ApiCall<ApiResponse<ApiUserTasks>> => {
	const controller = loadAbort();
	return {
		call: axiosInstance.patch<ApiResponse<ApiUserTasks>>(`me/tasks/${taskId}`, taskData, { signal: controller.signal }),
		controller,
	};
};
