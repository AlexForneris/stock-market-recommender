import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

export default function Copyright() {
	return (
        <Container maxWidth={false} style={{marginTop: '4rem', marginBottom: '2rem'}}>
        <Typography variant="h4" component="p" color="primary" align="center">        
            Alexandre Forneris - Stock Market Recommender {new Date().getFullYear()}{'.'}
        </Typography>
            <Typography variant="h5" component="p" color="textSecondary" align="center">        
                Nextjs, React and Chartjs
            </Typography>
        </Container>
	);
}
