import css from 'next/css';

export const standardSpacing = '1em';

export const standardPadding = css({
  padding: standardSpacing
});

export const standardPaddingHorizontal = css({
  padding: '0 ' + standardSpacing
});

export const blockContainer = css({
  display: 'flex',
  padding: standardSpacing
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

export const w100 = css({
	width: '100%'
});