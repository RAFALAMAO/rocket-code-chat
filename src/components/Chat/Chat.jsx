import { MdTimer } from "react-icons/md";
import { HiClipboardCheck } from "react-icons/hi";

import { ChatBody, ChatContainer, ChatHeader, MyClipboard } from "./ChatStyles";
import { NameForm } from "../NameForm/NameForm";
import { DateForm } from "../DateForm/DateForm";
import { ContactForm } from "../ContactForm/ContactForm";

import { useRef, useState } from "react";

export const Chat = () => {

  // EndReference
  const endRef = useRef();

  // Global states
  const [GlobalDataState, setGlobalDataState] = useState({
    name: '',
    secondName: '',
    paternalSurname: '',
    maternalSurname: '',
    day: '',
    month: '',
    year: '',
    email: '',
    number: '',

    showResponse: {
      NameForm: false,
      DateForm: false,
      ContactForm: false,
    },

    endRef: endRef,

    showFinalData: true
  })

  const parentData = {
    getGlobal: GlobalDataState,
    setGlobal: setGlobalDataState
  }

  return (
    <ChatContainer>
      <ChatHeader>
        <h1>Título de formulario<MyClipboard/></h1>
        <p><MdTimer style={{ verticalAlign: '-3px', fontSize: '15px'}}/> En menos de 5 minutos</p>
      </ChatHeader>
      <ChatBody>
        <NameForm parentData = {parentData}/>
        <DateForm parentData = {parentData}/>
        <ContactForm parentData = {parentData}/>

        {/* Just for scroll to bottom  */}
        <div ref={endRef}></div>
      </ChatBody>
    </ChatContainer>
  )
}
