import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const PostBenoveItem = ({
  title,
  description,
  featuredImage,
  colab55,
  redbubble,
  society6,
}) => {
  const featuredImageFluid = featuredImage.childImageSharp.fluid;

  return (
    <S.PostBenoveItemWrapper>
      <S.PostBenoveItemFeaturedImage fluid={featuredImageFluid} />

      <S.PostBenoveItemInfo>
        <S.PostBenoveItemTitle>
          <span>{`>`}</span> {title}
        </S.PostBenoveItemTitle>

        <S.PostBenoveItemDescription>{description}</S.PostBenoveItemDescription>

        <S.PostBenoveItemLinks>
          <span>Disponível / Available</span>
          {colab55 && (
            <a
              href={colab55}
              title="Ver itens na Colab55"
              target="_blank"
              rel="noopener noreferrer"
            >
              Colab55
            </a>
          )}

          {redbubble && (
            <a
              href={redbubble}
              title="View item on Redbubble"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redbubble
            </a>
          )}

          {society6 && (
            <a
              href={society6}
              title="View item on Society6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Society6
            </a>
          )}
        </S.PostBenoveItemLinks>
      </S.PostBenoveItemInfo>
    </S.PostBenoveItemWrapper>
  );
};

PostBenoveItem.propTypes = {
  featuredImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  colab55: PropTypes.string,
  redbubble: PropTypes.string,
  society6: PropTypes.string,
};

PostBenoveItem.defaultProps = {
  colab55: null,
  redbubble: null,
  society6: null,
};

export default PostBenoveItem;
