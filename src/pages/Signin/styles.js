import { css } from "@emotion/react";

export const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(222, 211, 202, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const modalContainer = css`
  width: 25vw;
  background: linear-gradient(135deg, #fdf6ed 80%, #e3d6c8 100%);
  border-radius: 3vh;
  padding: 3vh 3vw;
  box-shadow: 0 15px 40px rgba(166, 138, 125, 0.25);
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui,
    Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  color: #4b382a;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  user-select: none;
  position: relative;
`;

export const modalTitle = css`
  font-size: 2vw;
  font-weight: 700;
  text-align: center;
  margin: 2vh 0 5vh 0;
  font-style: normal;
  font-family: "Poppins", Arial, sans-serif;
  color: #4b382a;
`;

export const inputFieldLogin = css`
  width: 100%;
  padding: 1.5vh 1.5vw;
  margin-bottom: 1.5vh;
  font-family: "Pretendard", Arial, sans-serif;
  font-size: 1vw;
  color: #2f2620;
  border: 1.8px solid #a48f72;
  border-radius: 1vw;
  background-color: #fbf8f3;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border: 1.5px solid #ad9372;
    background: #fff;
  }
`;

export const modalLoginButton = css`
  background: linear-gradient(90deg, #d6bb97 30%, #b79e7a 100%);
  color: #fff;
  font-family: "Pretendard", Arial, sans-serif;
  font-weight: 600;
  font-size: 1.2vw;
  border: none;
  border-radius: 2vw;
  padding: 1.5vh 0;
  cursor: pointer;
  box-shadow: 0 1px 8px rgba(166, 138, 125, 0.14);
  margin: 3vh 0 1vh 0;
  width: 100%;
  transition: background 0.19s;

  &:hover {
    background: linear-gradient(90deg, #a68a7d 30%, #d1b89c 100%);
  }
`;

export const googleButton = css`
  background-color: #fff;
  border: 1.8px solid #a68a7d;
  border-radius: 2vw;
  padding: 1.5vh 0;
  font-family: "Pretendard", Arial, sans-serif;
  font-weight: 600;
  font-size: 1.2vw;
  color: #4b382a;
  cursor: pointer;
  margin: 1vh 0;
  box-shadow: 0 3px 7px rgba(166, 138, 125, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: background-color 0.3s ease;

  &:hover {
    background: #f9efe2;
    box-shadow: 0 2px 14px rgba(166,138,125,0.18);
  }

  img {
    width: 22px;
    height: 22px;
    margin-right: 2px;
  }
`;

export const googleIcon = css`
  width: 22px;
  height: 22px;
`;

export const signupButton = css`
  background: #fff;
  color: #a68a7d;
  border: 1.5px solid #a68a7d;
  border-radius: 2vw;
  font-family: "Pretendard", Arial, sans-serif;
  font-weight: 600;
  font-size: 1.2vw;
  padding: 1.5vh 0;
  cursor: pointer;
  width: 100%;
  margin: 1vh 0;
  transition: background 0.19s, color 0.19s;

  &:hover {
    background: #fcfaf7;
    color: #4b382a;
    border-color: #ad9372;
  }
`;
