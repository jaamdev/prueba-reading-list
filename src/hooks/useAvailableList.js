import { useContext } from 'react';
import { AvailableListContext } from '../context/availablelist.jsx';

export default function useAvailableList() {
	const context = useContext(AvailableListContext);

	if (context === undefined) {
		throw new Error(
			'useAvailableList debe estar dentro de un AvailableListProvider',
		);
	}

	return context;
}
