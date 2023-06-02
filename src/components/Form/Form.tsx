import {useState} from 'react';
import classes from './Form.module.scss';

export const Form = (props: {createNewToDo: Function}) => {
	const [text, setText] = useState<string>('');

	const formSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();

		if (text) {
			props.createNewToDo(text);
			setText('');
		}
	};

	return (
		<div className={classes.wrapper}>
			<form action="#" onSubmit={formSubmit}>
				<label>
					<input value={text} type="text" className={classes.input} onChange={(e) => setText(e.target.value)} />
					<button className={classes.button}></button>
				</label>
			</form>
		</div>
	);
};
