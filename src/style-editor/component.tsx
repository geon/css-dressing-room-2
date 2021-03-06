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
				<select value={style.color} onChange={(e) => dispatch(setTextStyleProperty('color', e.currentTarget.value))}>
					{colors.map(color => <option key={color} value={color}>{color}</option>)}
				</select>
				<select value={style.fontWeight} onChange={(e) => dispatch(setTextStyleProperty('fontWeight', e.currentTarget.value as FontWeight))}>
					{fontWeights.map(fontWeight => <option key={fontWeight} value={fontWeight}>{fontWeight}</option>)}
				</select>
				<select value={style.fontStyle} onChange={(e) => dispatch(setTextStyleProperty('fontStyle', e.currentTarget.value as FontStyle))}>
					{fontStyles.map(fontStyles => <option key={fontStyles} value={fontStyles}>{fontStyles}</option>)}
				</select>
				<select value={style.fontSize} onChange={(e) => dispatch(setTextStyleProperty('fontSize', e.currentTarget.value as FontSize))}>
					{fontSizes.map(fontSize => <option key={fontSize} value={fontSize}>{fontSize}</option>)}
				</select>
				<select value={style.fontFamily} onChange={(e) => dispatch(setTextStyleProperty('fontFamily', e.currentTarget.value as FontFamily))}>
					{fontFamilies.map(fontFamily => <option key={fontFamily} value={fontFamily}>{fontFamily}</option>)}
				</select>

				{JSON.stringify(style)}
			</div>

		case 'background':
			return <div>
				<select value={style.backgroundColor} onChange={(e) => dispatch(setBackgroundStyleProperty('backgroundColor', e.currentTarget.value))}>
					{colors.map(color => <option key={color} value={color}>{color}</option>)}
				</select>
				{JSON.stringify(style)}
			</div>
	}
};


export const StyleEditor= connect(null, mapDispatchToProps)(render);
