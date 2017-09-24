import {Action} from './actions';
import {add, remove, sets, set} from '../immutate';
import {Site} from '../site/Site';
import {randomColor} from '../site/colors';
import * as styleEditor from '../style-editor/reducer';
import {StyleName, fontFamilies, fontWeights, fontStyles} from '../site/Style';


function anyOtherColor (backgroundColor: string) {

	let color;
	do {
		color = randomColor();
	} while (color == backgroundColor);

	return color;
}

function randomFontFamily() {
	return fontFamilies[Math.floor(Math.random()*fontFamilies.length)];
}

function randomFontWeight() {
	return fontWeights[Math.floor(Math.random()*fontWeights.length)];
}

function randomFontStyle() {
	return fontStyles[Math.floor(Math.random()*fontStyles.length)];
}

export type State = Site;
export type HandledActions = Action | styleEditor.HandledActions;
export const reducer = (state: State, action: HandledActions, selectedStyleName: StyleName): State => {

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
						fontFamily: randomFontFamily(),
						fontWeight: randomFontWeight(),
						fontStyle: randomFontStyle(),
					}),
					a: sets(state.styles.a, {
						color: anyOtherColor(backgroundColor),
						fontWeight: randomFontWeight(),
						fontStyle: randomFontStyle(),
					}),
					p: sets(state.styles.p, {
						color: anyOtherColor(backgroundColor),
						fontFamily: randomFontFamily(),
						fontWeight: randomFontWeight(),
						fontStyle: randomFontStyle(),
					}),
					lead: sets(state.styles.lead, {
						color: anyOtherColor(backgroundColor),
						fontFamily: randomFontFamily(),
						fontWeight: randomFontWeight(),
						fontStyle: randomFontStyle(),
					}),
					blockquote: sets(state.styles.blockquote, {
						color: anyOtherColor(backgroundColor),
						fontFamily: randomFontFamily(),
						fontWeight: randomFontWeight(),
						fontStyle: randomFontStyle(),
					}),
				})
			});

		case 'style editor / set style property':

			return sets(state, {styles: set(
				state.styles,
				selectedStyleName,
				styleEditor.reducer(state.styles[selectedStyleName], action)
			)});

		default:
            const _exhaustiveCheck: never = action;
            return state;
    }
}
