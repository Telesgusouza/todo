import styled from "styled-components";

type Props = {
  width: boolean;
  height: boolean;
};

export const Container = styled.main`
  padding-top: 30px;
  background-color: #ff6347;
  margin: 0;
  height: 100vh;
  width: 100%;
  max-width: 100%;

  a {
    text-decoration: none;
  }

  h2 {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    color: white;
    font-size: 36px;
    text-align: center;
  }
`;


export const ContainerTitle = styled.div<Props>`
  margin: 30px auto 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  width: 100%;
  max-width: ${(props) => (props.width ? "325px" : "170px")}; 

  overflow: hidden;
  transition: all 0.2s ease-in-out;

  h1 {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    color: #fff;
    font-size: 36px;

    width: fit-content;

    cursor: pointer;

    @media (max-width: 260px) {
      font-size: 30px;
    }
  }

  @media (max-width: 380px) {
    max-width: 100%;
    grid-template-columns: 1fr;
    max-height: ${(props) => (props.height ? "110px" : "45px")};
    h1 {
      width: 100%;
      text-align: center;
    }
  }
`

export const ButtonStart = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 20px;

  button {
    border: none;
    padding: 8px 30px;
    background-color: #ff3014;
    color: #ffffff;
    font-weight: 800;

    cursor: pointer;
  }
`;
