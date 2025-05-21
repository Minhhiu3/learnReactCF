import { useEffect, useState } from "react";
import api from "../api/index";

const useFetchList = (path, query) => {
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchList = async () => {
		try {
			setLoading(true);
			const page = Number(query.page) || 1;
			const limit = Number(query.limit) || 12;
			const skip = (page - 1) * limit;

			const queryClone = { ...query, page, limit, skip };

			const queryString = new URLSearchParams(queryClone).toString();
			const { data } = await api.get(`${path}/search?${queryString}`);

			setList(data[path]);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error.message || "Failed!");
			console.log(error);
		}
	};

	useEffect(() => {
		fetchList();
	}, [query.limit, query.page]);
	return [list, loading, error];
};

export default useFetchList;