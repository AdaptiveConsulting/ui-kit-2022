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
        { token: 'Common-Black', bgColor: '#000', color: '#FFF' },
        { token: 'Common-White', bgColor: '#FFF', color: '#000' },
      ],
    ],
  },
  {
    content:
      'When the user switches between light and dark themes, most of the change will show itself via a dark grey changing to a light, or a light changing to a dark.',
    colors: [
      [
        { token: 'Paper-Black', bgColor: '#323232', color: '#FFFFFF' },
        { token: 'Paper-White', bgColor: '#F9F9F9', color: '#323232' },
      ],
    ],
  },
  {
    content:
      'Often, but not always, a grey will change to a complimentary one on the opposite side of this spectrum.',
    colors: [
      [
        { token: 'Grey-50', bgColor: '#F9F9F9', color: '#323232' },
        { token: 'Grey-100', bgColor: '#F2F2F2', color: '#323232' },
        { token: 'Grey-200', bgColor: '#E4E4E4', color: '#323232' },
        { token: 'Grey-300', bgColor: '#CFCFCF', color: '#323232' },
        { token: 'Grey-400', bgColor: '#BBBBBB', color: '#323232' },
        { token: 'Grey-500', bgColor: '#7F7F7F', color: '#FFFFFF' },
        { token: 'Grey-600', bgColor: '#6B6B6B', color: '#FFFFFF' },
        { token: 'Grey-700', bgColor: '#555555', color: '#FFFFFF' },
        { token: 'Grey-800', bgColor: '#4D4D4D', color: '#FFFFFF' },
        { token: 'Grey-900', bgColor: '#383838', color: '#FFFFFF' },
      ],
    ],
  },
  {
    content:
      'These key “A” greys were pulled from the grey spectrum and used as reference to create the color families below.',
    colors: [
      [
        { token: 'Grey-A100', bgColor: '#F2F2F2', color: '#323232' },
        { token: 'Grey-A200', bgColor: '#E4E4E4', color: '#323232' },
        { token: 'Grey-A400', bgColor: '#BBBBBB', color: '#323232' },
        { token: 'Grey-A700', bgColor: '#555555', color: '#FFFFFF' },
      ],
    ],
  },
  {
    title: 'Primary',
    content: 'This color family is used for brand accents.',
    colors: [
      [
        { token: 'Primary-Dark', bgColor: '#5F618D', color: '#FFFFFF' },
        { token: 'Primary-Main', bgColor: '#A9ABD1', color: '#000000' },
        { token: 'Primary-Light', bgColor: '#DBDDFF', color: '#000000' },
      ],
    ],
  },
  {
    title: 'Secondary',
    content:
      'This color family is used to draw special attention to actions related to “selling.” It is currently duplicative of the color family used for “info”',
    colors: [
      [
        { token: 'Secondary-Dark', bgColor: '#005195', color: '#FFFFFF' },
        { token: 'Primary-Main', bgColor: '#2D96FF', color: '#000000' },
        { token: 'Primary-Light', bgColor: '#76C6FF', color: '#000000' },
      ],
    ],
  },
  {
    title: 'Error',
    content:
      'Use these colors when there are errors, especially those that will stop the user’s progress without a resolution. This family is currently duplicative of the color family used for “Sell”',
    colors: [
      [
        { token: 'Error-Dark', bgColor: '#B60017', color: '#FFFFFF' },
        { token: 'Error-Main', bgColor: '#FF274B', color: '#000000' },
        { token: 'Error-Light', bgColor: '#FF6877', color: '#000000' },
      ],
    ],
  },
  {
    title: 'Warning',
    content:
      'Use these colors when communicating that there is the possibility of an outcome that is not an error, but not ideal.',
    colors: [
      [
        { token: 'Warning-Dark', bgColor: '#EA4F01', color: '#FFFFFF' },
        { token: 'Warning-Main', bgColor: '#FF8D00', color: '#000000' },
        { token: 'Warning-Light', bgColor: '#FFBE45', color: '#000000' },
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
        { token: 'Warning-Dark', bgColor: '#01603D', color: '#FFFFFF' },
        { token: 'Warning-Main', bgColor: '#01C38D', color: '#000000' },
        { token: 'Warning-Light', bgColor: '#5DF7BD', color: '#000000' },
      ],
    ],
  },
  {
    title: 'Buy/Sell',
    content:
      'These accents can be used to help a user understand when they are performing a buy or sell action. Do not use color alone to communicate information.',
    colors: [
      [
        { token: 'Buy-Dark', bgColor: '#005195', color: '#FFFFFF' },
        { token: 'Buy-Main', bgColor: '#2D96FF', color: '#000000' },
        { token: 'Buy-Light', bgColor: '#76C6FF', color: '#000000' },
      ],
      [
        { token: 'Sell-Dark', bgColor: '#B60017', color: '#FFFFFF' },
        { token: 'Sell-Main', bgColor: '#FF274B', color: '#000000' },
        { token: 'Sell-Light', bgColor: '#FF6877', color: '#000000' },
      ],
    ],
  },
  {
    title: 'Text Colors',
    content:
      'Text color is constant in most cases, but its opacity can communicate emphasis or a disabled state. These opacity settings will be accessible for nearly every foreseeable background.',
    colors: [
      [
        { token: 'Text-Primary', bgColor: '#323232', color: '#FFFFFF', opacity: 0.95 },
        { token: 'Text-Secondary', bgColor: '#323232', color: '#FFFFFF', opacity: 0.83 },
        { token: 'Text-Disabled', bgColor: '#323232', color: '#FFFFFF', opacity: 0.38 },
      ],
      [
        { token: 'Text-Primary', bgColor: '#FFFFFF', color: '#323232', opacity: 0.95 },
        { token: 'Text-Secondary', bgColor: '#FFFFFF', color: '#323232', opacity: 0.83 },
        { token: 'Text-Disabled', bgColor: '#FFFFFF', color: '#323232', opacity: 0.38 },
      ],
    ],
  },
];
export { COLOR_CONTRAST_EXPLANATION, COLORS, PURPOSE };
