import { Icon } from '@ui-kit-2022/components';

const PURPOSE = {
  title: 'Purpose',
  paragraph1:
    'Icons are more than decoration. They draw attention and add clarity to areas and actions in our screen designs.',
  paragraph2: 'Use them with purpose:',
  textList: [
    'They are a supplement, not a substitute, for onscreen language. Using an icon without a label to go with it should be rare.',
    'Your choice to use an icon, and your choice of icon, should have a specific user or brand goal.',
    'Consistent icon usage can create useful patterns that the user can learn.',
  ],
};

const SIZING = {
  paragraph1: 'Use icons in approved sizes with enough space around them.',
  paragraph2:
    'They are sized to take up the central 75% of a square, transparent frame whose pixel dimensions are one of our approved sizing increments of S, M, L or XL.',
  paragraph3: 'The use of S and XL icons will be rare.',
  sizes: ['S', 'M', 'L', 'XL'],
  errorSizes: ['Too small!', 'Too big!'],
};

const COLOR = {
  subTitle: 'Color',
  paragraph1:
    'Use icon colors with enough color contrast against their backgrounds. The contrast ratio of an icon to its background must be at least 3:1.',
  paragraph2: 'Exception: interactive elements that are disabled.',
  IconExampleExplanation1:
    'Use these colors against background colors of Core-Primary-2 or darker.',
  IconExampleExplanation2:
    'Use these colors against background colors of Core-Secondary-4 or lighter.',
  labels: ['Default', 'Hover', 'Active', '(pressed)', 'Disabled'],
};

const WITH_TEXT = {
  subTitle: 'With Text',
  paragraph1:
    'Almost always use icons with accompanying text. When this is impossible, ensure an aria-label that can identify the icon on hover, and which is detectable by screen reader users.',
  paragraph2: 'Create a harmonious relationship between the icon and its label with...',
  textList: [
    'Center vertical alignment between text and icon',
    'Consistent pairing of label and icon across the experience',
    'A match-or near-match in height between the text and the icon',
    'Text and icon the same color. (This will usually mean that you will seek even higher contrast ratios to accomodate the text. That ratio should be 4.5:1)',
  ],

  exampleExplanation: {
    column1:
      'Icons and labels are equal or similar in height, consistently applied, with the same color, and center alignment.',
    column3:
      'Use an icon to add special interest to identify an frequent or primary action, or a key piece of information.',
    column4:
      'Label every item in a list or menu with unique icons. If every item is special, then no item is special.',
  },

  column1: [
    {
      label: 'Settings',
      iconStyle: { width: '9px', height: '9px' },
      fontVariant: 'body2',
    },
    {
      label: 'Settings',
      iconStyle: { width: '12px', height: '12px' },
      fontVariant: 'body1',
    },
    {
      label: 'Settings',
      iconStyle: { width: '18px', height: '18px' },
      fontVariant: 'h1',
    },
  ],
  column2: [
    {
      label: 'Settings',
      iconStyle: { width: '9px', height: '9px' },
      fontVariant: 'h1',
      explanation: 'Type noticeably larger than icon.',
    },
    {
      label: 'Settings',
      iconStyle: { width: '18px', height: '18px' },
      fontVariant: 'body2',
      explanation: 'Type noticeably smaller than icon.',
    },
    {
      label: 'Settings',
      iconStyle: { width: '9px', height: '9px', alignSelf: 'start' },
      fontVariant: 'h2',
      explanation: 'Type has top alignment with icon. Use center alignment.',
    },
    {
      label: 'Settings',
      iconStyle: { width: '9px', height: '9px' },
      fontVariant: 'body2',
      explanation: 'Type is a different color than icon.',
    },
    {
      label: 'Configure',
      iconStyle: { width: '9px', height: '9px' },
      fontVariant: 'body2',
      explanation: 'Icon has a different label than it does elsewhere in the experience.',
    },
  ],
  column3: {
    icons: [
      {
        label: 'Edit',
      },
      {
        label: 'Setting',
      },
      {
        label: 'Close',
      },
      {
        label: 'And new',
        icon: Icon.Plus,
      },
    ],
    explanation:
      'Use an icon to add special interest to identify an frequent or primary action, or a key piece of information.',
  },
  column4: {
    icons: [
      {
        label: 'Edit',
        icon: Icon.Edit,
      },
      {
        label: 'Setting',
        icon: Icon.Settings,
      },
      {
        label: 'Close',
        icon: Icon.Close,
      },
      {
        label: 'And new',
        icon: Icon.Plus,
      },
    ],
    explanation:
      'Label every item in a list or menu with unique icons. If every item is special, then no item is special.',
  },
};

const ICON_LIBRARY = {
  textTitle: 'Icon library',
  text: 'These are the vectors on which the icon component is based.',
  icons: {
    columnOne: [
      { label: 'refresh', icon: Icon.Refresh },
      { label: 'edit', icon: Icon.Edit },
      { label: 'trash', icon: Icon.Trash },
      { label: 'notification', icon: Icon.Notification },
      { label: 'thumb-down', icon: Icon.ThumbDown },
      { label: 'stop', icon: Icon.Stop },
      { label: 'check', icon: Icon.Check },
      { label: 'ban', icon: Icon.Ban },
      { label: 'timer', icon: Icon.Timer },
      { label: 'close', icon: Icon.Close },
    ],
    columnTwo: [
      { label: 'calendar', icon: Icon.Calendar },
      { label: 'groups', icon: Icon.Groups },
      { label: 'more', icon: Icon.Dots },
      { label: 'eye', icon: Icon.View },
      { label: 'search', icon: Icon.Search },
      { label: 'filter', icon: Icon.Filter },
      { label: 'settings', icon: Icon.Settings },
      { label: 'cog', icon: Icon.Cog },
      { label: 'plus', icon: Icon.Plus },
      { label: 'lock', icon: Icon.Lock },
    ],
    columnThree: [
      { label: 'download', icon: Icon.Download },
      { label: 'upload', icon: Icon.Upload },
      { label: 'alarm-bell', icon: Icon.AlarmBell },
      { label: 'info', icon: Icon.Info },
    ],
    columnFour: [
      {
        label: 'arrow',
        icons: [Icon.ArrowUp, Icon.ArrowDown, Icon.ArrowLeft, Icon.ArrowRight],
      },
      {
        label: 'chevron',
        icons: [Icon.ChevronUp, Icon.ChevronDown, Icon.ChevronLeft, Icon.ChevronRight],
      },
      {
        label: 'chart (line, candle, bar, more to come)',
        icons: [Icon.Line, Icon.Candle, Icon.Bar],
      },
    ],
  },
};

export { COLOR, ICON_LIBRARY, PURPOSE, SIZING, WITH_TEXT };
