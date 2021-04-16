import socialMediaArray from '../data/socialMedia';

export const randomInteger = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate Stock data with value based on stock array and currentDay dateDay
export const stockPriceGenerator = (
	stock,
	currentDay,
	minValueByDay = -20,
	maxValuebyDay = 20,
) => {
	let newStockArray = [];

	for (let i = 0; i < stock.length; i++) {
		let stockObject = {};

        stockObject.id = i;
		stockObject.symbol = stock[i];
		stockObject.values = [];

		for (let v = 0; v < 10; v++) {
			let dateObject = {};

			dateObject.date = currentDay - v;
			dateObject.value = randomInteger(minValueByDay, maxValuebyDay);
			stockObject.values.push(dateObject);
		}

		stockObject.socialMediaCount = socialMediaCountGenerator();

		newStockArray.push(stockObject);
	}

	return newStockArray;
};

// Return array with social media count - random
export const socialMediaCountGenerator = (minShared = 1, maxShared = 200) => {
	let socialMediaCountArray = [];
	let totalBuyShared = 0;
	let totalHoldShared = 0;
	let totalSellShared = 0;

	for (let i = 0; i < socialMediaArray.length; i++) {
		let socialMediaObject = {};
		let buyShared = randomInteger(minShared, maxShared);
		let holdShared = randomInteger(minShared, maxShared);
		let sellShared = randomInteger(minShared, maxShared);
        let name =  socialMediaArray[i];

		socialMediaObject.name = name;
		socialMediaObject.buy = buyShared;
		socialMediaObject.hold = holdShared;
		socialMediaObject.sell = sellShared;

		socialMediaCountArray.push(socialMediaObject);

		totalBuyShared += buyShared;
        totalHoldShared += holdShared;
        totalSellShared += sellShared;
	}
    
	socialMediaCountArray.push({totalBuyShared});
	socialMediaCountArray.push({totalHoldShared});
	socialMediaCountArray.push({totalSellShared});

	return socialMediaCountArray;
};
