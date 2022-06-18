import { MdTimer } from "react-icons/md";
import { ChatBody, ChatContainer, ChatHeader, MyClipboard } from "./ChatStyles";
import { NameForm } from "../NameForm/NameForm";
import { DateForm } from "../DateForm/DateForm";
import { ContactForm } from "../ContactForm/ContactForm";

import { useEffect, useRef, useState } from "react";

export const Chat = () => {

  // EndReference for scroll each time a new form is visible
  const endRef = useRef();

  function getSessionStorageOrDefault(key, defaultValue) {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  }

  // Global state
  const [GlobalDataState, setGlobalDataState] = useState(
    getSessionStorageOrDefault('GlobalDataState', {
      // User data
      name: '',
      secondName: '',
      paternalSurname: '',
      maternalSurname: '',
      day: '',
      month: '',
      year: '',
      email: '',
      number: '',

      // Show or hide each response
      showResponse: {
        NameForm: false,
        DateForm: false,
        ContactForm: false,
      },

      // Show final got data
      showFinalData: true
    })
  )

  // Global state and set state in a class
  const parentData = {
    getGlobal: GlobalDataState,
    setGlobal: setGlobalDataState
  }

  useEffect(() => {
    sessionStorage.setItem('GlobalDataState', JSON.stringify(GlobalDataState));
  }, [GlobalDataState]);

  return (
    <ChatContainer>
      <ChatHeader>
        <h1>Título de formulario<MyClipboard/></h1>
        <p><MdTimer style={{ verticalAlign: '-3px', fontSize: '15px'}}/> En menos de 5 minutos</p>
      </ChatHeader>
      <ChatBody>
        <NameForm parentData = {parentData} endRef = {endRef}/>
        <DateForm parentData = {parentData} endRef = {endRef}/>
        <ContactForm parentData = {parentData} endRef = {endRef}/>

        {/* Just for scroll to bottom  */}
        <div ref={endRef}></div>
      </ChatBody>
    </ChatContainer>
  )
}
