import {v4 as uuid} from 'node-uuid';

export class Site {

	uuid: string;
	color: string;
	backgroundColor: string;

	constructor () {

		this.uuid = uuid();
		this.color = '#f08';
		this.backgroundColor= '#333';
	}
}
