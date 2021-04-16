import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#202020',
		},
		secondary: {
			main: '#4484CE',
		},
		error: {
			main: '#ED553B',
		},
		background: {
			default: '#3CAEA3',
		},
	},
});


export default theme;
