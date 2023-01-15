import styled from "styled-components";

type Props = {
  width: boolean;
  height: boolean;
};

export const Container = styled.main`
  text-align: center;
  padding-bottom: 50px;

  a {
    text-decoration: none;
  }
`;

export const ContainerTitle = styled.div<Props>`
  margin: 30px auto 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  width: 100%;
  max-width: ${(props) => (props.width ? "350px" : "110px")}; 

  overflow: hidden;
  transition: all 0.2s ease-in-out;

  h1 {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    color: #333333;
    font-size: 36px;

    width: fit-content;

    cursor: pointer;

    @media (max-width: 260px) {
      font-size: 30px;
    }
  }

  @media (max-width: 450px) {
    h1 {
      width: 100%;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 380px) {
    max-width: 100%;
    grid-template-columns: 1fr;
    max-height: ${(props) => (props.height ? "110px" : "45px")};
  }
`;

export const Navigate = styled.nav`
  margin: 0 auto;
  width: fit-content;
  width: 100%;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    list-style: none;
    width: 100%;
    padding: 0 20px;

    border-bottom: 1px solid #bdbdbd;

    @media (max-width: 450px) {
      grid-template-columns: 1fr;
      margin: 0 auto;
      border-bottom: none;
      margin-bottom: 40px;
    }
  }

  li {
    width: 120px;
    padding: 13px 0;

    position: relative;

    color: #333333;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;

    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      border-top: 0px solid #2f80ed;

      transition: border-top 0.2s ease-in-out;
    }

    &:hover::after {
      border-top: 3px solid #2f80ed;
    }

    @media (max-width: 450px) {
      border-bottom: 1px solid #bdbdbd;
      width: 100%;
    }
  }
`;
