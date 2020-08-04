import React from 'react';
import './Goods.css';

const PUBLIC = process.env.PUBLIC_URL;

export const Goods = () => {
	const goods = goodsInfo.map(({ src, caption, price }) => {
		return (
			<li className='goods__item' key={caption}>
				<a href='#' className='goods__link'>
					<figure>
						<img src={src} alt={caption} />
					</figure>
					<span className='goods__title'>{caption}</span>
					<span className='goods__price'>{price}</span>
				</a>
			</li>
		);
	});

	return (
		<section className='section section--last'>
			<ul className='goods grid col-auto'>{goods}</ul>
		</section>
	);
};

const goodsInfo = [
	{
		src: `${PUBLIC}/img/image3.jpg`,
		caption: 'Фенди Худи1',
		price: '999грн',
	},
	{
		src: `${PUBLIC}/img/image3.jpg`,
		caption: 'Фенди Худи2 Фенди Худи2 Фенди Худи2 Фенди Худи2 Фенди Худи2',
		price: '999грн',
	},
	{
		src: `${PUBLIC}/img/image3.jpg`,
		caption: 'Фенди Худи3',
		price: '999грн',
	},
	{
		src: `${PUBLIC}/img/image3.jpg`,
		caption: 'Фенди Худи4',
		price: '999грн',
	},
	{
		src: `${PUBLIC}/img/image3.jpg`,
		caption: 'Фенди Худи5',
		price: '999грн',
	},
	{
		src: `${PUBLIC}/img/image3.jpg`,
		caption: 'Фенди Худи6',
		price: '999грн',
	},
	{
		src: `${PUBLIC}/img/image3.jpg`,
		caption: 'Фенди Худи7',
		price: '999грн',
	},
	{
		src: `${PUBLIC}/img/image3.jpg`,
		caption: 'Фенди Худи8',
		price: '999грн',
	},
	{
		src: `${PUBLIC}/img/image3.jpg`,
		caption: 'Фенди Худи9',
		price: '999грн',
	},
];
