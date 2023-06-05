import {Outlet} from 'react-router-dom';
import {Header} from '../components/Header/Header';
import {GlobalStyle} from '../styles/GlolobalStyle';
import {ThemeProvider} from 'styled-components';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {HelmetProvider} from 'react-helmet-async';
import {Head} from './Head';

export const Layout = () => {
	const theme = useSelector((state: RootState) => state.themeList.theme);

	return (
		<>
			<HelmetProvider>
				<Head />
			</HelmetProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header />
				<Outlet />
			</ThemeProvider>
		</>
	);
};
