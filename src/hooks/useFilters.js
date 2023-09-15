import { useContext } from 'react';
import { FiltersContext } from '../context/filters.jsx';

export default function useFilters() {
	const context = useContext(FiltersContext);

	if (context === undefined) {
		throw new Error('useFilters debe estar dentro de un FiltersProvider');
	}

	return context;
}
