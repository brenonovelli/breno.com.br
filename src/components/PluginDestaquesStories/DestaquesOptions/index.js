import React from 'react';
import { Form } from '@unform/web';
import { SketchPicker } from 'react-color';

import { allowedLocals } from '../allowedLocals';

import Label from '../../Label';
import { RadioButton } from '../../RadioButton';
import Input from '../../Input';
import InputToggle from '../../InputToggle';
import FormGroup from '../../FormGroup';

const DestaquesOptions = ({
  options,
  handleRadioChange,
  handleChange,
  handleChangeToken,
  handleColors,
}) => {
  return (
    <>
      <header>
        <h3>Opções</h3>
      </header>
      <Form initialData={options}>
        <FormGroup className="border inline">
          <div>
            <Label>Onde exibir</Label>
            <RadioButton
              name="local"
              options={allowedLocals}
              onChange={handleRadioChange}
            />
          </div>
        </FormGroup>
        <FormGroup className="border inline">
          <Label htmlFor="apenasNoMobile">
            <InputToggle
              id="apenasNoMobile"
              name="apenasNoMobile"
              checked={options.apenasNoMobile}
              onChange={handleChange}
            />
            Mostrar apenas no telefone
          </Label>
        </FormGroup>
        <FormGroup className="border inline">
          <Label htmlFor="apenasNaHome">
            <InputToggle
              id="apenasNaHome"
              name="apenasNaHome"
              checked={options.apenasNaHome}
              onChange={handleChange}
            />
            Mostrar apenas na Home
          </Label>
        </FormGroup>
        <FormGroup className="border inline">
          <Label htmlFor="zoomNoHover">
            <InputToggle
              id="zoomNoHover"
              name="zoomNoHover"
              checked={options.zoomNoHover}
              onChange={handleChange}
            />
            Zoom ao passar o mouse
          </Label>
        </FormGroup>

        <FormGroup className="border inline">
          <Label htmlFor="corPrincipalChange">
            <InputToggle
              id="corPrincipalChange"
              name="corPrincipalChange"
              checked={options.corPrincipalChange}
              onChange={handleChange}
            />
            Cor principal
          </Label>
          {options.corPrincipalChange && (
            <SketchPicker
              disableAlpha
              color={options.corPrincipal || ''}
              onChange={handleColors.corPrincipal}
            />
          )}
        </FormGroup>

        <FormGroup className="border inline">
          <Label htmlFor="corControlesChange">
            <InputToggle
              id="corControlesChange"
              name="corControlesChange"
              checked={options.corControlesChange}
              onChange={handleChange}
            />
            Cor do fundo das setas (desktop)
          </Label>

          {options.corControlesChange && (
            <SketchPicker
              disableAlpha
              color={options.corControles || ''}
              onChangeComplete={handleColors.corControles}
            />
          )}
        </FormGroup>

        <FormGroup className="border inline">
          <Label htmlFor="corSetasControlesChange">
            <InputToggle
              id="corSetasControlesChange"
              name="corSetasControlesChange"
              checked={options.corSetasControlesChange}
              onChange={handleChange}
            />
            Cor das setas (desktop)
          </Label>

          {options.corSetasControlesChange && (
            <SketchPicker
              disableAlpha
              color={options.corSetasControles || ''}
              onChangeComplete={handleColors.corSetasControles}
            />
          )}
        </FormGroup>

        <FormGroup className="border">
          <Label htmlFor="token">Seu token único</Label>
          <Input
            id="token"
            type="text"
            name="token"
            onChange={handleChangeToken}
          />
        </FormGroup>
      </Form>
    </>
  );
};

export default DestaquesOptions;
