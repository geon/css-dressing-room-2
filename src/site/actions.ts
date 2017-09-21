import {Site} from './Site';

interface SetterAction<Tstate, TactionTypeName, TstatePropertyName extends keyof Tstate> {

	type: TactionTypeName;
	payload: {
		site: Site,
		propertyName: TstatePropertyName,
		value: Tstate[TstatePropertyName]
	};

};

export type Action =
	SetterAction<Site, 'site / set property color', 'color'> |
	SetterAction<Site, 'site / set property backgroundColor', 'backgroundColor'> | {

		type: 'site / randomize';
		payload: {
			site: Site;
		};

	}
;
