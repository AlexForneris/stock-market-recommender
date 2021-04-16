import { Box } from '@material-ui/core';
import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';
import { chartConfig } from '../utils/chartConfig';

const Curve = ({ stockValuesObject }) => {
    const refCanvas = useRef();
    
    // Get day and dates from stock object
    const filtersObject = stockValuesObject.filter((o) => o.date).reverse();
    const labels = filtersObject.map(e => e.date);
    const value = filtersObject.map(e => e.value);

    useEffect(() => {
        const myChart = new Chart(
            refCanvas.current,
            chartConfig(labels, value)
        );
        return () => {
            myChart.destroy();
        }
    }, [refCanvas])

	return (
		<Box>
			<canvas ref={refCanvas} className="myChart"></canvas>
		</Box>
	);
};

export default Curve;
