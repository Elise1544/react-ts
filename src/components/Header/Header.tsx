import {useDispatch} from 'react-redux';
import {HeaderBlock, HeaderContainer, HeaderNavLink, HeaderThemeButton, HeaderThemeContainer} from './Header.styled';
import {toggleThemeAction} from '../../features/themeList';

export const Header = () => {
	const dispatch = useDispatch();

	return (
		<HeaderBlock>
			<HeaderContainer>
				<HeaderNavLink to="/">Todo</HeaderNavLink>
				<HeaderNavLink to="/list">List</HeaderNavLink>

				<HeaderThemeContainer>
					<HeaderThemeButton
						onClick={() => {
							dispatch(toggleThemeAction());
						}}></HeaderThemeButton>
				</HeaderThemeContainer>
			</HeaderContainer>
		</HeaderBlock>
	);
};
