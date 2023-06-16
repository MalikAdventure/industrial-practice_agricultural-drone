import './header.css';

import logo from '../../assets/img/logo.svg';
import telephone from '../../assets/img/telephone.svg';

const Header = () => {
	return (
		<div className='header'>
			<div className='container'>
				<a className='logo' href='#'>
					<img src={logo} alt="logo" />
					<p>AGRIC</p>
					<span>DRONE</span>
				</a>
				<p className='explanation'>Покупка и аренда дронов для с/х</p>
				<a className='telephone' href="">
					<img src={telephone} alt="telephone" />
					<p>+7 (495) 740-25-30</p>
				</a>
			</div>
		</div>
	);
};

export default Header;