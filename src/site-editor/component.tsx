import * as React from 'react';
import {Site} from '../site/Site';
import {Thumbnail, thumbnailWidth, thumbnailHeight} from '../sites-overview/Thumbnail'
import {connect} from 'react-redux';
import {Dispatch} from '../Dispatch';
import {Action, randomize} from './actions';
import styled from 'styled-components';
import {SiteComponent} from '../site-editor/SiteComponent';
import {Action as UiAction, setSelectedStyleName} from '../ui/actions';
import {StyleEditor} from '../style-editor/component';
import {Style} from '../site/Style';


interface SiteEditorProps {
	selectedSite?: Site,
	selectedStyle?: Style
};

interface SiteEditorDispatchProps {
	dispatch: Dispatch<Action | UiAction>
};

const mapDispatchToProps = (dispatch: Dispatch<any>): SiteEditorDispatchProps => ({
	dispatch
})

const removeButtonRadius = 16;
const removeStickOut = 10;

const render = ({
	selectedSite,
	selectedStyle,
	dispatch
}: SiteEditorProps & SiteEditorDispatchProps) =>
<div>
	<StyleEditor style={selectedStyle}/>
	<button onClick={(e)=>selectedSite && dispatch(randomize(selectedSite.uuid))}>Randomize</button>
	{selectedSite && <SiteComponent site={selectedSite} editable/>}
</div>;

export const SiteEditor= connect(null, mapDispatchToProps)(render);
