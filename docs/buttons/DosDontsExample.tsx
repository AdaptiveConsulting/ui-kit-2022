import { Box, useTheme } from '@mui/material';
import { Icon } from '@ui-kit-2022/components';
interface Props {
  exampleType?: 'Do' | 'Dont';
}
const DosDontsExample: React.FC<Props> = ({ exampleType }) => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        width: '271px',
        height: '187px',
        borderRadius: '0.625rem',
        backgroundColor: palette.common.white,
        padding: '0.625rem 0.6875rem ',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '0.3125rem',
        }}
      >
        <Box
          sx={{
            width: '196px',
            height: '10px',
            backgroundColor: palette.grey[200],
          }}
        ></Box>
        <Icon.Close
          viewBox="0 0 13 13"
          sx={{ width: '10.19px', height: '10.18px', color: palette.grey[500] }}
        />
      </Box>
      <Box
        sx={{
          width: '134px',
          height: '10px',
          backgroundColor: palette.grey[200],
          marginBottom: '0.3125rem',
        }}
      ></Box>
      <Box
        sx={{
          width: '79px',
          height: '10px',
          backgroundColor: palette.grey[200],
          marginBottom: '0.3125rem',
        }}
      ></Box>
      <Box
        sx={{
          width: '100%',
          height: '72px',
          backgroundColor: palette.grey[100],
          marginTop: '1rem',
          marginBottom: '0.625rem',
        }}
      ></Box>
      <Box
        sx={{
          float: exampleType === 'Do' ? 'right' : 'left',
          width: '79px',
          height: '29px',
          borderRadius: '6.25rem',
          backgroundColor: palette.primary.light,
        }}
      ></Box>
    </Box>
  );
};

export default DosDontsExample;
