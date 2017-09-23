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
				color: '#55ccff',
				fontSize: '2.25em',
				fontWeight: 'normal',
				fontStyle: 'normal'
			},
			a: {
				type: 'link',
				color: '#ff44aa',
				fontWeight: 'normal',
				fontStyle: 'normal'
			},
			p: {
				type: 'text',
				color: '#cccccc',
				fontSize: '1em',
				fontFamily: 'Verdana',
				fontWeight: 'normal',
				fontStyle: 'normal'
			},
			blockquote: {
				type: 'text',
				color: '#55ccff',
				fontSize: '1.25em',
				fontFamily: 'Verdana',
				fontWeight: 'normal',
				fontStyle: 'italic'
			},
			lead: {
				type: 'text',
				color: '#eeeeee',
				fontSize: '1.25em',
				fontFamily: 'Verdana',
				fontWeight: 'normal',
				fontStyle: 'normal'
			},
			background: {
				type: 'background',
				backgroundColor: '#444444'
			}
		};
	}
}
