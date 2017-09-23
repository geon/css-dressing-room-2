import {Action} from './actions';
import {add, remove, replace} from '../immutate';
import {Site} from '../site/Site';
import * as siteEditorActions from '../site-editor/actions';
import * as siteEditorReducer from '../site-editor/reducer';
import {v4 as uuid} from 'node-uuid';


export type State = Array<Site>;

export const initialState: State = [
	new Site(uuid())
];

export const reducer = (state: State, action: Action | siteEditorActions.Action): State => {

	switch(action.type) {

        case "sites / add":
			return add(state, new Site(action.payload.uuid));

		case "sites / remove":
			return remove(state, action.payload.site);

		case 'site editor / randomize':
			const site = state.find(x => x.uuid == action.payload.uuid);
			if (!site) {
				return state;
			}
			return replace(state, site, siteEditorReducer.reducer(site, action));

		default:
            const _exhaustiveCheck: never = action;
            return state;
    }
}
