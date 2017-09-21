import * as React from 'react';
import {Site} from './Site';
import {Action} from './actions';
import {Dispatch} from '../Dispatch';

interface SiteComponentProps {
	site: Site,
	dispatch: Dispatch<Action>
};

export const SiteComponent = ({site, dispatch}: SiteComponentProps) =>
	<p
		style={site}
		onClick={(e)=>dispatch({
			type:'site / randomize',
			payload: {site}
		})}
	> Test </p>
;
