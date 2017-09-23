import * as React from 'react';
import {connect} from 'react-redux';
import {State} from './reducer';
import {SitesOverview} from '../sites-overview/component'
import {Site} from '../site/Site';
import {Style} from '../site/Style';
import {SiteEditor} from '../site-editor/component';

interface RootComponentProps {
	sites: Array<Site>,
	selectedSite?: Site,
	selectedStyle?: Style
};

const mapStateToProps = ({
	sites,
	ui
}: State): RootComponentProps => {
	const selectedSite = sites.find(x => x.uuid == ui.selectedSiteUuid);
	return {
		sites,
		selectedSite,
		selectedStyle: selectedSite && selectedSite.styles[ui.selectedStyleName]
	}
};

const render = ({
	sites,
	selectedSite,
	selectedStyle
}: RootComponentProps) =>
	<div>
		<SitesOverview sites={sites} />
		<SiteEditor selectedSite={selectedSite} selectedStyle={selectedStyle} />
	</div>
;

export const RootComponent = connect(mapStateToProps, null)(render);
