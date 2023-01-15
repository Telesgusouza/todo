import styled from "styled-components";

export const Container = styled.section`
  div {
    margin-top: 30px;
  }
`;

export const ListTask = styled.ul`
  margin-top: 30px;
  list-style: none;
  display: grid;
  grid-gap: 30px;
`;

export const Task = styled.li`
  display: flex;

  input {
    cursor: pointer;
    appearance: none;
    width: 23px;
    height: 20px;
    outline: none;
    border: 2px solid #828282;
    border-radius: 4px;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 10px;

    &::before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 2px;

      background-color: #828282;
      opacity: 0;
    }

    &:checked::before {
      opacity: 1;
    }
  }

  p {
    text-align: left;
    width: 100%;

    font-weight: 500;
    font-size: 15px;
    color: black;
  }

  img {
    width: 34px;
    height: fit-content;
    padding: 0 10px 10px 10px;
    margin-left: 10px;

    transition: opacity 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const BtnDeleteAll = styled.button`
  display: flex;
  align-items: center;
  
  background-color: #EB5757;
  color: white;
  float: right;
  border: none;

  font-size: 12px;

  padding: 10px 25px;
  border-radius: 4px;

  cursor: pointer;

  img {
    width: 10px;
    margin-right: 6px;
  }
`;
