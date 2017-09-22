import * as React from 'react';
import {Site} from '../site/Site';
import {Thumbnail, thumbnailWidth, thumbnailHeight} from '../sites-overview/Thumbnail'
import {connect} from 'react-redux';
import {Dispatch} from '../Dispatch';
import {Action} from './actions';
import styled from 'styled-components';
import {SiteComponent} from '../site-editor/SiteComponent';


interface SiteEditorProps {
	selectedSite?: Site
};

interface SiteEditorDispatchProps {
	dispatch: Dispatch<Action>
};

const mapDispatchToProps = (dispatch: Dispatch<any>): SiteEditorDispatchProps => ({
	dispatch
})

const removeButtonRadius = 16;
const removeStickOut = 10;

const render = ({
	selectedSite,
	dispatch
}: SiteEditorProps & SiteEditorDispatchProps) =>
<div>
	<button onClick={(e)=>selectedSite && dispatch({type: 'site editor / randomize', payload: selectedSite.uuid})}>Randomize</button>
	{selectedSite && <SiteComponent site={selectedSite}/>}
</div>;

export const SiteEditor= connect(null, mapDispatchToProps)(render);
