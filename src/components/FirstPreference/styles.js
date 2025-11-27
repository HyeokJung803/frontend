import { css } from "@emotion/react";

export const container = css`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const header = css`
  padding: 2vh 5vw;
  background-color: #CABBAF;

  & > p {
    font-size: 1.4vw;
    color: white;
  }
`;

export const body = css`
  display: grid;
  padding: 0 7vw;
  grid-template-columns: repeat(8, 1fr);
  gap: 3vw;
  justify-items: center;
  margin-top: 4vh;
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
    font-size: 0.9vw;
    margin-top: 0.5vh;
  }
`;

export const nextBtn = (enabled) => css`
  position: absolute;
  right: 2.8vw;
  bottom: 2vh;
  padding: 0.7vh 1.4vw;
  border-radius: 0.7vw;
  background-color: ${enabled ? "#222" : "transparent"};
  border: none;
  color: ${enabled ? "white" : "transparent"};
`;