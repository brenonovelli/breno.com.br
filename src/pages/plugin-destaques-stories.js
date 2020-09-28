/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import LayoutBenoveStore from '../components/LayoutBenoveStore';
import {
  defaultOptions,
  defaultStories,
  Intro,
  Values,
  DeviceMobile,
  DeviceDesktop,
  DestaquesList,
  DestaquesAdd,
  DestaquesOptions,
  PreviewCode,
} from '../components/PluginDestaquesStories';

import SEO from '../components/seo';

import * as S from '../components/LayoutBenoveStore/styled';

const PluginDestaquesStories = () => {
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState([...defaultStories]);
  const [options, setOptions] = useState(defaultOptions);
  const sectionConfigRef = useRef(null);

  const handleDeleted = idDeleted => {
    setData(data.filter(item => item.id !== idDeleted));
    setCopied(false);
  };

  const handleChange = e => {
    const { name } = e.target;
    setCopied(false);
    setOptions({ ...options, [name]: !options[name] });
  };

  const handleChangeToken = e => {
    const { value } = e.target;
    setCopied(false);
    setOptions({ ...options, token: value });
  };

  const handleRadioChange = e => {
    const { name, value } = e.target;
    setCopied(false);
    setOptions({ ...options, [name]: value });
  };

  const handleColors = {
    corPrincipal: color => {
      setOptions({ ...options, corPrincipal: color.hex });
      setCopied(false);
    },
    corControles: color => {
      setOptions({ ...options, corControles: color.hex });
      setCopied(false);
    },
    corSetasControles: color => {
      setOptions({ ...options, corSetasControles: color.hex });
      setCopied(false);
    },
  };

  const handleSubmit = newData => {
    const newItem = { ...newData, id: uuidv4() };
    setCopied(false);
    setData([...data, newItem]);
  };

  const scrollToConfigSection = () =>
    window.scrollTo(0, sectionConfigRef.current.offsetTop);

  return (
    <LayoutBenoveStore>
      <SEO title="Loja Integrada - Plugin destaque stories" />

      <S.Header>
        <h1>Stories Destaques</h1>
        <p>
          Exiba destaques no famoso formato usado pelos principais app.{' '}
          <span role="img" aria-label="ícone foguete">
            🚀
          </span>
          <br />
          Uma forma que seu usuário já está pra lá de acostumado: miniaturas do
          stories.
        </p>
        <p className="feature">
          Essa é uma extensão para você usar na sua{' '}
          <a
            href="https://www.lojaintegrada.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Loja Integrada
          </a>
          .<br />
          Em breve em outras plataformas. Em qual você gostaria de tê-la?
        </p>
      </S.Header>

      <S.Section className="intro mobile">
        {/* .column */}
        <DeviceMobile data={data} options={options} />
        {/* .column */}
        <Intro scrollToConfigSection={scrollToConfigSection} />
      </S.Section>

      <S.Section>
        <Values />
      </S.Section>

      <S.Section className="desktop">
        <DeviceDesktop data={data} options={options} />
      </S.Section>

      <S.Section className="form" ref={sectionConfigRef}>
        <header>
          <h2>Configuração</h2>
          <p>
            Se você já tem a licença de uso, pode usar esse espaço para gerar
            seu código final.
            <br />
            Crie seus stories e depois clique no botão{' '}
            <span>copiar código</span> abaixo.
          </p>
        </header>

        {/* .column */}
        <DestaquesList
          data={data}
          setData={setData}
          handleDeleted={handleDeleted}
        />

        <div className="column flex__1">
          <DestaquesOptions
            options={options}
            handleRadioChange={handleRadioChange}
            handleChange={handleChange}
            handleChangeToken={handleChangeToken}
            handleColors={handleColors}
          />

          <hr />

          <DestaquesAdd handleSubmit={handleSubmit} />
        </div>
      </S.Section>

      <S.Section className="copyCodeSection">
        <PreviewCode
          options={options}
          data={data}
          copied={copied}
          setCopied={setCopied}
        />
      </S.Section>

      <S.Section>
        <header>
          <h2>
            <span role="img" aria-label="feito com amor">
              ❤️
            </span>
            <br />
            Você e seus clientes merecem isso! Obrigado.
          </h2>
        </header>
      </S.Section>
    </LayoutBenoveStore>
  );
};

export default PluginDestaquesStories;
