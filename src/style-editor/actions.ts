import {TextStyle, LinkStyle, BackgroundStyle} from '../site/Style';
import {Action} from '../Action';

export type Action =
	SetLinkStyleProperty<'color'> |
	SetLinkStyleProperty<'fontWeight'> |
	SetLinkStyleProperty<'fontStyle'> |
	SetTextStyleProperty<'color'> |
	SetTextStyleProperty<'fontWeight'> |
	SetTextStyleProperty<'fontStyle'> |
	SetTextStyleProperty<'fontSize'> |
	SetTextStyleProperty<'fontFamily'> |
	SetBackgroundStyleProperty<'backgroundColor'>
;

type SetTextStyleProperty<TpropertyName extends keyof TextStyle> = Action <'style editor / set style property', {
	propertyName: TpropertyName,
	value: TextStyle[TpropertyName]
}>;

export function setTextStyleProperty<TpropertyName extends keyof TextStyle> (propertyName: TpropertyName, value: TextStyle[TpropertyName]): SetTextStyleProperty<TpropertyName> {
	return {
		type: 'style editor / set style property',
		payload: {
			propertyName,
			value
		}
	};
};

type SetLinkStyleProperty<TpropertyName extends keyof LinkStyle> = Action <'style editor / set style property', {
	propertyName: TpropertyName,
	value: LinkStyle[TpropertyName]
}>;

export function setLinkStyleProperty<TpropertyName extends keyof LinkStyle> (propertyName: TpropertyName, value: LinkStyle[TpropertyName]): SetLinkStyleProperty<TpropertyName> {
	return {
		type: 'style editor / set style property',
		payload: {
			propertyName,
			value
		}
	};
};

type SetBackgroundStyleProperty<TpropertyName extends keyof BackgroundStyle> = Action <'style editor / set style property', {
	propertyName: TpropertyName,
	value: BackgroundStyle[TpropertyName]
}>;

export function setBackgroundStyleProperty<TpropertyName extends keyof BackgroundStyle> (propertyName: TpropertyName, value: BackgroundStyle[TpropertyName]): SetBackgroundStyleProperty<TpropertyName> {
	return {
		type: 'style editor / set style property',
		payload: {
			propertyName,
			value
		}
	};
};
