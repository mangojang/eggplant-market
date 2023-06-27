import Link from 'next/link';
import React from 'react';
import { Item } from './style';

const NavItem = () => {
	return (
		<Item>
			<li>
				<Link href="/admin">Admin</Link>
			</li>
			<li>
				<Link href="/user">User</Link>
			</li>
			<li>
				<button>SignOut</button>
			</li>
			<li>
				<button>SignIn</button>
			</li>
		</Item>
	);
};

export default NavItem;
