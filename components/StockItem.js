import styles from '../styles/StockItem.module.scss';
import { Box, Typography, Divider } from '@material-ui/core';
import MediaSharedCard from './MediaSharedCard';
import Curve from './Curve';

const StockItem = ({ stockObject }) => {
	return (
		<Box className={styles.card}>
			<Typography variant="h1" component="h2" color="secondary">
				{stockObject.symbol}
			</Typography>
			<Divider component="p" style={{ marginBottom: '2rem' }} />
			<Curve stockValuesObject={stockObject.values} />
			<MediaSharedCard
				socialMediaObjects={stockObject.socialMediaCount}
			/>
		</Box>
	);
};

export default StockItem;
