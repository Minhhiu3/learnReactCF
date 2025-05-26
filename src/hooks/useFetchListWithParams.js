import { useEffect, useState } from "react";
import api from "../api";
import { getAllProducts } from "../api/productApi";

/**
 * * input: url, limit, skip
 * * output: list
 */

// * products
// * users

// * https://dummyjson.com/products/search?q=apple&sortBy=price&order=asc&limit=30&skip=0

// * const params = {
// * 	seach: "",
// * 	sort: "price",
// * 	order: "asc",
// * 	limit: 12,
// * 	skip: 0,
// * };

const useFetchListWithParams = (path, params) => {
	const [list, setList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchList = async () => {
		try {
			const { data } = await getAllProducts(path);
			setList(data);
			setLoading(true);
			console.log(list);


		} catch (error) {
			setLoading(false);
			setError(error.message || "Failed!");
			console.log(error);
		}
	};

	useEffect(() => {
		fetchList();
	}, []);
	return [list, loading, error];
};

export default useFetchListWithParams;
