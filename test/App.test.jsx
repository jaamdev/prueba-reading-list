import { afterEach, describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { ReadingProvider } from '../src/context/reading.jsx';
import ReadingList from '../src/components/ReadingList.jsx';
import Footer from '../src/components/Footer.jsx';

describe('test reading list', () => {
	afterEach(cleanup);

	it('should render', () => {
		render(
			<ReadingProvider>
				<ReadingList />
			</ReadingProvider>,
		);
	});

	it('should render correctly title', () => {
		render(
			<ReadingProvider>
				<ReadingList />
			</ReadingProvider>,
		);

		screen.getByText('Lista de Lectura');
	});

	it('should render correctly empty text', () => {
		render(
			<ReadingProvider>
				<ReadingList />
			</ReadingProvider>,
		);

		screen.getByText('Lista vacía 😕');
	});
});

describe('test footer', () => {
	afterEach(cleanup);

	it('should render', () => {
		render(<Footer />);
	});

	it('should author name', () => {
		render(<Footer />);

		screen.getByText('JaamDev');
	});
});
