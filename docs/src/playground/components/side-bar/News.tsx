import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

//TODO:  Update styling once Figma designs are finished.  The live RA, which is where the styling is from,
// doesn't match up with the design system.
export default function News() {
  const theme = useTheme();

  const mockNews = [
    {
      title:
        'Workplace Safety Market Size is Projected To Reach 30.4 Billion USD By 2028 At A CAGR of 12.8% | Valuates Reports',
      published: '2 hours ago',
      company: 'Kwhen Finance',
    },
    {
      title: 'Aramco and IBM aim to establish an Innovation Hub in Saudi Arabia',
      published: '5 hours ago',
      company: 'WebWire',
    },
    {
      title:
        'Saudi Aramco and IBM to build innovation centre in Riyadh in sustainability push',
      published: '14 hours ago',
      company: 'The National',
    },
  ];

  const NewsCard = styled.div`
    ${useMediaQuery(theme.breakpoints.down('lg')) ? 'grid-column: 2; grid-row: 1;' : null}
    ${useMediaQuery(theme.breakpoints.down('sm')) ? 'grid-column: 1; grid-row: 2;' : null}
  `;

  const NewsHeadline = styled.a`
    color: #4d4d4d;
    font-size: 13px;
    line-height: 1.54;
    margin-bottom: 7px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `;

  const NewsCaption = styled.span`
    font-size: 11px;
    color: #707070;
    font-style: italic;
    opacity: 0.59;
    display: block;
    line-height: 1rem;
    margin-top: 0.25rem;
    margin-bottom: 1rem;
    padding-bottom: 19px;
  `;

  return (
    <NewsCard>
      <Typography
        variant="h1"
        sx={{
          padding: 0,
          margin: 0,
          marginBottom: '15px',
          fontWeight: 300,
          fontSize: '16px',
          color: theme.palette.grey[800],
          fontFamily: 'Merriweather, sans-serif',
        }}
      >
        Latest News
      </Typography>
      {mockNews.map((news) => (
        <article key={news.title}>
          <NewsHeadline>{news.title}</NewsHeadline>
          <NewsCaption>
            {news.published} - {news.company}
          </NewsCaption>
        </article>
      ))}
    </NewsCard>
  );
}
