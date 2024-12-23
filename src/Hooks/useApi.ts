import { ApiCall } from '@customTypes/ApiCall';
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

export const useApi = <T, P>(apiCall: (params: P) => ApiCall<T>, options?: Options<P>): Result<T, P> => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<Data<T>>(null);
	const [error, setError] = useState<CustomError>(null);

	const fetch = useCallback(
		(params: P) => {
			const { call, controller } = apiCall(params);
			setLoading(true);

			call
				.then((res) => {
					setData(res.data);
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
