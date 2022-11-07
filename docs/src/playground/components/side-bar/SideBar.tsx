import styled from '@emotion/styled';
import { Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

import Company from './Company';
import News from './News';
import Peers from './Peers';

const SideBar = () => {
  const theme = useTheme();

  const SideBar = styled.aside`
    display: grid;
    grid-template-areas: 'company' 'peers' 'news';
    padding: 0 16px;
    width: 350px;
    max-width: 350px;
    ${useMediaQuery(theme.breakpoints.up('lg'))
      ? 'overflow-y: auto;'
      : 'overflow-y: visible;'}
    background-color: #f1f2f2;
    color: ${theme.palette.grey[900]};
    ${useMediaQuery(theme.breakpoints.down('lg'))
      ? 'grid-template-areas: "company news peers"; grid-row: 3; width: 100%; max-width: 100%;'
      : null}
    ${useMediaQuery(theme.breakpoints.down('md'))
      ? 'grid-template-areas: "company news" "peers 1fr";'
      : null}
    ${useMediaQuery(theme.breakpoints.down('sm'))
      ? 'grid-template-areas: "company" "news" "peers";'
      : null}
  `;

  const CompanyContainer = styled.div`
    padding: 24px 0;
    grid-area: company;
  `;

  const PeersContainer = styled.div`
    grid-area: peers;
    ${useMediaQuery(theme.breakpoints.down('md')) ? 'grid-column: 1 / 3;' : null}
  `;

  const NewsContainer = styled.div`
    grid-area: news;
  `;

  return (
    <SideBar>
      <CompanyContainer>
        <Company />
        {useMediaQuery(theme.breakpoints.down('lg')) ? null : (
          <Divider color={'#EAEBEB'} variant="middle" />
        )}
        {useMediaQuery(theme.breakpoints.down('sm')) ? (
          <Divider color={'#EAEBEB'} variant="middle" />
        ) : null}
      </CompanyContainer>
      <PeersContainer>
        {useMediaQuery(theme.breakpoints.down('md')) ? (
          <Divider color={'#EAEBEB'} variant="middle" sx={{ margin: 0 }} />
        ) : null}
        <Peers />
      </PeersContainer>
      <NewsContainer>
        {useMediaQuery(theme.breakpoints.down('lg')) ? null : (
          <Divider color={'#EAEBEB'} variant="middle" />
        )}
        <News />
      </NewsContainer>
    </SideBar>
  );
};

export default SideBar;
