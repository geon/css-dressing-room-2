import {Action} from './actions';
import {sets} from '../immutate';
import * as sites from '../sites/reducer';
import * as sitesActions from '../sites/actions';

export interface State {
    selectedSiteIndex: number
};

export const initialState: State = {
    selectedSiteIndex: 0
}

export const reducer = (state: State, action: Action | sitesActions.Action, sites: sites.State) => {

    switch(action.type) {

        case "ui / set selected site":
            let index = sites.indexOf(action.payload);
            if (index == -1) {
                return state;
            }
			return sets(state, {selectedSiteIndex: index});

        case "sites / add":
			return sets(state, {selectedSiteIndex: sites.length - 1});

        case "sites / remove":
            const removedIndex = sites.indexOf(action.payload);

            // Inore invalid removes.
            if (removedIndex == -1) {
                return state;
            }

            // When removing the selected, select next left.
            if (removedIndex == state.selectedSiteIndex) {
                return sets(state, {selectedSiteIndex: Math.max(0, state.selectedSiteIndex - 1)});
            }

            return state;

		default:
            // const _exhaustiveCheck: never = action;
            return state;
    }
}
