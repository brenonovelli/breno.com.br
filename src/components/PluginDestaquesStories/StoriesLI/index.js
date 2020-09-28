import React from 'react';

import { Container } from './styled';

const StoriesLI = ({
  data = [],
  mobile = false,
  corPrincipal,
  corControles,
  corSetasControles,
}) => {
  return (
    <Container
      className={`storiesWrapper conteiner storiesWrapperCabecalho ${
        mobile ? 'mobile' : 'desktop'
      }`}
      corPrincipal={corPrincipal}
      corControles={corControles}
      corSetasControles={corSetasControles}
    >
      <button type="button" className="icon-prev" />

      <div className="storiesContainer">
        {data.map(item => (
          <div className="storiesItem cor-principal" key={item.id}>
            <a aria-label={item.text} href={item.link} target="_blank">
              {item.image ? <img src={item.image} alt={item.text} /> : ''}
              {item.text}
              {item.tag && (
                <span className="tag" aria-hidden="true">
                  {item.tag}
                </span>
              )}
              {item.badge && (
                <span className="badge" aria-hidden="true">
                  {item.badge}
                </span>
              )}
            </a>
          </div>
        ))}
      </div>

      <button type="button" className="icon-next" />
    </Container>
  );
};

export default StoriesLI;
