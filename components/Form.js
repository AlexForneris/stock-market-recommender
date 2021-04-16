import { Container, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import StockSymbol from '../data/stockData.json';
import styles from '../styles/Form.module.scss';

const Form = ({setInputValue}) => {
    return (
        <Container className={styles.container} align="center">
            <Autocomplete
                className={styles.autocomplete}
                options={StockSymbol}
                renderInput={(params) => <TextField {...params} label="Filter by Stock symbol" variant="outlined" />}
                onChange={(_, newValue) => {
                    setInputValue(newValue);
                }}
                ListboxProps={
                    {
                        style:{
                            fontSize: '1.5rem',
                            border: '1px solid #4484CE'
                        }
                    }
                }
                />
        </Container>
    )
}

Form.propTypes = {

}

export default Form
