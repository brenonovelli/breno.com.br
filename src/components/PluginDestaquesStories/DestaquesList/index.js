import React from 'react';
import { ReactSortable } from 'react-sortablejs';
import { Trash } from 'styled-icons/boxicons-regular/';

import DragableItem from '../../DragableItem';

const DestaquesList = ({ data, setData, handleDeleted }) => {
  return (
    <div className="column">
      <header className="withButton">
        <h3>Destaques</h3>

        <button type="button" onClick={() => setData([])}>
          limpar tudo
        </button>
      </header>

      <div>
        {data.length > 0 ? (
          <ReactSortable
            list={data}
            setList={setData}
            delayOnTouchOnly
            handle=".handle"
          >
            {data.map(item => (
              <DragableItem key={item.id}>
                <div className="infos">
                  <img src={item.image} alt="Imagem de destaque" />
                  <strong>
                    {item.text}
                    {item.link && <span>Link: {item.link}</span>}
                    {item.badge && <span>Badge: {item.badge}</span>}
                    {item.tag && <span>Tag: {item.tag}</span>}
                  </strong>
                </div>
                <button type="button" onClick={() => handleDeleted(item.id)}>
                  <Trash />
                </button>
              </DragableItem>
            ))}
          </ReactSortable>
        ) : (
          <DragableItem>
            <div className="infos">
              Você ainda não adicionou nenhum destaque
            </div>
          </DragableItem>
        )}
      </div>
    </div>
  );
};

export default DestaquesList;
