import {Styles} from './Style';


export class Site {

	uuid: string;
	styles: Styles;
	backgroundColor: string;

	constructor (uuid: string) {

		this.uuid = uuid;
		this.styles = {
			h2: {
				type: 'text',
				fontFamily: 'Georgia',
				color: '#5cf',
				fontSize: '2.25em',
				fontWeight: 'normal',
				fontStyle: 'normal'
			},
			a: {
				type: 'link',
				color: '#f4a',
				fontWeight: 'normal',
				fontStyle: 'normal'
			},
			p: {
				type: 'text',
				color: '#ccc',
				fontSize: '1em',
				fontFamily: 'Verdana',
				fontWeight: 'normal',
				fontStyle: 'normal'
			},
			blockquote: {
				type: 'text',
				color: '#5cf',
				fontSize: '1.25em',
				fontFamily: 'Verdana',
				fontWeight: 'normal',
				fontStyle: 'italic'
			},
			lead: {
				type: 'text',
				color: '#eee',
				fontSize: '1.25em',
				fontFamily: 'Verdana',
				fontWeight: 'normal',
				fontStyle: 'normal'
			},
			background: {
				type: 'background',
				backgroundColor: '#444'
			}
		};
	}
}
