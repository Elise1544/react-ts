import {FormBlock, FormControl, FormField, FormLabel, FormWrapper} from './Form.styled';
import plusIcon from '../../assets/images/plus.png';
import {useDispatch, useSelector} from 'react-redux';
import {deleteAction, updateAction} from '../../features/formInput';
import {RootState} from '../../store';

export const Form = (props: {createNewToDo: Function}) => {
	let input = useSelector((state: RootState) => state.formInput.input);
	const dispatch = useDispatch();

	const formSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (input) {
			props.createNewToDo(input);
			dispatch(deleteAction());
		}
	};

	return (
		<FormWrapper>
			<FormBlock action="#" onSubmit={formSubmit}>
				<FormLabel>
					<FormField value={input} type="text" onChange={(e) => dispatch(updateAction(e.target.value))} />
					<FormControl icon={plusIcon} />
				</FormLabel>
			</FormBlock>
		</FormWrapper>
	);
};
