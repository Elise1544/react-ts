import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const ErrorContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0;
`;

export const ErrorImage = styled.img``;

export const ErrorText = styled.h1`
	margin: 0.3em;
`;

export const ErrorLink = styled(Link)`
	text-decoration: none;
	color: blue;
	font-size: 20px;

	&:hover {
		opacity: 0.8;
		color: black;
	}
`;
