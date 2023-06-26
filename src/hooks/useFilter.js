import { useDispatch, useSelector } from "react-redux";
import { setFiltersList, setSelectedFilter } from "../redux/reducers/filters/filters.slice";

import { updateProductList } from "../redux/reducers/productList/productList.slice";

const useFilter = () => {
	const { filters = [], activeFilter = "" } = useSelector((state) => state.filters);

	const { itemsCopy } = useSelector((state) => state.products);

	const dispatch = useDispatch();

	const updateFiltersList = (filters = []) => {
		dispatch(setFiltersList(filters));
	};

	const setActiveFilter = (filter = "") => {
		dispatch(setSelectedFilter(filter));
		setProductList(filter);
	};

	const setProductList = (filter = "") => {
		if (!filter) {
			return dispatch(updateProductList(itemsCopy));
		}

		const filteredList = itemsCopy.filter((item) => item.colour?.toLocaleLowerCase() === filter.toLocaleLowerCase());

		dispatch(updateProductList(filteredList));
	};

	return {
		filters,
		activeFilter,
		updateFiltersList,
		setActiveFilter,
	};
};

export default useFilter;
