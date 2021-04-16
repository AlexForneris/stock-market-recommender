import Head from 'next/head';
import Typography from '@material-ui/core/Typography'

const about = () => {
	return (
		<div>
			<Head>
				<title>About</title>
			</Head>
			<Typography variant="p" component="h2" color="initial" style={{padding: '8rem'}}>
				Test website by Alexandre Forneris
			</Typography>
		</div>
	);
};

export default about;
