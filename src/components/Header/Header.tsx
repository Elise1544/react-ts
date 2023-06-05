import {useDispatch} from 'react-redux';
import {
	HeaderBlock,
	HeaderContainer,
	HeaderNavLink,
	HeaderThemeButton,
	HeaderThemeContainer,
	HeaderThemeImage,
} from './Header.styled';
import {toggleThemeAction} from '../../features/themeList';

import sun from '../../assets/images/sun.svg';

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
						}}>
						{/* <HeaderThemeImage src={sun} /> */}
					</HeaderThemeButton>
				</HeaderThemeContainer>
			</HeaderContainer>
		</HeaderBlock>
	);
};
