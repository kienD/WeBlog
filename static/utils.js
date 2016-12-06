import css from 'next/css';

export const alignCenter = css({
	alignItems: 'center'
});

export const blockContainer = css({
  display: 'flex',
  padding: standardSpacing
});

export const justifyCenter = css({
	justifyContent: 'center'
});



export const largeSpacing = '2em';

export const largePadding = css({
  padding: largeSpacing
});

export const noPadding = css({
	padding: 0
});

export const noMargin = css({
	margin: 0
});

export const smallFont = css({
	fontSize: '0.8em'
});

export const standardSpacing = '1em';

export const standardPadding = css({
  padding: standardSpacing
});

export const standardPaddingHorizontal = css({
  padding: '0 ' + standardSpacing
});

export const textCenter = css({
  textAlign: 'center'
});

export const w100 = css({
	width: '100%'
});