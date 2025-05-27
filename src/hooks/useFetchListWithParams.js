import { useState, useEffect } from "react";
import { getAllProducts } from "../api/productApi";

const useFetchListWithParams = (path, defaultParams = {}) => {
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [totalCount, setTotalCount] = useState(0);
	const [params, setParams] = useState(defaultParams);

	const fetchList = async (customParams = {}) => {
		try {
			setLoading(true);
			const mergedParams = { ...params, ...customParams };

			// Xoá param rỗng
			if (!mergedParams.title_like) delete mergedParams.title_like;
			if (!mergedParams.level) delete mergedParams.level;

			console.log(" Đang fetch với params:", mergedParams);
			const res = await getAllProducts(path, mergedParams);

			setList(res.data);
			setTotalCount(parseInt(res.headers["x-total-count"] || "0"));
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	// Gọi fetch khi `path` đổi
	useEffect(() => {
		fetchList();
	}, [path]);

	return [list, loading, error, fetchList, setParams, totalCount];
};

export default useFetchListWithParams;
