import * as React from 'react';
import {connect} from 'react-redux';
import {State} from './reducer';
import {SitesOverview} from '../sites-overview/component'
import {Site} from '../site/Site';
import {SiteEditor} from '../site-editor/component';

interface RootComponentProps {
	sites: Array<Site>,
	selectedSite?: Site
};

const mapStateToProps = ({
	sites,
	ui
}: State): RootComponentProps => ({
	sites,
	selectedSite: sites.find(x => x.uuid == ui.selectedSiteUuid)
});

const render = ({
	sites,
	selectedSite
}: RootComponentProps) =>
	<div>
		<SitesOverview sites={sites} />
		<SiteEditor selectedSite={selectedSite} />
	</div>
;

export const RootComponent = connect(mapStateToProps, null)(render);
