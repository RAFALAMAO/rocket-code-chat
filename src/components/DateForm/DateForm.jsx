import React from 'react'
import { Avatar, Container, Form, InputContainer, Response, Title } from './DateFormStyles'

import avatar from "../../img/avatar.png";

export const DateForm = ({ parentData, endRef }) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    let auxData = parentData.getGlobal;
    auxData.day = event.target[0].value;
    auxData.month = event.target[1].value;
    auxData.year = event.target[2].value;

    // Reg exp for valitation
    const regExpDay = new RegExp(/^\d{2}$/);
    const regExpMonth = new RegExp(/^[a-zA-Z ]*$/);
    const regExpYear = new RegExp(/^\d{4}$/);

    // Validations
    if( !regExpDay.test(auxData.day) ){
      alert('Ingresa un "día" válido');
      return;
    } else if( !regExpMonth.test(auxData.month) ){
      alert('Ingresa un "mes" válido en texto');
      return;
    } else if( !regExpYear.test(auxData.year) ){
      alert('Ingresa un "año" válido');
      return;
    }

    parentData.getGlobal.showResponse.DateForm = true;
    parentData.setGlobal({...auxData});
    setTimeout(() => {
      endRef.current.scrollIntoView({behavior: "smooth"});
    }, 400);
  };

  return (
    <Container $visible={parentData.getGlobal.showResponse.NameForm}>
      <Avatar src={avatar} alt="avatar" />
      <Form onSubmit={handleSubmit}>
        <Title>¿Cuál es tu fecha de nacimiento?</Title>
        <InputContainer>
          <input type="text" id="name" placeholder="Dia"/>
          <input type="text" id="secondName" placeholder="Mes" />
          <input type="text" id="maternalSurname" placeholder="Año" />
        </InputContainer>
        <button type="submit" style={{display: 'none'}}></button>
      </Form>
      <Response $visible={parentData.getGlobal.showResponse.DateForm}>{`${parentData.getGlobal.day} ${parentData.getGlobal.month} ${parentData.getGlobal.year}`}</Response>
    </Container>
  );
};
