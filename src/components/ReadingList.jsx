import useReadingList from '../hooks/useReadingList.js';

export default function ReadingList() {
	const {
		readingList,
		removeFromList,
		clearList,
		handleDragStart,
		handleDragEnter,
		handleDragEnd,
	} = useReadingList();

	return (
		<section className='reading-list'>
			<h2>Lista de Lectura</h2>
			{readingList.length === 0 ? (
				''
			) : (
				<button onClick={() => clearList()}>Borrar todo</button>
			)}
			<ul>
				{readingList.length === 0 ? (
					<li>
						<p className='empty'>Lista vacía 😕</p>
					</li>
				) : (
					readingList.map((book, index) => (
						<li
							key={book.ISBN}
							title={`Borrar "${book.title}" de la lista`}
							onClick={() => removeFromList(book)}
							draggable
							onDragStart={() => handleDragStart(index)}
							onDragOver={e => e.preventDefault()}
							onDragEnter={() => handleDragEnter(index)}
							onDragEnd={handleDragEnd}
						>
							<img src={book.cover} alt={`Portada del libro ${book.title}`} />
							<p className='delete'>Borrar</p>
						</li>
					))
				)}
			</ul>
		</section>
	);
}
