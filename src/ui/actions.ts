import {Site} from '../site/Site';

export type Action = {

	type: 'ui / set selected site uuid';
	payload: Site;

} |  {

		type: 'ui / set selected style name';
		payload: string

// } |  {

// 	type: 'ui / randomize style';
// 	payload: string

};
