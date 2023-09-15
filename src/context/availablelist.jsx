import { createContext, useEffect, useState } from 'react';
import getBooks from '../services/getBooks.js';
import useFilters from '../hooks/useFilters.js';

export const AvailableListContext = createContext();

export function AvailableListProvider({ children }) {
	const [availableList, setAvailableList] = useState([]);
	const { filteredAvailableList, handleChangeGenreList } = useFilters();

	const updateList = async () => {
		try {
			const books = await getBooks();
			setAvailableList(books);
		} catch (e) {
			throw new Error(e.message);
		}
	};

	useEffect(() => {
		updateList();
	}, []);

	useEffect(() => {
		handleChangeGenreList(availableList);
	}, [availableList]);

	const filtered = filteredAvailableList(availableList);

	return (
		<AvailableListContext.Provider
			value={{
				availableList: filtered,
			}}
		>
			{children}
		</AvailableListContext.Provider>
	);
}
