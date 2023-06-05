import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface FormInputState {
	input: string;
}

const initialState: FormInputState = {
	input: '',
};

export const FormInputSlice = createSlice({
	name: 'formInput',
	initialState,
	reducers: {
		updateAction: (state, action: PayloadAction<string>) => {
			state.input = action.payload;
		},
		deleteAction: (state) => {
			state.input = '';
		},
	},
});

export const {updateAction, deleteAction} = FormInputSlice.actions;

export default FormInputSlice.reducer;
