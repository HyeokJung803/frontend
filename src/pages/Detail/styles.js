import { css } from "@emotion/react";

export const container = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  
`;

export const header = css`
  width: 100vw;
  height: 7vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5vh;
  border-bottom: 1px solid #CABBAF;
  box-sizing: border-box;
  

  & > button:nth-of-type(1) {
    display: flex;
    background-color: transparent;
    color: black;
    font-size: 2.8vmin;
    font-weight: 'bold';
    border: none;
    outline: none;
    cursor: pointer;
  }

  & > button:nth-of-type(2) {
    display: flex;
    background-color: #978E8E;
    color: white;
    font-size: 1.6vmin;
    font-weight: 500;
    padding: 0.58vw 0.9vw;
    border-radius: 1vmin;
    border: none;
    outline: none;
    cursor: pointer;
        

  };

  & > p {
    font-family: cursive;
    font-size: 2.5vmin;
    font-weight: bold;
    
  };
`;

export const body = css`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0 9vh;
  
`;

export const perfume = css`
  flex: 2;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  // 향수병 그림
  & > div:nth-of-type(1) {
    position: absolute;
    left: 0;
    background-color: white;
    padding: 13.5vw;
    border-radius: 50%;
    z-index: 1;
  };

  & > div:nth-of-type(2) {
    position: absolute;
    background-color: #DED3CA;
    right: 5vw;
    padding: 1.9vw 3vw;
    border-left:  0.2vw solid #000;
    z-index: 2;


    & > div {
      padding: 2vh 0 4.63vh 0;      
      font-family: 'Times New Roman', Times, serif;
      font-size: 2.3rem;
      font-weight: bold;

    }

    & > ul {
      overflow: hidden;

      & > li {
        & > strong {
          font-size: 1.1rem;

        }
        & > p {
          font-size: 0.8rem;
          margin: 0.5vh 0 3vh 0;

        }
      }
    }
  };
`;

export const chatbot = css`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > div {
    background-color: white;
    padding: 28vh 12vw;
    border-radius: 2rem;

  };
`;
