import Head from 'next/head';
import { useState } from 'react';
import { stockPriceGenerator } from '../utils/utils';
import stockSymbol from '../data/stockData.json';
import StockList from '../components/StockList';
import Form from '../components/Form';

export default function Home({ dataStocks }) {
	console.log('Take a look at the data object created:', dataStocks);

	const [inputState, setInputState] = useState('');

	const setInputValue = (text) => {
		setInputState(text);
	};

	const newStockArray = inputState
		? dataStocks.filter((e) => e.symbol == inputState)
		: dataStocks;

	return (
		<>
			<Head>
				<title>Stock Market Recommender</title>
			</Head>
			<Form setInputValue={setInputValue} />
			<StockList dataStocks={newStockArray} isSingle={!!inputState} />
		</>
	);
}

export const getStaticProps = async () => {
	// Switch for an api that provide data
	// const result = await fetch(
	// 	`https://stocks-url`,
	// );
	// const dataStocks = await result.json();

	// Retrieve stock and values for last 10 days and today
	const dataStocks = stockPriceGenerator(stockSymbol, new Date().getDate());
	return {
		props: {
			dataStocks,
		},
	};
};
