import { createContext, useRef, useState } from 'react';

export const ReadingContext = createContext();

const initialStorage = JSON.parse(window.localStorage.getItem('list')) || [];

export function ReadingProvider({ children }) {
	const [readingList, setReadingList] = useState(initialStorage);
	const draggedItemIndex = useRef(null);
	const draggedOverItemIndex = useRef(null);

	window.addEventListener('storage', e => {
		const newList = getStorage();
		setReadingList(newList);
	});

	const getStorage = () =>
		JSON.parse(window.localStorage.getItem('list')) || [];

	const updateStorage = data => {
		window.localStorage.setItem('list', JSON.stringify(data));
	};

	const addToList = book => {
		const isBookInList = readingList.findIndex(item => item.ISBN === book.ISBN);

		if (isBookInList === -1) {
			const newList = [book, ...readingList];
			setReadingList(newList);
			updateStorage(newList);
		}
	};

	const removeFromList = book => {
		const newList = readingList.filter(item => item.ISBN !== book.ISBN);

		setReadingList(newList);
		updateStorage(newList);
	};

	const clearList = () => {
		setReadingList([]);
		window.localStorage.clear();
	};

	const handleDragStart = index => {
		draggedItemIndex.current = index;
	};

	const handleDragEnter = index => {
		draggedOverItemIndex.current = index;
	};

	const handleDragEnd = () => {
		if (
			draggedItemIndex.current === null ||
			draggedOverItemIndex.current === null
		)
			return;
		if (draggedItemIndex.current === draggedOverItemIndex.current) {
			draggedItemIndex.current = null;
			draggedOverItemIndex.current = null;
			return;
		}
		const newList = structuredClone(readingList);
		const draggedBook = newList.splice(draggedItemIndex.current, 1)[0];
		newList.splice(draggedOverItemIndex.current, 0, draggedBook);
		draggedItemIndex.current = null;
		draggedOverItemIndex.current = null;
		setReadingList(newList);
		updateStorage(newList);
	};

	return (
		<ReadingContext.Provider
			value={{
				readingList,
				addToList,
				removeFromList,
				clearList,
				handleDragStart,
				handleDragEnter,
				handleDragEnd,
			}}
		>
			{children}
		</ReadingContext.Provider>
	);
}
