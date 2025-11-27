import { css } from "@emotion/react";

export const container = css`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const side = css`
  flex: 1;
  background-color: #8A7E74;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    width: 70%;
    font-size: 20px;
    font-weight: 400;
    color: white;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: transform 0.3s ease, font-size 0.3s ease;

    :hover {
      transform: scale(1.1);
      font-size: 22px;
      font-weight: 600;
    }
  }
`;

export const component = css`
  flex: 5;
  background-color: #DED3CA;
`;