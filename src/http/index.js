import axios from "axios";
import UrlPattern from "url-pattern";

import * as endpoints from "./endpoints";

function getEndpoint(url = "", params = {}) {
	const pattern = new UrlPattern(url);

	return pattern.stringify(params);
}

async function http(payload) {
	try {
		const config = axios.create({
			baseURL: process.env.REACT_APP_BASE_URL,
		});

		const { data = {}, method, path, query = "" } = payload || {};
		const url = getEndpoint(endpoints[path.url], path.params);
		const options = {
			headers: {
				"Content-Type": "application/json",
			},
			method,
			url,
		};

		if (method === "GET" && query) {
			options.params = query;
		}

		if (method !== "GET") {
			options.data = JSON.stringify(data);
		}

		const apiResponse = await config(options);
		return [apiResponse, null];
	} catch (e) {
		if (e.response) {
			return [null, e.response];
		}
		if (e.request) {
			return [null, e.request];
		}
		return [null, { message: e.message }];
	}
}

export default http;
