import {Action} from './actions';
import {add, remove, sets} from '../immutate';
import {Style} from '../site/Style';


export type State = Style;
export type HandledActions = Action;

export const reducer = (state: State, action: Action): State => {

	switch(action.type) {

		case 'style editor / set style property':
			return state && sets(state, {[action.payload.propertyName]: action.payload.value});

		default:
            // const _exhaustiveCheck: never = action;
            return state;
    }
}
