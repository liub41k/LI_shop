import React from 'react';
import './PopularCategories.css';

const PUBLIC = process.env.PUBLIC_URL;

const images = [
	{
		src: `${PUBLIC}/img/image1.jpg`,
		caption: 'Носки',
	},
	{
		src: `${PUBLIC}/img/image2.jpg`,
		caption: 'Носочки',
	},
	{
		src: `${PUBLIC}/img/image3.jpg`,
		caption: 'Сокс',
	},
];

export const PopularCategories = () => {
	const popClothes = images.map(({ src, caption }) => {
		return (
			<a href='#' className='wear' key={caption}>
				<figure>
					<img src={src} alt={caption} className='wear__img' />
					{/* <figcaption className='wear__title'>{caption}</figcaption> */}
				</figure>
			</a>
		);
	});

	return (
		<section className='section'>
			<h2 className='section__title'>Популярные товары</h2>
			<div className='grid grid--space-top col-3'>{popClothes}</div>
		</section>
	);
};
