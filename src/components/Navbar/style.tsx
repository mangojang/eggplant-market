import { media } from '@/styles/media';
import styled from 'styled-components';

export const Nav = styled.nav`
	position: relative;
	z-index: 10;
	width: 100%;
	height: 6.4rem;
	color: var(--text-color);
	background-color: var(--primary-color);
`;

export const Inner = styled.div`
	max-width: calc(120rem + 2rem * 2);
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
	padding: 0 2rem;
	background-color: inherit;
`;

export const Logo = styled.div`
	outline: 1px solid white;
`;

export const NavBtn = styled.div`
	display: none;
	font-size: 3.6rem;
	cursor: pointer;
	button {
		font-size: inherit;
	}
	.nav_btn {
		width: 2.6rem;
		height: 2.6rem;
		position: relative;
		span {
			position: absolute;
			left: 0;
			display: block;
			width: 80%;
			height: 2px;
			background-color: var(--text-color);
			transition: 200ms ease-in-out;
			&:nth-child(1) {
				top: 20%;
			}
			&:nth-child(2) {
				left: auto;
				right: 0;
				top: 60%;
			}
		}
		&.on {
			span {
				&:nth-child(1) {
					right: 0;
					top: 50%;
					transform: rotate(45deg);
				}
				&:nth-child(2) {
					left: 0;
					right: 0;
					top: 50%;
					transform: rotate(-45deg);
				}
			}
		}
	}
	${media.tablet`
        display: block;
    `}
`;

// export interface NavListProps {
// 	mobile: boolean;
// }
// export const NavList = styled.div<NavListProps>`
// 	${media.tablet`
//     display:${(props: NavListProps) => (props.mobile ? 'block' : 'none')};
//     `}
// `;

export const NavListD = styled.div`
	display: block;
	${media.tablet`
        display: none;
    `}
`;

export const NavListM = styled.div`
	display: none;
	${media.tablet`
        display: block;
    `}
	position: absolute;
	width: 100%;
	z-index: -1;
	transition: transform 0.3s ease-in;
	transform: translateY(-100%);
	&.on {
		transform: translateY(0);
	}
`;
