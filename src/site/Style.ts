
export type FontFamily = 'Arial' | 'Arial Black' | 'Comic Sans MS' | 'Courier New' | 'Georgia' | 'Impact' | 'Tahoma' | 'Times New Roman' | 'Trebuchet MS' | 'Verdana';
export const fontFamilies = [
	'Arial',
	'Arial Black',
	'Comic Sans MS',
	'Courier New',
	'Georgia',
	'Impact',
	'Tahoma',
	'Times New Roman',
	'Trebuchet MS',
	'Verdana'
];

export type FontSize = '1em' | '1.125em' | '1.25em' | '1.5em' | '1.75em' | '2em' | '2.25em' | '2.5em' | '3em';
export const fontSizes = [
	'1em',
	'1.125em',
	'1.25em',
	'1.5em',
	'1.75em',
	'2em',
	'2.25em',
	'2.5em',
	'3em',
];


export type FontWeight = 'normal' | 'bold';
export const fontWeights: Array<FontWeight> = ['normal', 'bold'];

export type FontStyle = 'normal' | 'italic';
export const fontStyles: Array<FontStyle> = ['normal', 'italic'];

export interface LinkStyle  {
	type: 'link',
	color: string,
	fontWeight: FontWeight,
	fontStyle: FontStyle
};

export interface TextStyle {
	type: 'text',
	color: string,
	fontWeight: FontWeight,
	fontStyle: FontStyle,
	fontSize: string,
	fontFamily: string,
};

export interface BackgroundStyle  {
	type: 'background',
	backgroundColor: string
};

export type Style = LinkStyle | TextStyle | BackgroundStyle;

export interface Styles {
	h2: TextStyle,
	a: LinkStyle,
	p: TextStyle,
	blockquote: TextStyle,
	lead: TextStyle,
	background: BackgroundStyle
};

export type StyleName = keyof Styles;
