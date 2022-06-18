import React from 'react'
import { Avatar, Button, Confirm, Container, FinalResponse, Form, InputContainer, Response, Title } from './ContactFormStyles'

import avatar from "../../img/avatar.png";

export const ContactForm = ({ parentData }) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    let auxData = parentData.getGlobal;
    auxData.email = event.target[0].value;
    auxData.number = event.target[1].value;

    auxData.showResponse.ContactForm = true;
    parentData.setGlobal({...auxData})
    setTimeout(() => {
      parentData.getGlobal.endRef.current.scrollIntoView({behavior: "smooth"})
    }, 400);
  }

  const showFinalData = () => {
    let auxData = parentData.getGlobal;

    auxData.showResponse.showFinalData = true;
    parentData.setGlobal({...auxData})
    setTimeout(() => {
      parentData.getGlobal.endRef.current.scrollIntoView({behavior: "smooth"})
    }, 400);
  }

  return (
    <>
      <Container $visible={parentData.getGlobal.showResponse.DateForm}>
        <Avatar src={avatar} alt="avatar" />
        <Form onSubmit={handleSubmit}>
          <Title>Datos de contacto</Title>
          <InputContainer>
            <input type="text" id="name" placeholder="Correo electrónico"/>
            <input type="text" id="secondName" placeholder="Teléfono celular" />
          </InputContainer>
          <button type="submit" style={{display: 'none'}}></button>
        </Form>
        <Response $visible={parentData.getGlobal.showResponse.ContactForm}>{`
          Correo electrónico: ${parentData.getGlobal.email}
          \n Teléfono celular: ${parentData.getGlobal.number}
        `}</Response>
        <Confirm $visible={parentData.getGlobal.showResponse.ContactForm}>Si tus datos son correctos por favor continuemos</Confirm>
        <Button $visible={parentData.getGlobal.showResponse.ContactForm} onClick={showFinalData}>Iniciar</Button>
        <FinalResponse $visible={parentData.getGlobal.showResponse.showFinalData}>
          {`Fecha de nacimiento: ${parentData.getGlobal.day} ${parentData.getGlobal.month} ${parentData.getGlobal.year}`}<br />
          {`Correo electrónico: ${parentData.getGlobal.email}`}<br />
          {`Teléfono celular: ${parentData.getGlobal.number}`}<br />
          {`Nombre: ${parentData.getGlobal.name} ${parentData.getGlobal.secondName}
          ${parentData.getGlobal.paternalSurname}
          ${parentData.getGlobal.maternalSurname}`}<br />
        </FinalResponse>
      </Container>
    </>
  )
}
