import * as React from 'react';
import {connect} from 'react-redux';
import {State} from './reducer';
import {SitesOverview} from '../sites-overview/component'
import {Site} from '../site/Site';


interface RootComponentProps {
	sites: Array<Site>
};

const mapStateToProps = ({
	sites
}: State): RootComponentProps => ({
	sites
});

const render = ({sites}: RootComponentProps) =>
<SitesOverview
	sites={sites}
/>;

export const RootComponent = connect(mapStateToProps, null)(render);
