import { css } from "@emotion/react";

export const container = css`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #CABBAF;
`;

export const header = css`
  padding: 30px 70px;


  & > p {
    font-size: 20px;
    color: white;
  }
`;

export const body = css`
  display: grid;
  padding: 0 100px;
  grid-template-columns: repeat(8, 1fr);
  gap: 30px;
  justify-items: center;
  margin-top: 50px;
`;

export const toggle = (isSelected) => css`
  width: 7vw;
  height: 11vh;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222;
  color: white;
  cursor: pointer;
  border: ${isSelected
    ? "2px solid #5B8CFF"
    : "2px solid transparent"};

  & > span {
    font-size: 12px;
    margin-top: 5px;
  }
`;

export const nextBtn = (enabled) => css`
  position: absolute;
  right: 40px;
  bottom: 30px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${enabled ? "#222" : "transparent"};
  border: none;
  color: ${enabled ? "white" : "transparent"};
`;