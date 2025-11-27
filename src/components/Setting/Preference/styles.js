import { css } from "@emotion/react";

export const container = css`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #CABBAF;
`;

export const header = css`
  padding: 2vh 4.8vw;


  & > p {
    font-size: 1.4vw;
    color: white;
  }
`;

export const body = css`
  display: grid;
  padding: 0 5.7vw;
  grid-template-columns: repeat(7, 1fr);
  gap: 2.1vw;
  justify-items: center;
  margin-top: 3.6vh;
`;

export const toggle = (isSelected) => css`
  width: 7vw;
  height: 7vh;
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
  right: 2.8vw;
  bottom: 2.1vh;
  padding: 0.7vh 1.4vw;
  border-radius: 0.7vw;
  background-color: ${enabled ? "#222" : "transparent"};
  border: none;
  color: ${enabled ? "white" : "transparent"};
`;