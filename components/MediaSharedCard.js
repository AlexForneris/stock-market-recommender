import { Box, List, ListItem, Divider, Typography } from '@material-ui/core';
import classNames from 'classnames/bind';
import styles from '../styles/StockItem.module.scss';

const MediaSharedCard = ({ socialMediaObjects }) => {
	return (
		<>
			<Typography
				variant="h5"
				component="h3"
				color="primary"
				style={{ marginTop: '2rem' }}
			>
				Social media shared on the last 10 days:
			</Typography>

			<List dense>
				{socialMediaObjects.map((socialMedia, i) => {
					return (
						<Box key={i}>
							{socialMedia.name && (
								<>
									<ListItem disableGutters>
										<Typography
											variant="h5"
											component="p"
											color="initial"
											style={{
												textTransform: 'capitalize',
											}}
										>
											{socialMedia.name} -
										</Typography>
										{'  '}
										<Typography
											variant="h6"
											component="p"
											color="initial"
											style={{ marginLeft: '1rem' }}
										>
											Buy : {socialMedia.buy}
										</Typography>
										<Typography
											variant="h6"
											component="p"
											color="initial"
											style={{ marginLeft: '1rem' }}
										>
											Hold : {socialMedia.hold}
										</Typography>
										<Typography
											variant="h6"
											component="p"
											color="initial"
											style={{ marginLeft: '1rem' }}
										>
											Sell : {socialMedia.sell}
										</Typography>
									</ListItem>
									<Divider component="li" />
								</>
							)}
							{socialMedia.totalBuyShared && (
								<ListItem
									disableGutters
									style={{ marginTop: '1rem' }}
								>
									<Typography
										variant="h5"
										component="p"
										color="initial"
									>
										Total for Buy:
									</Typography>
									{'  '}
									<Typography
										variant="h5"
										component="p"
										color="initial"
										style={{ marginLeft: '1rem' }}
									>
										{socialMedia.totalBuyShared}
									</Typography>
								</ListItem>
							)}
							{socialMedia.totalHoldShared && (
								<ListItem disableGutters>
									<Typography
										variant="h5"
										component="p"
										color="initial"
									>
										Total for Hold:
									</Typography>
									{'  '}
									<Typography
										variant="h5"
										component="p"
										color="initial"
										style={{ marginLeft: '1rem' }}
									>
										{socialMedia.totalHoldShared}
									</Typography>
								</ListItem>
							)}
							{socialMedia.totalSellShared && (
								<ListItem disableGutters>
									<Typography
										variant="h5"
										component="p"
										color="initial"
									>
										Total for Sell:
									</Typography>
									{'  '}
									<Typography
										variant="h5"
										component="p"
										color="initial"
										style={{ marginLeft: '1rem' }}
									>
										{socialMedia.totalSellShared}
									</Typography>
								</ListItem>
							)}
							{socialMedia.bestTrend && (
								<ListItem
									disableGutters
									className={styles.bestTrend}
								>
									<Typography variant="h5" component="p">
										Based on the last 10 days social media
										shared the best trend is to &nbsp;
										<strong
											className={classNames(
												socialMedia.bestTrend ==
													'buy' && styles.buy,
												socialMedia.bestTrend ==
													'hold' && styles.hold,
												socialMedia.bestTrend ==
													'sell' && styles.sell,
											)}
										>
											{socialMedia.bestTrend}
										</strong>
									</Typography>
								</ListItem>
							)}
						</Box>
					);
				})}
			</List>
		</>
	);
};

export default MediaSharedCard;
