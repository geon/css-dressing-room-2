import {Site} from '../site/Site';
import {Action} from '../Action';

export type Action = Randomize;

type Randomize = Action <'site editor / randomize', {
	uuid: string
}>;

export const randomize = (uuid: string): Randomize => ({
	type: 'site editor / randomize',
	payload: {
		uuid
	}
});
