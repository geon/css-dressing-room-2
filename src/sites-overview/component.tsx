import * as React from 'react';
import {Site} from '../site/Site';
import {SiteComponent} from '../site/SiteComponent'
import {connect} from 'react-redux';
import {Dispatch} from '../Dispatch';
import {Action} from '../sites/actions';

interface SitesOverviewProps {
	sites: Array<Site>
};

interface SitesOverviewDispatchProps {
	dispatch: Dispatch<Action>
};

const mapDispatchToProps = (dispatch: Dispatch<any>): SitesOverviewDispatchProps => ({
	dispatch
})

const render = ({
	sites,
	dispatch
}: SitesOverviewProps & SitesOverviewDispatchProps) =>
<ul>
	{sites.map((site, i) =>
		<li key={site.uuid}>
			<SiteComponent site={site}/>
			<button onClick={(e)=>dispatch({type: 'sites / remove', payload: site})}>X</button>
		</li>
	)}
	<li className="add">
		<button onClick={(e)=>dispatch({type: 'sites / add'})}>+</button>
	</li>
</ul>;

export const SitesOverview = connect(null, mapDispatchToProps)(render);
