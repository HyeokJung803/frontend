import { css } from "@emotion/react";

export const header = css`
  height: 7.5vh;
  width: 100vw;
  display: flex;
 
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5vw;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    & > ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2vh;


      & > li {
        color: #333;
        cursor: pointer;

        & > a {
          text-decoration: none;
          color: #333;
        }
      }
    }
  }
`;

export const logoContainer = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const logoImage = css`
  width: auto;
  height: 20vh;
`;

export const headerIcon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5vw;
  box-sizing: border-box;

`;

export const loginButton = css`
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: #4b382a;
  padding: 1vh 1vw;
  border: 0.1rem solid #a68a7d;
  border-radius: 2vw;
  user-select: none;
  transition: background-color 0.3s ease, color 0.3s ease;


  &:hover {
    background-color: #a68a7d;
    color: #fcfaf7;
  }
`;

export const signupButton = css`
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: #4b382a;
  padding: 1vh 1vw;
  border: 0.1rem solid #4b382a;
  border-radius: 2vw;
  user-select: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #4b382a;
    color: #fcfaf7;
  }
`;
