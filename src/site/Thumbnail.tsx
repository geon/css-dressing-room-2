import * as React from 'react';
import {Site} from './Site';
import {Action} from '../ui/actions';
import {Dispatch} from '../Dispatch';
import * as siteComponent from './SiteComponent';
import {connect} from 'react-redux';
import styled from 'styled-components';


interface ThumbnailProps {
	site: Site,
	dispatch: Dispatch<Action>
};

const mapDipsatchToProps = (dispatch: Dispatch<Action>) => ({
	dispatch
});

const zoom = 5;
const ThumbnailWrapper = styled.div`
	width: ${(siteComponent.width + siteComponent.padding * 2) / zoom}px;
	height: ${(siteComponent.height + siteComponent.padding * 2) / zoom}px;

	& > ${siteComponent.SiteWrapper} {
		transform: scale(${1/zoom});
		transform-origin: 0 0;
	}
`;

const render = ({site, dispatch}: ThumbnailProps) =>
	<ThumbnailWrapper
		onClick={(e)=>dispatch({
			type:'ui / set selected site',
			payload: site
		})}
	>
		<siteComponent.SiteComponent site={site}/>
	</ThumbnailWrapper>
;

export const Thumbnail = connect(null, mapDipsatchToProps)(render);
