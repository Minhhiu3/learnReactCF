import axios from "axios";
import { promise } from "zod";

const api = axios.create({
	baseURL: "https://jsonserver-cf.onrender.com/",
	headers: {
		"Content-Type": "application/json",
	},
});
api.interceptors.request.use(
	function (config) {
		console.log("in ra tr khi request");
		console.log(config);
		const accessToken = localStorage.getItem("accessToken");
		if (accessToken) {
			config.headers.Authorization = `bearer ${accessToken}`
		}
		console.log(config);
		return config;
	},
	function (error) {
		return promise.reject(error);
	}
);

export default api;
