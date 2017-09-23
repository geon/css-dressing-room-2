import {Site} from '../site/Site';
import {Action} from '../Action';
import {StyleName} from '../site/Style';

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
	styleName: StyleName
}>;

export const setSelectedStyleName = (styleName: StyleName): SetSelectedStyleName => ({
	type: 'ui / set selected style name',
	payload: {
		styleName
	}
});
