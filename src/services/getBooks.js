import results from '../mocks/books.json';

export default function getBooks() {
	try {
		const books = results.library;

		return books?.map(item => {
			const { book } = item;

			return {
				...book,
			};
		});
	} catch (e) {
		throw new Error('Los libros no están disponibles en este momento.');
	}
}
