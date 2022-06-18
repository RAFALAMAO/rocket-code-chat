import { Avatar, Button, Confirm, Container, FinalResponse, Form, InputContainer, Response, Title } from './ContactFormStyles';

import avatar from "../../img/avatar.png";

export const ContactForm = ({ parentData, endRef }) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    let auxData = parentData.getGlobal;
    auxData.email = event.target[0].value;
    auxData.number = event.target[1].value;

    // Reg exp for valitation
    const regExpPhone = new RegExp(/^\d{10}$/);
    const regExpEmail = new RegExp(/.+@.+\..+/);

    // Validations
    if( !regExpEmail.test(auxData.email) ){
      alert('Ingresa un "email" válido');
      return;
    } else if( !regExpPhone.test(auxData.number) ){
      alert('Ingresa un "numero" válido');
      return;
    }

    auxData.showResponse.ContactForm = true;
    parentData.setGlobal({...auxData})
    setTimeout(() => {
      endRef.current.scrollIntoView({behavior: "smooth"});
    }, 400);
  };

  const showFinalData = () => {
    let auxData = parentData.getGlobal;

    auxData.showResponse.showFinalData = true;
    parentData.setGlobal({...auxData})
    setTimeout(() => {
      endRef.current.scrollIntoView({behavior: "smooth"});
    }, 400);
  }

  return (
    <Container $visible={parentData.getGlobal.showResponse.DateForm}>
      <Avatar src={avatar} alt="avatar" />
      <Form onSubmit={handleSubmit}>
        <Title>Datos de contacto</Title>
        <InputContainer>
          <input type="text" id="email" placeholder="Correo electrónico"/>
          <input type="text" id="number" placeholder="Teléfono celular" />
        </InputContainer>
        <button type="submit" style={{display: 'none'}}></button>
      </Form>
      <Response $visible={parentData.getGlobal.showResponse.ContactForm}>
        {'Correo electrónico: ' + parentData.getGlobal.email} <br />
        {'Teléfono celular: ' + parentData.getGlobal.number}
      </Response>

      {/* Final confirmation */}
      <Confirm $visible={parentData.getGlobal.showResponse.ContactForm}>Si tus datos son correctos por favor continuemos</Confirm>
      <Button $visible={parentData.getGlobal.showResponse.ContactForm} onClick={showFinalData}>Iniciar</Button>
      <FinalResponse $visible={parentData.getGlobal.showResponse.showFinalData}>
        {`Fecha de nacimiento: ${parentData.getGlobal.day} ${parentData.getGlobal.month} ${parentData.getGlobal.year}`}<br />
        {`Correo electrónico: ${parentData.getGlobal.email}`}<br />
        {`Teléfono celular: ${parentData.getGlobal.number}`}<br />
        {`Nombre: ${parentData.getGlobal.name}
        ${parentData.getGlobal.secondName}
        ${parentData.getGlobal.paternalSurname}
        ${parentData.getGlobal.maternalSurname}`}<br />
      </FinalResponse>
    </Container>
  )
}
