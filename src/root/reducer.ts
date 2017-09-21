import {Action} from './actions';
import {set} from '../immutate';

import * as sites from '../sites/reducer';

export interface State {
	sites: sites.State;
}

export const initialState: State = {
	sites: sites.initialState,
};

export const reducer = (state: State, action: Action) => {

	return {
		sites: sites.reducer(
			state.sites,
			<any> action
		)
	};
};
