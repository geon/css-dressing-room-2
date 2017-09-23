import * as React from 'react';
import {Style} from '../site/Style';
import {Thumbnail, thumbnailWidth, thumbnailHeight} from '../sites-overview/Thumbnail'
import {connect} from 'react-redux';
import {Dispatch} from '../Dispatch';
// import {Action, randomize} from './actions';
import styled from 'styled-components';
import {Action as UiAction, setSelectedStyleName} from '../ui/actions';
import {colors} from '../site/colors';
import {setLinkStyleProperty, setTextStyleProperty, setBackgroundStyleProperty, Action} from './actions';
import {fontWeights, FontWeight, fontStyles, FontStyle, fontSizes, FontSize, fontFamilies, FontFamily} from '../site/Style';

interface SiteEditorProps {
	style?: Style
};

interface SiteEditorDispatchProps {
	dispatch: Dispatch<UiAction | Action>
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
				<select value={style.color} onChange={(e) => dispatch(setLinkStyleProperty('color', e.currentTarget.value))}>
					{colors.map(color => <option key={color} value={color}>{color}</option>)}
				</select>
				<select value={style.fontWeight} onChange={(e) => dispatch(setLinkStyleProperty('fontWeight', e.currentTarget.value as FontWeight))}>
					{fontWeights.map(fontWeight => <option key={fontWeight} value={fontWeight}>{fontWeight}</option>)}
				</select>
				<select value={style.fontStyle} onChange={(e) => dispatch(setLinkStyleProperty('fontStyle', e.currentTarget.value as FontStyle))}>
					{fontStyles.map(fontStyles => <option key={fontStyles} value={fontStyles}>{fontStyles}</option>)}
				</select>
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
