import {Action} from './actions';
import {set} from '../immutate';

import * as sites from '../sites/reducer';
import * as ui from '../ui/reducer';

export interface State {
	sites: sites.State;
	ui: ui.State;
}

export const initialState: State = {
	sites: sites.initialState,
	ui: ui.initialState
};

export const reducer = (state: State, action: Action): State => {

	return {
		sites: sites.reducer(
			state.sites,
			<any> action,
		),
		ui: ui.reducer(
			state.ui,
			<any> action,
			state.sites
		)
	};
};
