import {Action} from './actions';
import {add, remove, replace} from '../immutate';
import {Site} from '../site/Site';
import * as siteEditorActions from '../site-editor/actions';
import * as siteEditorReducer from '../site-editor/reducer';

export type State = Array<Site>;

export const initialState: State = [
	new Site()
];

export const reducer = (state: State, action: Action | siteEditorActions.Action): State => {

	switch(action.type) {

        case "sites / add":
			return add(state, new Site());

		case "sites / remove":
			return remove(state, action.payload);

		case "sites / remove":
			return remove(state, action.payload);

		case 'site editor / randomize':
			const site = state.find(x => x.uuid == action.payload);
			if (!site) {
				return state;
			}
			return replace(state, site, siteEditorReducer.reducer(site, action));

		default:
            const _exhaustiveCheck: never = action;
            return state;
    }
}
