// styles.js
import { css } from "@emotion/react";

export const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(222, 211, 202, 0.88);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const modalContainer = css`
  width: 30vw;
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

export const stepCounter = css`
  position: absolute;
  top: 16px;
  left: 20px;
  font-size: 0.9rem;
  font-family: "Pretendard", sans-serif;
  color: #7e6c56;
  user-select: none;
  font-weight: 500;
`;

export const closeButton = css`
  position: absolute;
  top: 16px;
  right: 20px;
  font-size: 2.5vw;
  line-height: 1;
  font-weight: 900;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #4b382a;
  user-select: none;
  transition: color 0.2s;

  &:hover {
    color: #9f8550;
  }
`;

export const modalLogo = css`
  position: absolute;
  top: 14px;
  right: 56px;
  width: 36px;
  height: 36px;
  object-fit: contain;
  cursor: pointer;
`;

export const modalTitle = css`
  font-size: 2vw;
  font-weight: 700;
  text-align: center;
  margin: 5vh 0;
  font-style: normal;
  font-family: "Poppins", Arial, sans-serif;
  color: #4b382a;
`;

export const inputUser = css`
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
    border-color: #8c7b5b;
    background-color: #fff;
  }
`;

export const errorText = css`
  color: #b54242;
  font-size: 0.8vw;
  margin: -0.7vh 0 2.5vh 1vw;
  font-family: "Pretendard", Arial, sans-serif;
`;

export const genderAgeContainer = css`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

export const radioGroup = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const radioLabel = css`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-family: "Poppins", Arial, sans-serif;
  color: #4b382a;
`;

export const radioLabelOption = css`
  font-family: "Pretendard", Arial, sans-serif;
  font-size: 1rem;
  color: #4b382a;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const radioInput = css`
  cursor: pointer;
`;

export const ageGroup = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const selectInput = css`
  padding: 0.7rem 1.3rem;
  border-radius: 14px;
  border: 1.8px solid #a48f72;
  font-size: 1rem;
  font-family: "Pretendard", Arial, sans-serif;
  outline: none;
  color: #4b382a;
  cursor: pointer;
  background-color: #fbf8f3;
  box-sizing: border-box;
`;

export const perfumeQuestion = css`
  margin-bottom: 2rem;
`;

export const questionTitle = css`
  margin-bottom: 0.6rem;
  font-weight: 600;
  font-size: 1.2rem;
  font-family: "Pretendard", Arial, sans-serif;
  color: #4b382a;
  font-style: normal;
`;

export const questionDescription = css`
  margin-bottom: 1.2rem;
  font-size: 1rem;
  color: #665a4e;
  font-family: "Pretendard", Arial, sans-serif;
`;

export const optionsContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const checkbox = css`
  appearance: none;
  width: 1.6vw;
  height: 2.5vh;
  border: 1.6px solid #a68a7d;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.25s;

  &:checked {
    background-color: #a68a7d;
    border-color: #8a7b65;
  }
`;

export const optionLabel = css`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: "Pretendard", Arial, sans-serif;
  font-size: 1.05rem;
  cursor: pointer;
  user-select: none;
  padding: 0.45rem 0.9rem;
  border-radius: 20px;
  border: 1.5px solid transparent;
  transition: background-color 0.3s ease;
  color: #4b382a;
  font-style: normal;
`;

export const optionLabelSelected = css`
  ${optionLabel};
  background-color: #d7c9b6;
  border-color: #a68a7d;
  font-weight: 700;
`;

export const buttonGroup = css`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const prevButton = css`
  background-color: #f4efe4;
  border: 1.8px solid #a68a7d;
  border-radius: 30px;
  font-family: "Poppins", Arial, sans-serif;
  font-weight: 700;
  color: #4b382a;
  padding: 0.85rem 2.4rem;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
  user-select: none;

  &:hover {
    background-color: #e6dccd;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const nextButton = css`
  background: linear-gradient(90deg, #a68a7d 30%, #d1b89c 100%);
  color: #fcfaf7;
  font-family: "Poppins", Arial, sans-serif;
  font-weight: 700;
  font-size: 1vw;
  padding: 1.5vh 1.5vw;
  cursor: pointer;
  border: none;
  border-radius: 28px;
  transition: background-color 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #927d5f 30%, #bba78c 100%);
  }
`;

export const submitButton = css`
  background-color: #a68a7d;
  font-family: "Poppins", Arial, sans-serif;
  font-weight: 700;
  color: #fcfaf7;
  font-size: 1.4rem;
  padding: 0.93rem 0;
  border: none;
  border-radius: 28px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #9f8c67;
  }
`;

export const googleLoginButton = css`
  background-color: #fff;
  border: 1.8px solid #a68a7d;
  border-radius: 2vw;
  padding: 1.5vh 0;
  font-family: "Pretendard", Arial, sans-serif;
  font-weight: 600;
  font-size: 1.2vw;
  color: #4b382a;
  cursor: pointer;
  margin-top: 1vh;
  box-shadow: 0 3px 7px rgba(166, 138, 125, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f8f3e8;
  }

  img {
    width: 22px;
    height: 22px;
  }
`;

export const googleIcon = css`
  width: 22px;
  height: 22px;
`;

export const summaryContainer = css`
  margin-top: 1.6rem;
  max-height: 38vh;
  overflow-y: auto;
  background: #fcf7ed;
  border: 1.5px solid #e1dbc7;
  border-radius: 22px;
  box-shadow: rgba(200, 170, 130, 0.12) 0px 4px 16px;
  padding: 1.4rem 1.7rem 1.4rem 1.7rem;
  font-family: 'Gowun Dodum', 'Pretendard', Arial, sans-serif;
  font-size: 1.16rem;
  color: #5c4c3a;
  line-height: 1.7;
  white-space: pre-wrap;
  position: relative;

  &::-webkit-scrollbar {
    width: 0.9vw;
    background: #fdf5e6;
    border-radius: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ead7bc;
    border-radius: 15px;
    border: 2px solid #fdf5e6;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ddc5ad;
  }
`;

export const summaryTitle = css`
  font-family: 'Gaegu', Arial, cursive, sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #6e5a41;
  text-align: center;
  margin-bottom: 1.1rem;
  letter-spacing: 0.04em;
  user-select: none;
  border-bottom: 1.7px dashed #e1dbc7;
  padding-bottom: 0.1em;
`;

export const summaryText = css`
  font-family: 'Gowun Dodum', 'Pretendard', Arial, sans-serif;
  font-size: 1.15rem;
  color: #604b34;
  line-height: 2;
  background: none;
  margin-top: 0.6rem;
  text-shadow: 0 1.5px 0.5px #f4edd9;
  white-space: pre-wrap;
`;
