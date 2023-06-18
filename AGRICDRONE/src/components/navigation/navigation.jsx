import './navigation.css';

const Navigation = () => {
	return (
		<nav className='navigation'>
			<div className='navigation__container'>
				<a className='navigation__item' href='#'>Продукция</a>
				<div className='navigation__separation'></div>
				<a className='navigation__item' href='#'>Сервисный центр</a>
				<div className='navigation__separation'></div>
				<a className='navigation__item' href='#'>Информация / Документация</a>
				<div className='navigation__separation'></div>
				<a className='navigation__item' href='#'>О нас</a>
			</div>
		</nav>
	);
};

export default Navigation;