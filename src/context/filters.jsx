import { createContext, useState } from 'react';

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
	const [genreList, setGenreList] = useState([]);
	const [filters, setFilters] = useState({
		search: '',
		genre: 'todos',
		pages: 0,
	});

	const handleChange = event => {
		setFilters(prevState => ({
			...prevState,
			search: event.target.value,
		}));
	};

	const handleChangeGenreList = event => {
		const clonedState = structuredClone(event);
		const newGenre = [...new Set(clonedState.map(book => book.genre))];
		setGenreList(newGenre);
	};

	const handleChangeRange = event => {
		setFilters(prevState => ({
			...prevState,
			pages: event.target.value,
		}));
	};

	const handleChangeGenre = event => {
		setFilters(prevState => ({
			...prevState,
			genre: event.target.value,
		}));
	};

	const filteredAvailableList = books => {
		return books.filter(book => {
			return (
				book.pages >= filters.pages &&
				(filters.search === '' ||
					book.title.toLowerCase().includes(filters.search.toLowerCase()) ||
					book.author.name
						.toLowerCase()
						.includes(filters.search.toLowerCase())) &&
				(filters.genre === 'todos' ||
					filters.genre === book.genre.toLowerCase())
			);
		});
	};

	return (
		<FiltersContext.Provider
			value={{
				filters,
				genreList,
				handleChange,
				handleChangeGenreList,
				handleChangeGenre,
				handleChangeRange,
				filteredAvailableList,
			}}
		>
			{children}
		</FiltersContext.Provider>
	);
}
