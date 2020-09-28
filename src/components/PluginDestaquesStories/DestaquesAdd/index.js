import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';

import Label from '../../Label';
import Input from '../../Input';
import FormGroup from '../../FormGroup';
import { Button } from '../../Button';

const DestaquesAdd = ({ handleSubmit }) => {
  const formRef = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <>
          <header>
            <h3>Inserir destaque</h3>
          </header>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <FormGroup>
              <Label htmlFor="text">Título</Label>
              <Input id="text" type="text" name="text" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="link">Link</Label>
              <Input id="link" type="text" name="link" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="image">URL da imagem</Label>
              <Input id="image" type="text" name="image" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="tag">Tag</Label>
              <Input id="tag" type="text" name="tag" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="badge">Badge</Label>
              <Input id="badge" type="text" name="badge" />
            </FormGroup>
            <FormGroup>
              <Button type="submit">Inserir</Button>
            </FormGroup>
          </Form>
        </>
      ) : (
        <Button type="button" onClick={() => setOpen(true)}>
          Inserir um destaque
        </Button>
      )}
    </>
  );
};

export default DestaquesAdd;
