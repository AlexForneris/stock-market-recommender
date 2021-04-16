import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

export default function Copyright() {
	return (
        <Container maxWidth={false} style={{marginTop: '4rem', marginBottom: '2rem'}}>
            <Typography variant="h4" component="p" color="textSecondary" align="center">        
                Forneris - Stock Market Recommender {new Date().getFullYear()}{'.'}
            </Typography>
        </Container>
	);
}
