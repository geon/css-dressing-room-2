import {Action} from './actions';
import {set, add, remove, replace} from '../immutate';
import * as site from '../site/reducer';
import {Site} from '../site/Site';

export type State = Array<site.State>;

export const initialState: State = [
	new Site()
];

export const reducer = (state: State, action: Action) =>
{
    switch(action.type)
    {
        case "sites / add":
			return add(state, new Site());

		case "sites / remove":
			return remove(state, action.payload);

		default:
            const _exhaustiveCheck: never = action;
            return state;
    }
}
