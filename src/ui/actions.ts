import {Site} from '../site/Site';
import {Action} from '../Action';

export type Action = SetSelectedSiteUuid | SetSelectedStyleName;

type SetSelectedSiteUuid = Action <'ui / set selected site uuid', {
	uuid: string
}>;

export const setSelectedSiteUuid = (uuid: string): SetSelectedSiteUuid => ({
	type: 'ui / set selected site uuid',
	payload: {
		uuid
	}
});

type SetSelectedStyleName = Action <'ui / set selected style name', {
	uuid: string
}>;

export const setSelectedStyleName = (uuid: string): SetSelectedStyleName => ({
	type: 'ui / set selected style name',
	payload: {
		uuid
	}
});
