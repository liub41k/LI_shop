import React from 'react';
import './App.css';

import Header from '../Header';
import Banner from '../Banner';
import PopularCategories from '../PopularCategories';
import Goods from '../Goods';
import Footer from '../Footer';

// copy
// create css variables
// responsive

export const App = () => (
	<>
		<Header />
		<Banner />
		<div className='container'>
			<PopularCategories />
			<Goods />
		</div>
		<Footer />
	</>
);
