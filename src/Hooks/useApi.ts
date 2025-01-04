import { ApiCall } from '@customTypes/ApiCall';
import { ApiResponse } from '@customTypes/ApiResponse';
import { AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';

type Options<P> = {
	autoFetch?: boolean;
	params: P;
};

type Data<T> = T | null;
type CustomError = Error | null;

interface Result<T, P> {
	loading: boolean;
	data: Data<T>;
	error: CustomError;
	fetch: (params: P) => void;
}

export const useApi = <T extends ApiResponse<unknown>, P>(apiCall: (params: P) => ApiCall<T>,options?: Options<P>,
): Result<T['data'], P> => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<Data<T['data']>>(null);
	const [error, setError] = useState<CustomError>(null);

	const fetch = useCallback(
		(params: P) => {
			const { call, controller } = apiCall(params);
			setLoading(true);

			call
				.then((res: AxiosResponse<T>) => {
					setData(res.data.data);
					setError(null);
				})
				.catch((err) => {
					setError(err);
				})
				.finally(() => {
					setLoading(false);
				});
			return () => {
				controller.abort();
			};
		},
		[apiCall],
	);

	useEffect(() => {
		if (options?.autoFetch) {
			fetch(options.params);
		}
	}, [fetch, options?.autoFetch, options?.params]);

	return {
		loading,
		data,
		error,
		fetch,
	};
};
