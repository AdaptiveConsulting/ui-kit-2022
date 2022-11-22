import { SplashScreen } from '@ui-kit-2022/components';

interface Props {
  showSplash: boolean;
}

export default function SplashScreenStory(props: Props) {
  return (
    // <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
    <>{props.showSplash ? <SplashScreen /> : null}</>
    // </Box>
  );
}
