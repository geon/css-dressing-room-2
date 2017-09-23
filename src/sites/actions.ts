import {Site} from '../site/Site';
import {Action} from '../Action';

export type Action = Add | Remove;

type Add = Action <'sites / add', {
	uuid: string
}>;

export const add = (uuid: string): Add => ({
	type: 'sites / add',
	payload: {
		uuid
	}
});

type Remove = Action <'sites / remove', {
	site: Site
}>;

export const remove = (site: Site): Remove => ({
	type: 'sites / remove',
	payload: {
		site
	}
});
