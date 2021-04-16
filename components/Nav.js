import Link from 'next/link';
import styles from '../styles/Nav.module.scss';

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
				</ul>
			</ul>
		</nav>
	);
};

export default Nav;
