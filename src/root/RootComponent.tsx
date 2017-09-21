import * as React from 'react';
import {connect} from 'react-redux';
import {State} from './reducer';
import {SitesOverview} from '../sites-overview/component'
import {Site} from '../site/Site';


interface RootComponentProps {
	sites: Array<Site>,
	selectedSiteIndex: number
};

const mapStateToProps = ({
	sites,
	ui
}: State): RootComponentProps => ({
	sites,
	selectedSiteIndex: ui.selectedSiteIndex
});

const render = ({sites, selectedSiteIndex}: RootComponentProps) =>
<SitesOverview
	sites={sites}
	selectedSiteIndex={selectedSiteIndex}
/>;

export const RootComponent = connect(mapStateToProps, null)(render);
