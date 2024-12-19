import { useState, useEffect } from 'react';

interface FetchData<T> {
	data: T | null;
	error: Error | null;
	loading: boolean;
}

export const useFetch = <T>(url: string, options?: RequestInit): FetchData<T> => {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const abortController = new AbortController();

		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(url, abortController);

				const json = await response.json();

				setData(json);
			} catch (err) {
				setError(err as Error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();

		return () => {
			abortController.abort();
		};
	}, [url, options]);

	return { data, error, loading };
};
