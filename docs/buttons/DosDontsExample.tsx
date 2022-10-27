import { Box, SvgIcon, useTheme } from '@mui/material';
import { Close } from '@ui-kit-2022/components/src/icons';
interface Props {
  exampleType?: 'Do' | 'Dont';
}
const DosDontsExample: React.FC<Props> = ({ exampleType }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '271px',
        height: '187px',
        borderRadius: '0.625rem',
        backgroundColor: theme.palette.common.white,
        paddingTop: '0.625rem',
        paddingRight: '0.6875rem',
        paddingLeft: '0.6875rem',
        paddingBottom: '0.625rem',
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
            backgroundColor: theme.palette.grey[200],
          }}
        ></Box>

        <SvgIcon
          component={Close}
          viewBox="0 0 13 13"
          sx={{ width: '10.19px', height: '10.18px', color: theme.palette.grey[500] }}
        />
      </Box>
      <Box
        sx={{
          width: '134px',
          height: '10px',
          backgroundColor: theme.palette.grey[200],
          marginBottom: '0.3125rem',
        }}
      ></Box>
      <Box
        sx={{
          width: '79px',
          height: '10px',
          backgroundColor: theme.palette.grey[200],
          marginBottom: '0.3125rem',
        }}
      ></Box>
      <Box
        sx={{
          width: '100%',
          height: '72px',
          backgroundColor: theme.palette.grey[100],
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
          backgroundColor: theme.palette.primary.light,
        }}
      ></Box>
    </Box>
  );
};

export default DosDontsExample;
