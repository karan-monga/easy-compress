import React from 'react';
import '../assets/css/navbar.css';
import Logo from '../assets/images/logo-img.png'

export const Navbar = () => {
	return (
		<nav className='navbar'>
			<ul>
				{/* //<li className='navBrand'>Compressio</li> */}
				<a className='navBrandHref' href='/'>
					<img className='nav-logo' src={Logo} alt='Logo' />
				</a>
				{/* <div className='navItem'>
					<a className='donateAnc' href='https://www.paypal.me'>
						<li className='donate'>Donate</li>
					</a>
					<a className='contactAnc' href='https://www.linkedin.com'>
						<li className='contact'>Contact</li>
					</a>
					<a href='https://github.com/twoabd/CompressioAPI'>
						<li>
							{' '}
							<i style={{ color: '#1f2937' }} className='fab fa-github'></i>
						</li>
					</a>
				</div> */}
			</ul>
		</nav>
	);
};
