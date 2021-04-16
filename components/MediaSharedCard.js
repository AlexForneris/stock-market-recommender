import { Box, List, ListItem, Divider, Typography } from '@material-ui/core';

const MediaSharedCard = ({ stockObject }) => {
	return (
		<>
			<Typography variant="h5" component="h3" color="primary" style={{marginTop: '2rem'}}>
				Social media shared on the last 10 days:
			</Typography>

			<List dense>
				{stockObject.socialMediaCount.map((socialMedia, i) => {
					return (
						<Box key={i}>
							{socialMedia.name && (
								<>
									<ListItem disableGutters>
										<Typography
											variant="h5"
											component="p"
											color="initial"
                                            style={{textTransform: 'capitalize'}}
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
								<ListItem disableGutters style={{marginTop: '1rem'}}>
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
						</Box>
					)
				})}
			</List>
		</>
	);
};

export default MediaSharedCard
