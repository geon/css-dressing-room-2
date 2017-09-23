import * as React from 'react';
import {Style} from '../site/Style';
import {Thumbnail, thumbnailWidth, thumbnailHeight} from '../sites-overview/Thumbnail'
import {connect} from 'react-redux';
import {Dispatch} from '../Dispatch';
// import {Action, randomize} from './actions';
import styled from 'styled-components';
import {Action as UiAction, setSelectedStyleName} from '../ui/actions';


interface SiteEditorProps {
	style?: Style
};

interface SiteEditorDispatchProps {
	dispatch: Dispatch<UiAction>
};

const mapDispatchToProps = (dispatch: Dispatch<any>): SiteEditorDispatchProps => ({
	dispatch
})

const removeButtonRadius = 16;
const removeStickOut = 10;

const render = ({
	style,
	dispatch
}: SiteEditorProps & SiteEditorDispatchProps) => {

	if (!style) {
		return <div></div>;
	}

	switch (style.type) {

		case 'link':
			return <div>
				LinkStyle
				{JSON.stringify(style)}
			</div>

		case 'text':
			return <div>
				TextStyle
				{JSON.stringify(style)}
			</div>

		case 'background':
			return <div>
				BackgroundStyle
				{JSON.stringify(style)}
			</div>
	}
};


export const StyleEditor= connect(null, mapDispatchToProps)(render);
