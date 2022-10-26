import { dark } from '@ui-kit-2022/theme';
const { palette } = dark;

const PURPOSE = {
  title: 'Purpose',
  content: [
    'Colors communicate branding. When applied consistently , they can communicate information about system states, and draw attention to certain parts of the screen, like an error that needs attention.',
    'Though color does much to make a design more efficient and effective, we must still pursue designs that are effective even to those with little or no color perception. Therefore, colors should be used in an accessible manner, and no information should be communicated by color alone.',
  ],
};

const COLOR_CONTRAST_EXPLANATION = [
  'All colors have been analyzed against each other in this matrix, and each combination given a score. Every color in our palette has AA',
  'AA or AAA: The two colors can be used as foreground and background against each other with no restrictions. AA18: Can be used for graphical elements, icons, or for text, as long as the text size is at least 18 pt. (Or 14 if bold) DNP: Do not use this combination for anything functional or essential. An exception might be a decorative object like a divider, or for a use in which the information is communicated in an additional way..',
  'Some examples of color combinations that are inaccessible.',
];

const COLORS = [
  {
    title: 'Core Neutrals',
    content: 'The “paper” colors are our near-black and near-black base backgrounds.',
    colors: [
      [
        {
          token: 'Common-Black',
          bgColor: palette.common.black,
          color: palette.common.white,
        },
        {
          token: 'Common-White',
          bgColor: palette.common.white,
          color: palette.common.black,
        },
      ],
    ],
  },
  {
    content:
      'When the user switches between light and dark themes, most of the change will show itself via a dark grey changing to a light, or a light changing to a dark.',
    colors: [
      [
        {
          token: 'Paper-Black',
          bgColor: palette.background.paper,
          color: palette.common.white,
        },
        {
          token: 'Paper-White',
          bgColor: palette.grey['50'],
          color: palette.background.paper,
        },
      ],
    ],
  },
  {
    content:
      'Often, but not always, a grey will change to a complimentary one on the opposite side of this spectrum.',
    colors: [
      [
        {
          token: 'Grey-50',
          bgColor: palette.grey['50'],
          color: palette.background.paper,
        },
        {
          token: 'Grey-100',
          bgColor: palette.grey['100'],
          color: palette.background.paper,
        },
        {
          token: 'Grey-200',
          bgColor: palette.grey['200'],
          color: palette.background.paper,
        },
        {
          token: 'Grey-300',
          bgColor: palette.grey['300'],
          color: palette.background.paper,
        },
        {
          token: 'Grey-400',
          bgColor: palette.grey['400'],
          color: palette.background.paper,
        },
        { token: 'Grey-500', bgColor: palette.grey['500'], color: palette.common.white },
        { token: 'Grey-600', bgColor: palette.grey['600'], color: palette.common.white },
        { token: 'Grey-700', bgColor: palette.grey['700'], color: palette.common.white },
        { token: 'Grey-800', bgColor: palette.grey['800'], color: palette.common.white },
        { token: 'Grey-900', bgColor: palette.grey['900'], color: palette.common.white },
      ],
    ],
  },
  {
    content:
      'These key “A” greys were pulled from the grey spectrum and used as reference to create the color families below.',
    colors: [
      [
        {
          token: 'Grey-A100',
          bgColor: palette.grey['100'],
          color: palette.background.paper,
        },
        {
          token: 'Grey-A200',
          bgColor: palette.grey['200'],
          color: palette.background.paper,
        },
        {
          token: 'Grey-A400',
          bgColor: palette.grey['400'],
          color: palette.background.paper,
        },
        { token: 'Grey-A700', bgColor: palette.grey['700'], color: palette.common.white },
      ],
    ],
  },
  {
    title: 'Primary',
    content: 'This color family is used for brand accents.',
    colors: [
      [
        {
          token: 'Primary-Dark',
          bgColor: palette.primary.dark,
          color: palette.common.white,
        },
        {
          token: 'Primary-Main',
          bgColor: palette.primary.main,
          color: palette.common.black,
        },
        {
          token: 'Primary-Light',
          bgColor: palette.primary.light,
          color: palette.common.black,
        },
      ],
    ],
  },
  {
    title: 'Secondary',
    content:
      'This color family is used to draw special attention to actions related to “selling.” It is currently duplicative of the color family used for “info”',
    colors: [
      [
        {
          token: 'Secondary-Dark',
          bgColor: palette.secondary.dark,
          color: palette.common.white,
        },
        {
          token: 'Primary-Main',
          bgColor: palette.secondary.main,
          color: palette.common.black,
        },
        {
          token: 'Primary-Light',
          bgColor: palette.secondary.light,
          color: palette.common.black,
        },
      ],
    ],
  },
  {
    title: 'Error',
    content:
      'Use these colors when there are errors, especially those that will stop the user’s progress without a resolution. This family is currently duplicative of the color family used for “Sell”',
    colors: [
      [
        { token: 'Error-Dark', bgColor: palette.error.dark, color: palette.common.white },
        { token: 'Error-Main', bgColor: palette.error.main, color: palette.common.black },
        {
          token: 'Error-Light',
          bgColor: palette.error.light,
          color: palette.common.black,
        },
      ],
    ],
  },
  {
    title: 'Warning',
    content:
      'Use these colors when communicating that there is the possibility of an outcome that is not an error, but not ideal.',
    colors: [
      [
        {
          token: 'Warning-Dark',
          bgColor: palette.warning.dark,
          color: palette.common.white,
        },
        {
          token: 'Warning-Main',
          bgColor: palette.warning.main,
          color: palette.common.black,
        },
        {
          token: 'Warning-Light',
          bgColor: palette.warning.light,
          color: palette.common.black,
        },
      ],
    ],
  },
  {
    colors: [],
    content:
      'Yellows and oranges are especially tricky for accessible contrast. Use care when using reduced opacity text styles against these backgrounds.',
  },
  {
    title: 'Success',
    content: 'Use these colors when confirming that a process or action has succeeded.',
    colors: [
      [
        {
          token: 'Success-Dark',
          bgColor: palette.success.dark,
          color: palette.common.white,
        },
        {
          token: 'Success-Main',
          bgColor: palette.success.main,
          color: palette.common.black,
        },
        {
          token: 'Success-Light',
          bgColor: palette.success.light,
          color: palette.common.black,
        },
      ],
    ],
  },
  {
    title: 'Buy/Sell',
    content:
      'These accents can be used to help a user understand when they are performing a buy or sell action. Do not use color alone to communicate information.',
    colors: [
      [
        { token: 'Buy-Dark', bgColor: palette.buy.dark, color: palette.common.white },
        { token: 'Buy-Main', bgColor: palette.buy.dark, color: palette.common.black },
        { token: 'Buy-Light', bgColor: palette.buy.light, color: palette.common.black },
      ],
      [
        { token: 'Sell-Dark', bgColor: palette.sell.dark, color: palette.common.white },
        { token: 'Sell-Main', bgColor: palette.sell.main, color: palette.common.black },
        { token: 'Sell-Light', bgColor: palette.sell.light, color: palette.common.black },
      ],
    ],
  },
  {
    title: 'Text Colors',
    content:
      'Text color is constant in most cases, but its opacity can communicate emphasis or a disabled state. These opacity settings will be accessible for nearly every foreseeable background.',
    colors: [
      [
        {
          token: 'Text-Primary',
          bgColor: palette.background.paper,
          color: palette.common.white,
          opacity: 0.95,
        },
        {
          token: 'Text-Secondary',
          bgColor: palette.background.paper,
          color: palette.common.white,
          opacity: 0.83,
        },
        {
          token: 'Text-Disabled',
          bgColor: palette.background.paper,
          color: palette.common.white,
          opacity: 0.38,
        },
      ],
      [
        {
          token: 'Text-Primary',
          bgColor: palette.common.white,
          color: palette.background.paper,
          opacity: 0.95,
        },
        {
          token: 'Text-Secondary',
          bgColor: palette.common.white,
          color: palette.background.paper,
          opacity: 0.83,
        },
        {
          token: 'Text-Disabled',
          bgColor: palette.common.white,
          color: palette.background.paper,
          opacity: 0.38,
        },
      ],
    ],
  },
];
export { COLOR_CONTRAST_EXPLANATION, COLORS, PURPOSE };
