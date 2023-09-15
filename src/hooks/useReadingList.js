import { useContext } from 'react';
import { ReadingContext } from '../context/reading.jsx';

export default function useReadingList() {
	const context = useContext(ReadingContext);

	if (context === undefined) {
		throw new Error('useReadingList debe estar dentro de un ReadingProvider');
	}

	return context;
}
