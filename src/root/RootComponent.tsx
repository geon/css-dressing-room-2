import * as React from 'react';
import {connect} from 'react-redux';
import {State} from './reducer';
import {SitesOverview} from '../sites-overview/component'

const render = ({sites}: State) => <SitesOverview sites={sites}/>;

export const RootComponent = connect((state: State) => state, null)(render);
