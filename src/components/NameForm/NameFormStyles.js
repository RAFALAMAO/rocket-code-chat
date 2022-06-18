import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  gap: 10px;
`;

export const Form = styled.form`
  margin-top: 10px;
  padding: 15px;
  padding-top: 10px;
  background-color: rgb(240, 240, 240);
  border-radius: 10px;

  /* State indicator */
  &:before {
    content: " ⚘ ";
    position: relative;
    font-size: 16px;
    top: 44px;
    right: 38px;
    border-radius: 50%;
    padding: 0px 2px;
    background: rgb(240, 116, 220);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  & input {
    border: solid 2px rgb(222, 222, 222);
    background: transparent;
    width: calc(100% - 33px);
    padding: 15px;
    border-radius: 2px;
  }
`;

export const Title = styled.h1`
  font-size: 17px;
  margin-top: -10px;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 55px;
  padding: 2px;
  margin-top: 10px;

  border: 2px solid rgb(240, 116, 220);
  border-radius: 30px 30px 30px 30px;
`;

export const Response = styled.p`
  display: ${(props) => (props.$visible ? "block" === true : "none")};
  margin-left: 14%;
  padding: 20px 10px;
  background-color: rgb(240, 116, 220);
  border-radius: 5px;

  font-size: 13px;
  font-weight: lighter;

  grid-column: 1/-1;
`;
