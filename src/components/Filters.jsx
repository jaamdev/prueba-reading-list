import { useId } from 'react';
import useFilters from '../hooks/useFilters.js';
import useAvailableList from '../hooks/useAvailableList.js';
import useReadingList from '../hooks/useReadingList.js';

export default function Filters() {
	const {
		filters,
		genreList,
		handleChange,
		handleChangeGenre,
		handleChangeRange,
	} = useFilters();

	const inputSearchId = useId();
	const inputRangeId = useId();
	const inputSelectId = useId();

	const { availableList } = useAvailableList();
	const { readingList } = useReadingList();
	const numAvailable = availableList.length;
	const numList = readingList.length;

	return (
		<section className='filters'>
			<div>
				<p>{numAvailable} libros disponibles</p>
				<p>{numList} en la lista</p>
			</div>
			<div>
				<label htmlFor={inputSearchId}>Buscar:</label>
				<input
					id={inputSearchId}
					type='text'
					autoComplete='off'
					placeholder='Harry Potter...'
					onChange={e => handleChange(e)}
					value={filters.search}
				/>
			</div>
			<div>
				<label htmlFor={inputRangeId}>Páginas:</label>
				<input
					id={inputRangeId}
					type='range'
					min='0'
					step='50'
					max='1200'
					onChange={handleChangeRange}
				/>
				<p>{filters.pages}</p>
			</div>
			<div>
				<label htmlFor={inputSelectId}>Género:</label>
				<select
					id={inputSelectId}
					onChange={handleChangeGenre}
					defaultValue='todos'
				>
					<option value='todos'>Todos</option>
					{genreList.map((genre, index) => (
						<option key={index} value={genre.toLowerCase()}>
							{genre}
						</option>
					))}
				</select>
			</div>
		</section>
	);
}
