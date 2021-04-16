import styles from '../styles/StockItem.module.scss';
import StockItem from './StockItem';

const StockList = ({ dataStocks, isSingle }) => {
	return (
		<div className={`${styles.grid} ${isSingle && styles.isSingle}`}>
			{dataStocks.map((stockObject) => (
				<StockItem stockObject={stockObject} key={stockObject.id} />
			))}
		</div>
	);
};

export default StockList;
