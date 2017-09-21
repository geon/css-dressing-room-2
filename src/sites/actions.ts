import {Site} from '../site/Site';
import * as site from '../site/actions';

export type Action = site.Action | {

	type: 'sites / add';

} | {

	type: 'sites / remove';
	payload: Site;

};
