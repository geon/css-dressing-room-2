import {Action} from './actions';
import {set, sets} from '../immutate';
import {Site} from './Site';
import {randomColor} from './colors';

export type State = Site;

export const reducer = (state: State, action: Action) =>
{
    switch(action.type)
    {
        case "site / set property color":
			return set(state, action.payload.propertyName, action.payload.value);

		case "site / set property backgroundColor":
			return set(state, action.payload.propertyName, action.payload.value);

        case "site / randomize":

            const backgroundColor = randomColor();

            // Don't use the same color on fore- and background.
            let color;
            do {
                color = randomColor();
            } while (color == backgroundColor);

			return sets(state, {
                color,
                backgroundColor
            });

		default:
            const _exhaustiveCheck: never = action;
            return state;
    }
}
