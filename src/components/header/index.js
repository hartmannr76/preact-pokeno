import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Pokeno</h1>
		<nav>
			<Link activeClassName={style.active} href="/preact-pokeno">Host</Link>
		</nav>
	</header>
);

export default Header;
