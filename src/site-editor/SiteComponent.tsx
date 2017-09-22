import * as React from 'react';
import {Site} from '../site/Site';
import {Styles} from '../site/Style';
import {Action} from '../ui/actions';
import {Dispatch} from '../Dispatch';
import {connect} from 'react-redux';
import styled from 'styled-components';

export interface SiteComponentProps {
	site: Site
};

export interface SiteComponentDispatchProps {
	dispatchEdit?: (styleName: string) => ((e: React.MouseEvent<HTMLElement>) => void)
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) : SiteComponentDispatchProps=> ({
	dispatchEdit: (styleName) => (e => dispatch({type: 'ui / set selected style name', payload: styleName}))
});

export const width = 600;
export const height = 700;
export const padding = 30;

export const SiteWrapper = styled.div`
	width: ${width}px;
	height: ${height}px;
	padding: ${padding}px;
	overflow: hidden;

	background-color: ${({styles}: {styles: Styles}) => styles.background.backgroundColor};

	> h2 {
		color: ${({styles}: {styles: Styles}) => styles.h2.color};
		font-weight: ${({styles}: {styles: Styles}) => styles.h2.fontWeight};
		font-style: ${({styles}: {styles: Styles}) => styles.h2.fontStyle};
		font-size: ${({styles}: {styles: Styles}) => styles.h2.fontSize};
		font-family: ${({styles}: {styles: Styles}) => styles.h2.fontFamily};
	}

	a {
		color: ${({styles}: {styles: Styles}) => styles.a.color};
		font-weight: ${({styles}: {styles: Styles}) => styles.a.fontWeight};
		font-style: ${({styles}: {styles: Styles}) => styles.a.fontStyle};
	}

	> lead {
		color: ${({styles}: {styles: Styles}) => styles.lead.color};
		font-weight: ${({styles}: {styles: Styles}) => styles.lead.fontWeight};
		font-style: ${({styles}: {styles: Styles}) => styles.lead.fontStyle};
		font-size: ${({styles}: {styles: Styles}) => styles.lead.fontSize};
		font-family: ${({styles}: {styles: Styles}) => styles.lead.fontFamily};
	}

	> p {
		color: ${({styles}: {styles: Styles}) => styles.p.color};
		font-weight: ${({styles}: {styles: Styles}) => styles.p.fontWeight};
		font-style: ${({styles}: {styles: Styles}) => styles.p.fontStyle};
		font-size: ${({styles}: {styles: Styles}) => styles.p.fontSize};
		font-family: ${({styles}: {styles: Styles}) => styles.p.fontFamily};
	}

	> blockquote {
		color: ${({styles}: {styles: Styles}) => styles.blockquote.color};
		font-weight: ${({styles}: {styles: Styles}) => styles.blockquote.fontWeight};
		font-style: ${({styles}: {styles: Styles}) => styles.blockquote.fontStyle};
		font-size: ${({styles}: {styles: Styles}) => styles.blockquote.fontSize};
		font-family: ${({styles}: {styles: Styles}) => styles.blockquote.fontFamily};
	}
`;

const render = ({site, dispatchEdit}: SiteComponentProps & SiteComponentDispatchProps) => {

	return <SiteWrapper styles={site.styles}>
		<h2 onClick={dispatchEdit && dispatchEdit('h2')}>Lorem ipsum</h2>
		<p className="byline vcard">
			By <a className="author fn" onClick={dispatchEdit && dispatchEdit('a')}>Victor Widell</a>
			<span className="publish-date"> on <time>August 6, 2012 11:45 am</time></span>
		</p>
		<p className="lead" onClick={dispatchEdit && dispatchEdit('lead')}>Dolor sit amet, consectetur adipiscing elit. Sed enim turpis, placerat vel faucibus eget, accumsan semper nisl. Curabitur suscipit laoreet enim nec luctus. Sed quis ornare massa. Sed posuere turpis nec mi porta at dictum libero condimentum. Nulla nulla sapien, convallis sed egestas vel, aliquet a nibh.</p>
		<p onClick={dispatchEdit && dispatchEdit('p')}>Curabitur ornare hendrerit lacinia. Sed et tincidunt elit. Pellentesque mi lacus, pellentesque eu porttitor vel, tempus consequat odio. Donec pharetra blandit condimentum. In nec dolor est, quis elementum purus. Mauris vel libero arcu, ac bibendum est.</p>
		<blockquote onClick={dispatchEdit && dispatchEdit('blockquote')}>Donec quis tortor eros, a ultrices tellus. Nulla vehicula semper ipsum sed semper. Vestibulum sed condimentum odio. Suspendisse non eros ac odio consectetur malesuada. Nulla facilisi.</blockquote>
		<p onClick={dispatchEdit && dispatchEdit('p')}>Vivamus venenatis interdum lacus, sed imperdiet lectus congue nec. Praesent et dolor sit amet eros tempus consectetur sed a elit. Integer dictum, odio eget imperdiet porta, quam libero ornare erat, a varius mi quam eget libero. Vestibulum eget laoreet urna. Integer auctor eros et augue gravida tristique. Pellentesque eget eleifend enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed luctus tristique lorem, ut commodo nulla lacinia eget.</p>
	</SiteWrapper>;
}

// export const SiteComponent = connect(null, mapDispatchToProps)(render);
export const SiteComponent = render;
