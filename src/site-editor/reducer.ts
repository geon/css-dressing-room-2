import {Action} from './actions';
import {add, remove, sets} from '../immutate';
import {Site} from '../site/Site';
import {randomColor} from '../site/colors';


function anyOtherColor (backgroundColor: string) {

	let color;
	do {
		color = randomColor();
	} while (color == backgroundColor);

	return color;
}



var systemFontFamilies = [
	'Arial',
	'Arial Black',
	'Comic Sans MS',
	'Courier New',
	'Georgia',
	'Impact',
	'Tahoma',
	'Times New Roman',
	'Trebuchet MS',
	'Verdana'
];
function randomFont() {
	return systemFontFamilies[Math.floor(Math.random()*systemFontFamilies.length)];
}


export type State = Site;

export const reducer = (state: State, action: Action): State => {

	switch(action.type) {

		case "site editor / randomize":

			const backgroundColor = randomColor();

			return state && sets(state, {
				styles: sets(state.styles, {
					background: sets(state.styles.background, {
						backgroundColor
					}),
					h2: sets(state.styles.h2, {
						color: anyOtherColor(backgroundColor),
						fontFamily: randomFont()
					}),
					a: sets(state.styles.a, {
						color: anyOtherColor(backgroundColor)
					}),
					p: sets(state.styles.p, {
						color: anyOtherColor(backgroundColor),
						fontFamily: randomFont()
					}),
					blockquote: sets(state.styles.blockquote, {
						color: anyOtherColor(backgroundColor),
						fontFamily: randomFont()
					}),
				})
			});

		default:
            // const _exhaustiveCheck: never = action;
            return state;
    }
}
