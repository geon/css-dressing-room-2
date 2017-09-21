import * as React from 'react';
import {Site} from './Site';
import {Action} from './actions';
import {Dispatch} from '../Dispatch';
import {connect} from 'react-redux';
import styled from 'styled-components';

export interface SiteComponentProps {
	site: Site,
	dispatch: Dispatch<Action>
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	dispatch
});

export const width = 600;
export const height = 700;
export const padding = 30;

export const SiteWrapper = styled.div`
	width: ${width}px;
	height: ${height}px;
	padding: ${padding}px;
	overflow: hidden;
`;

const render = ({site, dispatch}: SiteComponentProps) =>
	<SiteWrapper style={site}>
		<h2>Lorem ipsum</h2>
		<p className="byline vcard">By <a className="author fn">Victor Widell</a><span className="publish-date"> on <time>August 6, 2012 11:45 am</time></span> </p>
		<p className="lead">Dolor sit amet, consectetur adipiscing elit. Sed enim turpis, placerat vel faucibus eget, accumsan semper nisl. Curabitur suscipit laoreet enim nec luctus. Sed quis ornare massa. Sed posuere turpis nec mi porta at dictum libero condimentum. Nulla nulla sapien, convallis sed egestas vel, aliquet a nibh.</p>
		<p>Curabitur ornare hendrerit lacinia. Sed et tincidunt elit. Pellentesque mi lacus, pellentesque eu porttitor vel, tempus consequat odio. Donec pharetra blandit condimentum. In nec dolor est, quis elementum purus. Mauris vel libero arcu, ac bibendum est.</p>
		<blockquote>Donec quis tortor eros, a ultrices tellus. Nulla vehicula semper ipsum sed semper. Vestibulum sed condimentum odio. Suspendisse non eros ac odio consectetur malesuada. Nulla facilisi.</blockquote>
		<p>Vivamus venenatis interdum lacus, sed imperdiet lectus congue nec. Praesent et dolor sit amet eros tempus consectetur sed a elit. Integer dictum, odio eget imperdiet porta, quam libero ornare erat, a varius mi quam eget libero. Vestibulum eget laoreet urna. Integer auctor eros et augue gravida tristique. Pellentesque eget eleifend enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed luctus tristique lorem, ut commodo nulla lacinia eget.</p>
	</SiteWrapper>
;

export const SiteComponent = connect(null, mapDispatchToProps)(render);
