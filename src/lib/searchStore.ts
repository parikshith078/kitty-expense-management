import { writable } from "svelte/store";

export interface SearchStoreModel<T extends Record<PropertyKey, any>> {
	data: T[];
	filtered: T[];
	search: string;
	selectedCategories: string[];
}

export const createSearchStore = <T extends Record<PropertyKey, any>>(
	data: T[],
) => {
	const { subscribe, set, update } = writable<SearchStoreModel<T>>({
		data,
		filtered: data,
		search: "",
		selectedCategories: [],
	});

	return { subscribe, set, update };
};

export const searchHandler = <T extends Record<PropertyKey, any>>(
	store: SearchStoreModel<T>,
) => {
	const searchTerm = store.search.toLowerCase() || "";
	store.filtered = store.data.filter((item) => {
		return item.searchTerms.toLowerCase().includes(searchTerm);
	});
	if (store.selectedCategories.length != 0) {
		store.filtered = store.filtered.filter((item) => {
			return store.selectedCategories.includes(item.catagory.name)
    });
	}
};
