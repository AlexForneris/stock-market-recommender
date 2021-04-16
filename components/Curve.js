import { Box } from '@material-ui/core';
import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';
import { chartConfig } from '../utils/chartConfig';

const Curve = ({ stockObject }) => {
    const refCanvas = useRef();
    
    // Get day dates from stock
    const filtersObject = stockObject.values.filter((o) => o.date).reverse();;
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
