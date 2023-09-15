import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ReadingProvider } from './context/reading.jsx';
import { FiltersProvider } from './context/filters.jsx';
import { AvailableListProvider } from './context/availablelist.jsx';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Filters from './components/Filters.jsx';
import AvailableList from './components/AvailableList.jsx';
import ReadingList from './components/ReadingList.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
	return (
		<FiltersProvider>
			<AvailableListProvider>
				<ReadingProvider>
					<Header />
					<Nav />
					<Routes>
						<Route
							path='/'
							element={
								<main className='available-ctn'>
									<Filters />
									<AvailableList />
								</main>
							}
						/>
						<Route
							path='/list'
							element={
								<main className='reading-ctn'>
									<ReadingList />
								</main>
							}
						/>
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
					<Footer />
				</ReadingProvider>
			</AvailableListProvider>
		</FiltersProvider>
	);
}
