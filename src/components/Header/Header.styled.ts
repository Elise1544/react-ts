import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBlock = styled.header`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	height: 50px;
	background-color: ${({theme}) => theme.colors.backgroundPrimary};
	transition: background-color 0.2s;
	display: flex;
	align-items: center;
`;

export const HeaderContainer = styled.div`
	position: relative;
	max-width: 97%;
	width: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const HeaderNavLink = styled(NavLink)`
	text-decoration: none;
	padding: 10px;
	color: #fff;

	&.active {
		color: #ffffff33;
	}
`;

export const HeaderThemeContainer = styled.div`
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
`;

export const HeaderThemeButton = styled.button`
	width: 30px;
	height: 30px;
	background-color: transparent;
	border: none;
	padding: 0;
	background-image: url(${({theme}) => theme.image});
	background-size: cover;
`;
