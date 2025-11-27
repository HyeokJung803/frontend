import { keyframes, css } from "@emotion/react";




/* Fade-in-up 애니메이션 */
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(0.9vh);}
  100% { opacity: 1; transform: translateY(0);}
`;

/* 전체 컨테이너 */
export const container = css` 
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px; 
  width: auto; 
  max-width: 1800px;
  height: calc(100vh - 60px); 
  box-sizing: border-box;
  padding: 30px 40px; 
  margin: 0 auto;
  background-color: #F8F9FA;
  font-family: "Pretendard", sans-serif;
  color: #212529;
`;

/*  비율 시각화 창 (맨 왼쪽) */
export const visualizationContainer = css`
  flex: 2; /* 2/7 비율 */
  min-width: 280px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.08);
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center; /* 향수병 중앙 정렬 */
  justify-content: center;
  margin-left: 30px;
`;

/* AI 레시피 창 컨테이너 (중앙 영역) */
export const recipeWindowContainer = css`
  flex: 3; /* 3/7 비율 (가장 넓게) */
  min-width: 420px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.08);
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
// export const box_left_box = css`
//     display: flex;
//     flex-direction: row;
//     flex-grow: 1;
//     padding: 20px;
//     max-width: 65vw;
//     margin: 20px auto;
//     background-color: #fff;
//     border-radius: 10px;
//     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
// `

// export const box_header = css`
//     display: flex;
//     align-items: center;
//     padding: 12px 15px;
//     border-bottom: 1px solid #eee;
//     background-color: #f9f9f9;
// `
// export const dropdown = css`
//    border: 1px solid #ccc;
//     padding: 6px 10px;
//     border-radius: 5px;
//     font-size: 0.9em;
//     background-color: #fff;
//     -webkit-appearance: none; /* Remove default arrow */
//     -moz-appearance: none;
//     appearance: none;
//     background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-6.5%200-12.3%203.2-16.1%208.1-3.8%204.9-4.7%2011.6-2.5%2017.6l139%20170.8c5.4%206.5%2014.2%206.5%2019.5%200l139-170.8c2.2-6-1.5-12.7-7.9-17.6z%22%2F%3E%3C%2Fsvg%3E');
//     background-repeat: no-repeat;
//     background-position: right 8px center;
//     background-size: 12px;
//     padding-right: 25px;
//     margin-right: 10px;
// `

export const leftbox = css`
  display: flex;
  width: 65vw;
  height: 100vh;
  margin-right: 2vw;
  margin-left: 5vw;
  
  border-radius: 1.5vw;
`

export const image_box = css`
  display: flex;
  width: 42%;
  height: 83vh;
  border-radius: 1.5vw;
  border: 1.5px solid #a68a7d;
 
`

export const recipe_box = css`
  display: flex;
  width: 42%;
  height: 83vh;
  margin-left: 6vw;
  border-radius: 1.5vw;
  border: 1.5px solid #a68a7d;
`

/* 애니메이션 공통 */
const boxAppear = css`
  opacity: 0;
  animation-name: ${fadeInUp};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
`;

export const perfumeBottle = css`
  width: 100px;
  height: 250px;
  border: 4px solid #495057;
  border-radius: 10px 10px 50px 50px; /* 뚜껑 모양을 위해 상단 덜 둥글게, 하단 많이 둥글게 */
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

export const liquidLayer = (height, color) => css`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${color};
  height: ${height}%; /* 퍼센트 높이로 채움 */
  transition: height 0.8s ease-out;
  border-top: 1px solid rgba(255, 255, 255, 0.5); /* 레이어 경계선 */
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
`;




export const largeBox = css`
  flex: 2;
  /* border: 1.5px solid #a68a7d; */
  margin-right: 2vw;
  /* background: #fcfaf7;  */
  min-width: 300px;
  border-radius: 1.5vw;
  height: 100%;
  width: 30vw;
  box-sizing: border-box;
  padding: 5vh 3vw;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 0 15px #fffefc, 0 0 18px 2px rgba(166, 138, 125, 0.3);
  position: relative;
`;

/* 글자 순차 등장 */
export const charAnimate = (index) => css`
  opacity: 0;
  display: inline-block;
  animation-name: ${fadeInUp};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  animation-delay: ${index * 0.09}s;
`;

export const chatContainer = css`
  flex: 1;
  overflow-y: auto;
  padding: 1vh 0;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

export const chatMessage = css`
  max-width: 70%;
  padding: 1.8vh 1.5vw;
  border-radius: 20px;
  font-family: "Georgia", serif;
  font-size: 2vh;
  line-height: 1.5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  word-break: break-word;
`;

export const userMsg = css`
  align-self: flex-end;
  background-color: #ffeaa7;
  color: #6a4f4b;
  border-bottom-right-radius: 0;
`;

export const botMsg = css`
  align-self: flex-start;
  background-color: #f1e6d0;
  color: #4b382a;
  border-bottom-left-radius: 0;
`;

export const inputArea = css`
  position: sticky;
  bottom: 0;
  display: flex;
  gap: 1vh;
  padding: 2vh 0;
  background-color: #fcfaf7;
  border-top: 0.1rem solid #a68a7d;
  box-sizing: border-box;
  width: 100%;
  margin-top: auto;
  z-index: 10;
`;

export const inputField = css`
  flex: 1;
  padding: 1.8vh 1.5vw;
  font-size: 1vw;
  border: 0.1rem solid #a68a7d;
  border-radius: 1.8vw 0 0 1.8vw;
  outline: none;
  font-family: "Didot", serif;
  color: #3d2c2f;

  &:focus {
    border-color: #9f8550;
  }
`;

export const sendButton = css`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a68a7d;
  border: none;
  border-radius: 0 1.8vw 1.8vw 0;
  color: #fcfaf7;
  font-family: "Didot", serif;
  font-weight: 600;
  font-size: 1vw;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9f8550;
  }
`;

export const popup_overlay = css`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 90vh;
 
  background-color: rgba(0,0,0,0.4);

  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: red;
  
`

export const recipeResult = css`
  flex-grow: 1;
  width: 100%;
  background-color: #ffffff; 
  padding: 0;
  font-size: 1.1rem;
  color: #212529;
  overflow-y: auto;
  box-sizing: border-box;
  margin-bottom: 20px; 
  line-height: 1.5;
`;

export const buttonPairContainer = css`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  margin-bottom: 20px; 
`;


export const actionButton = (isPrimary) => css`
  flex-shrink: 0;
  flex: 1;
  min-width: 0;
  
  background-color: ${isPrimary ? "#c9aa9dff" : "#F1F3F5"}; 
  color: ${isPrimary ? "white" : "#495057"}; 
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 1px 8px rgba(166, 138, 125, 0.14);
  transition: all 0.2s;
  margin-bottom: 1vh;

 &:hover {
    background-color: ${isPrimary ? "#937b6f" : "#E9ECEF"};
  }
`;

// export const main_three_col_wrap = css`
//    display: flex;
//   width: 100vw;
//   height: 100vh;
//   /* background: #eaf4f4; */
//   background-color: red;
// `




