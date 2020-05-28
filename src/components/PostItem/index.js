import React from 'react';
import PropTypes from 'prop-types';

import getThemeColor from '../../utils/getThemeColor';

import * as S from './styled';

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => (
  <S.PostItemLink
    to={slug}
    cover
    direction="right"
    bg={getThemeColor()}
    duration={0.6}
  >
    <S.PostItemWrapper>
      <S.PostItemTag background={background} />
      <S.PostItemInfo>
        <S.PostItemInfoHeader>
          <S.PostItemDate>
            {date} <span>on</span>
          </S.PostItemDate>
          <S.PostItemCategory> {category}</S.PostItemCategory>
        </S.PostItemInfoHeader>
        <S.PostItemTitle>
          <span>{`>`}</span> {title}
        </S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
);

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

PostItem.defaultProps = {
  background: 'var(--highlight)',
};

export default PostItem;
