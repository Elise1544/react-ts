import {ErrorContainer, ErrorImage, ErrorLink, ErrorText} from './404.styled';

import image from '../assets/images/404.jpg';
import {ThemeProvider} from 'styled-components';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {GlobalStyle} from '../styles/GlolobalStyle';

export const NotFound = () => {
	const theme = useSelector((state: RootState) => state.themeList.theme);
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<ErrorContainer>
					<ErrorImage src={image} />
					<ErrorText>Страница не найдена</ErrorText>
					<ErrorLink to="/">Вернуться на главную</ErrorLink>
				</ErrorContainer>
			</ThemeProvider>
		</>
	);
};
