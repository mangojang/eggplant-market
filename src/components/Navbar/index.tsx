'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import NavItem from '../NavItem';
import { Nav, Inner, Logo, NavBtn, NavListD, NavListM } from './style';

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	const handleMenu = () => {
		setMenu(!menu);
	};

	return (
		<Nav>
			<Inner>
				<Logo>
					<Link href="/">Logo</Link>
				</Logo>
				{/* mobile  nav button*/}
				<NavBtn>
					<div className={`nav_btn ${menu === false ? '' : 'on'}`} onClick={handleMenu}>
						<span></span>
						<span></span>
					</div>
				</NavBtn>
				{/* desktop nav */}
				<NavListD>
					<NavItem />
				</NavListD>
			</Inner>
			{/* mobile  nav*/}
			<NavListM className={menu === false ? '' : 'on'}>
				<NavItem />
			</NavListM>
		</Nav>
	);
};

export default Navbar;
