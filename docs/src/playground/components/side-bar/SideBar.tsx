import styled from '@emotion/styled';
import { Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Company from './Company';
import News from './News';
import Peers from './Peers';

const SideBar = () => {
  const theme = useTheme();

  const SideBar = styled.aside`
    display: flex;
    flex-direction: column;
    align-content: baseline;
    padding: 0 16px;
    width: 350px;
    max-width: 350px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #f1f2f2;
    color: ${theme.palette.grey[900]};
    ${useMediaQuery(theme.breakpoints.down('lg'))
      ? 'display: grid; height: auto; overflow-y: unset; grid-template-areas: "company news peers"; grid-row: 3; width: 100%; max-width: 100%;'
      : null}
    ${useMediaQuery(theme.breakpoints.down('md'))
      ? 'grid-template-columns: 1fr 1fr; grid-template-areas: "company news" "peers 1fr";'
      : null}
    ${useMediaQuery(theme.breakpoints.down('sm'))
      ? 'grid-template-areas: "company" "news" "peers"; grid-template-columns: 1fr;'
      : null}
  `;

  const CompanyContainer = styled.div`
    padding: 24px 20px;
    grid-area: company;
  `;

  const PeersContainer = styled.div`
    grid-area: peers;
    ${useMediaQuery(theme.breakpoints.up('md')) ? 'padding: 24px 20px;' : null}
    ${useMediaQuery(theme.breakpoints.down('md')) ? 'grid-column: 1 / 3;' : null}
  `;

  const NewsContainer = styled.div`
    padding: 24px 20px;
    grid-area: news;
  `;

  return (
    <SideBar>
      <CompanyContainer>
        <Company />
      </CompanyContainer>
      {useMediaQuery(theme.breakpoints.down('lg')) ? null : (
        <Divider color={'#EAEBEB'} variant="middle" />
      )}
      <PeersContainer>
        {useMediaQuery(theme.breakpoints.down('md')) ? (
          <Divider color={'#EAEBEB'} variant="middle" />
        ) : null}
        <Peers />
      </PeersContainer>
      {useMediaQuery(theme.breakpoints.down('lg')) ? null : (
        <Divider color={'#EAEBEB'} variant="middle" />
      )}
      <NewsContainer>
        <News />
      </NewsContainer>
    </SideBar>
  );
};

export default SideBar;
