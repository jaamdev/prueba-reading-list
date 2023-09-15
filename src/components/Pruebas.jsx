import { useState } from 'react';

const Pruebas = () => {
	const [availableBooks, setAvailableBooks] = useState([]); // Lista de libros disponibles
	const [readingList, setReadingList] = useState([]); // Lista de lectura
	const [draggedIndex, setDraggedIndex] = useState(null); // Índice del elemento arrastrado

	const handleDragStart = index => {
		setDraggedIndex(index);
	};

	const handleDragOver = (event, index) => {
		event.preventDefault();
	};

	const handleDrop = index => {
		if (draggedIndex === null) return;

		const draggedBook = availableBooks[draggedIndex];
		const updatedAvailableBooks = availableBooks.filter(
			(_, i) => i !== draggedIndex,
		);
		const updatedReadingList = [...readingList, draggedBook];

		setAvailableBooks(updatedAvailableBooks);
		setReadingList(updatedReadingList);
		setDraggedIndex(null);
	};

	return (
		<div className='container'>
			<div className='available-books'>
				{availableBooks.map((book, index) => (
					<div
						key={book.id}
						draggable
						onDragStart={() => handleDragStart(index)}
						onDragOver={e => handleDragOver(e, index)}
					>
						{book.title}
					</div>
				))}
			</div>
			<div
				className='reading-list'
				onDrop={() => handleDrop(readingList.length)}
				onDragOver={e => handleDragOver(e, readingList.length)}
			>
				{readingList.map((book, index) => (
					<div key={book.id}>{book.title}</div>
				))}
			</div>
		</div>
	);
};

export default Pruebas;
