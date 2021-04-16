import theme from './theme'

export const chartConfig = (labels, value) => {
	const data = {
		labels: labels,
		datasets: [
			{
				label: 'Stock values for the last 10 days',
				backgroundColor: theme.palette.primary.main,
				borderColor: theme.palette.background.default,
				data: value,
			},
		],
	};

    const config = {
        type: 'line',
        data,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    };

    return config;
}