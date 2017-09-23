import {Action} from './actions';
import {sets} from '../immutate';
import * as sites from '../sites/reducer';
import * as sitesActions from '../sites/actions';
import {Site} from '../site/Site';

export interface State {
    selectedSiteUuid?: string,
    selectedStyleName: string
};

export const initialState: State = {
    selectedStyleName: 'background'
}

export const reducer = (state: State, action: Action | sitesActions.Action, sites: sites.State) => {

    switch(action.type) {

        case "ui / set selected site uuid":
            return sets(state, {selectedSiteUuid: action.payload.uuid});

        case "ui / set selected style name":
            return sets(state, {selectedStyleName: action.payload.uuid});

        case "sites / add":
            return sets(state, {selectedSiteUuid: action.payload.uuid});

        case "sites / remove":

            if (state.selectedSiteUuid == action.payload.site.uuid) {

                return sets(state, {selectedSiteUuid: undefined});
            }

            return state;

		default:
            const _exhaustiveCheck: never = action;
            return state;
    }
}
