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
    'They are sized to take up the central 75% of a square, transparent frame whose pixel dimensions are one of our approved sizing increments of S, M, L or XL. =',
  paragraph3: 'The use of S and XL icons will be rare.',
  sizes: ['S', 'M', 'L', 'XL'],
  errorSizes: ['Too small!', 'Too big!'],
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
      { label: 'more', icon: Icon.More },
      { label: 'eye', icon: Icon.Eye },
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
    ],
  },
};

export { ICON_LIBRARY, PURPOSE, SIZING };
