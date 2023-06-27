import { media } from '@/styles/media';
import styled from 'styled-components';

export const Item = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	li {
		width: 100%;
		padding: 0.8rem;
		color: var(--text-color);
		font-size: 1.8rem;
		cursor: pointer;
		background-color: var(--primary-color);
		&:hover {
			background-color: var(--hover-color);
		}
		a,
		button {
			font-size: inherit;
			color: inherit;
		}
		button {
			cursor: pointer;
		}
	}
	${media.tablet`
        flex-direction: column;
        gap: 0;
        li{
            padding: 1.6rem;
            font-size: 1.6rem;
        }
    `}
`;
