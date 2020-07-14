import React from 'react';
import { graphql } from 'gatsby';

import LayoutBenove from '../components/LayoutBenove';
import PostBenoveItem from '../components/PostBenoveItem';
import SEO from '../components/seo';

import * as S from '../components/LayoutBenove/styled';
import { ListWrapper } from '../components/ListWrapper/styled';

const BenovePage = ({ data }) => {
  const postList = data.allMarkdownRemark.edges;

  return (
    <LayoutBenove>
      <SEO title="Benove Studio - All products" />

      <S.Header>
        <h1>Benove Studio</h1>
        <p>
          Espaço para reunir as artes à venda nas plataformas{' '}
          <a
            href="https://www.colab55.com/@benove"
            title="Acessar produtos na Colab55"
            target="_blank"
            rel="noopener noreferrer"
          >
            Colab55
          </a>
          ,{' '}
          <a
            href="https://www.redbubble.com/people/benove/explore"
            title="View shop on Redbubble"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redbubble
          </a>{' '}
          e{' '}
          <a
            href="https://society6.com/benove"
            title="View shop on Society6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Society6
          </a>
          .
        </p>
      </S.Header>

      <ListWrapper className="benove">
        {postList.map(
          ({
            node: {
              frontmatter: {
                background,
                category,
                date,
                description,
                title,
                featuredImage,
                colab55,
                redbubble,
                society6,
              },
              timeToRead,
              fields: { slug },
            },
          }) => (
            <PostBenoveItem
              key={slug}
              slug={slug}
              background={background}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
              featuredImage={featuredImage}
              colab55={colab55}
              redbubble={redbubble}
              society6={society6}
            />
          )
        )}
      </ListWrapper>
    </LayoutBenove>
  );
};

export const query = graphql`
  query BenovePostList {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: "benove" } } }
    ) {
      edges {
        node {
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD/MM/YYYY")
            description
            title
            colab55
            redbubble
            society6
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 480) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BenovePage;
