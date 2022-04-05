import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';

import Label from '../../Label';
import FormGroup from '../../FormGroup';
import Textarea from '../../Textarea';
import { Button } from '../../Button';

const UpdateCode = ({ handleUpdateCode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formRef = useRef(null);

  const getValue = value => {
    switch (true) {
      case value === 'false' || value === '0':
        return false;
      case value === 'true' || value === '1':
        return true;
      case value === 'null':
        return null;

      default:
        return value ? value.replace(/"/gm, '').trim() : value;
    }
  };

  const handleSettings = formData =>
    formData.split(',').reduce((acc, item) => {
      const [key, value] = item.split(':');

      return { ...acc, [key.trim()]: value ? getValue(value.trim()) : value };
    }, {});

  const handleStories = formData =>
    formData.map(item => {
      const storyRaw = item.split(',');

      const story = storyRaw.reduce((acc, storyItem) => {
        const [key, value] = storyItem.split(/:(.*)/s);

        return { ...acc, [key.trim()]: value ? getValue(value.trim()) : value };
      }, {});

      const validKeys = ['image', 'link', 'tag', 'text', 'badge'];

      return story;
    });

  const handleSubmit = formData => {
    const pattern = /[^{}]+(?=})/g;

    const plainText = formData.code.replace(/(\r\n|\n|\r)/gm, '');
    // .replace(/\s/gm, '');

    const [settingsRaw = null, ...storiesRaw] = plainText.match(pattern);

    const settings = settingsRaw ? handleSettings(settingsRaw) : null;

    const stories = storiesRaw ? handleStories(storiesRaw) : null;

    const token =
      plainText.slice(
        plainText.indexOf('B9DST = "') + 9,
        plainText.lastIndexOf('";')
      ) || null;

    const currentSettigns = { settings, stories, token };

    console.log(currentSettigns);

    setIsOpen(s => !s);

    return handleUpdateCode(currentSettigns);
  };

  return (
    <>
      <header>
        <Button onClick={() => setIsOpen(s => !s)}>Importar meu código</Button>
      </header>

      {isOpen && (
        <Form onSubmit={handleSubmit} ref={formRef}>
          <FormGroup>
            <Label htmlFor="text">
              Cole seu código na caixa abaixo
              <span>
                Se o seu código não estiver idêntico ao gerado nesta ferramenta,
                alguns dados podem ser perdidos na importação.
              </span>
            </Label>

            <Textarea id="code" type="text" name="code" multiline />
          </FormGroup>

          <FormGroup>
            <Button type="submit">Enviar</Button>
          </FormGroup>
        </Form>
      )}
    </>
  );
};

export default UpdateCode;
