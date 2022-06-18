import styled from "styled-components";
import { HiClipboardCheck } from "react-icons/hi";

export const MyClipboard = styled(HiClipboardCheck)`
  vertical-align: -70px;
  font-size: 85px;
  color: white;
  margin-left: 100px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 70px;
    margin-left: 30%;
  }
`;

export const ChatHeader = styled.div`
  background: rgb(240, 116, 220);
  border-radius: 5px 5px 0 0;
  padding: 20px;

  & h1 {
    font-size: 16px;
    margin-bottom: 20px;
  }

  & p {
    font-size: 14px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    background: rgb(240, 116, 220);
    border-radius: 5px 5px 0 0;
    padding: 10px;

    & h1 {
      font-size: 14px;
      margin-bottom: 20px;
    }

    & p {
      font-size: 12px;
    }
  }
`;

export const ChatContainer = styled.div`
  background: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 900px;
  max-width: 380px;

  margin: 50px auto;

  border-radius: 5px;

  font-family: "Roboto", sans-serif;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 10px auto;
    max-height: 90%;
    max-width: 90%;
  }
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: scroll;
  height: 400px;

  border-radius: 5px;

  background: rgba(250, 250, 250);

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 370px;
  }
`;
