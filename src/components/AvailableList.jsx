import useReadingList from '../hooks/useReadingList.js';
import useAvailableList from '../hooks/useAvailableList.js';

export default function AvailableList() {
	const { availableList } = useAvailableList();
	const { readingList, addToList, removeFromList } = useReadingList();

	return (
		<section className='available-list'>
			<ul onDragOver={e => e.preventDefault()}>
				{availableList.length > 0 ? (
					<>
						{availableList.map(book => {
							const isBookInList = readingList.some(
								item => item.ISBN === book.ISBN,
							);

							return (
								<li
									key={book.ISBN}
									title={
										isBookInList
											? `Borrar "${book.title}" de la lista`
											: `Añadir "${book.title}" a la lista`
									}
									onClick={
										isBookInList
											? () => removeFromList(book)
											: () => addToList(book)
									}
									className={isBookInList ? 'active' : ''}
								>
									<img
										src={book.cover}
										alt={`Portada del libro ${book.title}`}
									/>
									<p className='saved'>¡Guardado!</p>
								</li>
							);
						})}
					</>
				) : (
					<li>
						<p className='empty'>No hay libros 😕</p>
					</li>
				)}
			</ul>
		</section>
	);
}
