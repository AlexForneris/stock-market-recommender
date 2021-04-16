import { Box, Typography, Container } from '@material-ui/core'
import styles from '../styles/Header.module.scss'

const Hero = () => {
	return (
        <Box className={styles.header}>
            <Container maxWidth="md" align="center">
                <Typography variant="h1" color="primary">
                    Stock Market Recommender
                </Typography>
                <Typography component="p" variant="h4" color="initial">
                    Simple app that provide buy, hold or sell recommendation for a given stock symbol.
                </Typography>
            </Container>
        </Box>
	);
};

export default Hero;
