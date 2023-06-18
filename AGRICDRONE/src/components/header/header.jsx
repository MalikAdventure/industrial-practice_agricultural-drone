import './header.css';

import logo from '../../assets/img/logo.svg';
import telephone from '../../assets/img/telephone.svg';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__container'>
				<a className='header__logo' href='#'>
					<img src={logo} alt="logo" />
					<p>AGRIC</p>
					<span>DRONE</span>
				</a>
				<p className='header__explanation'>Покупка и аренда дронов для с/х</p>
				<a className='header__telephone' href="#">
					<img src={telephone} alt="telephone" />
					<p>+7 (495) 740-25-30</p>
				</a>
			</div>
		</header>
	);
};

export default Header;