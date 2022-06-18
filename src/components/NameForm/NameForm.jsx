import React from 'react'
import { Avatar, Container, Form, InputContainer, Response, Title } from './NameFormStyles'

import avatar from "../../img/avatar.png";

export const NameForm = ({ parentData }) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    let auxData = parentData.getGlobal;
    auxData.name = event.target[0].value;
    auxData.name = auxData.name.charAt(0).toUpperCase() + auxData.name.slice(1)

    auxData.secondName = event.target[1].value;
    auxData.secondName = auxData.secondName.charAt(0).toUpperCase() + auxData.secondName.slice(1)

    auxData.paternalSurname = event.target[2].value;
    auxData.paternalSurname = auxData.paternalSurname.charAt(0).toUpperCase() + auxData.paternalSurname.slice(1)

    auxData.maternalSurname = event.target[3].value;
    auxData.maternalSurname = auxData.maternalSurname.charAt(0).toUpperCase() + auxData.maternalSurname.slice(1)

    if( auxData.name === '' || auxData.paternalSurname === '' ){
      alert('Al menos debe haber un nombre y apellido paterno')
    } else {
      auxData.showResponse.NameForm = true
      parentData.setGlobal({...auxData})
      setTimeout(() => {
        parentData.getGlobal.endRef.current.scrollIntoView({behavior: "smooth"})
      }, 400);
    }
  }

  return (
    <>
      <Container>
        <Avatar src={avatar} alt="avatar" />
        <Form onSubmit={handleSubmit}>
          <Title>¿Cuál es tu nombre?</Title>
          <InputContainer>
            <input type="text" id="name" placeholder="Nombre"/>
            <input type="text" id="secondName" placeholder="Segundo nombre" />
            <input type="text" id="maternalSurname" placeholder="Apellido paterno" />
            <input type="text" id="paternalSurname" placeholder="Apellido materno" />
          </InputContainer>
          <button type="submit" style={{display: 'none'}}></button>
        </Form>
        <Response $visible={parentData.getGlobal.showResponse.NameForm}>{`
          ${parentData.getGlobal.name}
          ${parentData.getGlobal.secondName}
          ${parentData.getGlobal.paternalSurname}
          ${parentData.getGlobal.maternalSurname}
        `}</Response>
      </Container>
    </>
  )
}
