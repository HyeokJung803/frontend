/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import * as s from "./styles";

function Test() {
    const navigate = useNavigate();
  
    const onClickNavHandler = (path) => {
      navigate(path);
    };

  return (
    <div css={s.container}>
      <button
        css={s.button}
        onClick={() => onClickNavHandler("/detail")}
      >
        추천 향수를 선택했을 때 상세 화면으로 넘어갑니다.
      </button>
      <button 
        css={s.button}
        onClick={() => onClickNavHandler("/recommendation")}
      >
        제미나이와 대화 후 향수 추천하는 화면으로 넘어갑니다. 
      </button>
      <button 
        css={s.button}
        onClick={() => onClickNavHandler("/preference")}
      >
        회원 가입 후 선호 향 선택 화면으로 넘어갑니다.
      </button>
      <button
        css={s.button}
        onClick={() => onClickNavHandler("/signin")}
      >
        로그인 화면으로 넘어갑니다.
      </button>
      <button
        css={s.button}
        onClick={() => onClickNavHandler("/signup")}
      >
        회원가입 화면으로 넘어갑니다.  
      </button>
    </div>
  );
}

export default Test;