import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import { Card, CardTitle, InnerCardContainer } from '../styled/cards';
import {
  RichLinkText as PodcastProvider,
  RichLinkComposer,
} from '../styled/link';
import { podcasts } from '../utils/composers';
import { fluid } from '../utils/fluid';

import SubscribeSvg from '../../content/assets/subscribe.svg';

// Styled components

const StyledImage = styled(GatsbyImage)`
  width: 40px;

  @media (min-width: 768px) {
    width: ${fluid(40, 56)};
  }
`;

// Main components

const PodcastLink = (icon, url, name) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" key={name}>
      <RichLinkComposer flat withImage>
        <StyledImage alt={name} image={icon}></StyledImage>
        <PodcastProvider>{name}</PodcastProvider>
      </RichLinkComposer>
    </a>
  );
};

const Subscribe = () => {
  // GraphQL
  const data = useStaticQuery(graphql`
    {
      ApplePodcasts: allFile(
        filter: {
          absolutePath: { regex: "/assets/podcasts/apple-podcasts.png/" }
        }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      GooglePodcasts: allFile(
        filter: {
          absolutePath: { regex: "/assets/podcasts/google-podcasts.png/" }
        }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      Spotify: allFile(
        filter: { absolutePath: { regex: "/assets/podcasts/spotify.png/" } }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      Overcast: allFile(
        filter: { absolutePath: { regex: "/assets/podcasts/overcast.png/" } }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      RSS: allFile(
        filter: { absolutePath: { regex: "/assets/podcasts/rss.png/" } }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const generatePodcastList = podcasts.map((p) => {
    let icon = data[p.id].nodes[0].childImageSharp.gatsbyImageData;
    return PodcastLink(icon, p.url, p.name);
  });

  return (
    <Card>
      <InnerCardContainer>
        <CardTitle>
          <SubscribeSvg />
          <h2>Suscríbete</h2>
        </CardTitle>
        <p>No te lo pierdas y se siempre el primero en escucharnos.</p>
        {generatePodcastList}
      </InnerCardContainer>
    </Card>
  );
};

export default Subscribe;
