const colorsConstant = [
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
];
export { colorsConstant };
