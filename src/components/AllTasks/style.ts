import styled from "styled-components";

export const Container = styled.section`

`;


export const Form = styled.form`
  margin: 18px 0 30px 0px;
  display: flex;

  input {
    border: 1px solid #bdbdbd;
    border-radius: 12px;
    padding: 15px 12px;

    width: 100%;
    margin-right: 20px;

    transition: border 0.2s ease-in-out;

    &:focus {
      outline: 0;
      border: 1px solid #2f80ed;
    }
  }

  button {
    border: none;
    background-color: #2f80ed;
    color: white;
    padding: 10px;
    border-radius: 12px;

    font-weight: 600;
    font-size: 12px;

    transition: box-shadow 0.2s ease-in-out;

    cursor: pointer;

    &:hover {
      box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
    }
  }

  @media (max-width: 320px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;

export const ListTask = styled.ul`
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
    opacity: 0;
  }

  &:hover {
    img {
      opacity: 1;
    }
  }
`;

