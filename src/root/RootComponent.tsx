import * as React from 'react';
import {connect} from 'react-redux';
import {State} from './reducer';
import {SitesOverview} from '../sites-overview/component'
import {Site} from '../site/Site';
import {SiteComponent} from '../site/SiteComponent';


interface RootComponentProps {
	sites: Array<Site>,
	selectedSite: Site
};

const mapStateToProps = ({
	sites,
	ui
}: State): RootComponentProps => ({
	sites,
	selectedSite: sites[ui.selectedSiteIndex]
});

const render = ({
	sites,
	selectedSite
}: RootComponentProps) =>
	<div>
		<SitesOverview sites={sites} />
		<SiteComponent site={selectedSite}/>
	</div>
;

export const RootComponent = connect(mapStateToProps, null)(render);
