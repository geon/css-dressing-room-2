import {Site} from '../site/Site';

export type Action = {

	type: 'sites / add';

} | {

	type: 'sites / remove';
	payload: Site;

};
