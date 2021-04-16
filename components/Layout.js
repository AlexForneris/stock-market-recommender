import styles from '../styles/Layout.module.scss';
import Copyright from './Copyright';
import Header from './Header';
import Nav from './Nav';

const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<div className={styles.container}>
				<main className={styles.main}>
					<Header />
					{children}
				</main>
			</div>
            <Copyright />
		</>
	);
};

export default Layout;
