import { createStitches, ScaleValue } from '@stitches/react';

export const { styled, getCssText, globalCss } = createStitches({
	theme: {
		colors: {
			gray100: `#F2F2F2`,
			gray200: `#D9D9D9`,
			gray300: `#808080`,
			gray400: `#333333`,
			gray500: `#262626`,
			gray600: `#1A1A1A`,
			gray700: `#0D0D0D`,

			purple: `#8284FA`,
			PurpleDark: `#5E60CE`,

			blue: `#4EA8DE`,
			blueDark: `#1E6F9F`,

			danger: `#E25858`,

			background: `#1A1A1A`,
		},
		space: {
			'0': `0px`,
			'1': `1px`,
			'4': `0.25rem`,
			'8': `0.5rem`,
			'12': `0.75rem`,
			'16': `1rem`,
			'24': `1.5rem`,
			'32': `2rem`,
		},
		radii: {
			full: `99999px`,
			default: `5px`,
		},
		fonts: {
			default: `Roboto`,
		},
	},
	utils: {
		paddingX: (value: ScaleValue<'space'>) => ({
			paddingLeft: value,
			paddingRight: value,
		}),
		paddingY: (value: ScaleValue<'space'>) => ({
			paddingTop: value,
			paddingBottom: value,
		}),
		marginX: (value: ScaleValue<'space'>) => ({
			marginLeft: value,
			marginRight: value,
		}),
	},
});
