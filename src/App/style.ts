import styled from "styled-components";

export const Container = styled.main`
  text-align: center;

  h1 {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    color: #333333;
    font-size: 36px;

    margin: 30px 0 50px 0;
  }
`;

export const Navigate = styled.nav`
  margin: 0 auto;
  width: fit-content;
  width: 100%;

  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 100%;
    padding: 0 20px;

    border-bottom: 1px solid #bdbdbd;
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
  }
`;
