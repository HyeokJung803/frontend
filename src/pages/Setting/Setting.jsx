/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";
import Profile from "../../components/Setting/Profile/Profile";
import Signout from "../../components/Setting/Signout/Signout";
import Preference from "../../components/Setting/Preference/Preference";
import Home from "../Home/Home";
import { useNavigate } from "react-router-dom";
import MyPage from "../MyPage/MyPage";


function Setting() {
  const [active, setActive] = useState("profile"); // 기본
  const navigate = useNavigate();

  const renderComponent = () => {
    switch (active) {
      case "home":
        return <Home />;
      case "profile":
        return <Profile />;
      case "myPage":
        return <MyPage />;
      case "preference":
        return <Preference />;
      case "signout":
        return <Signout />;
      default:
        return <Profile />;
    }
  };

  // 홈은 컴포넌트 단위 X, 페이지 자체를 전환
  const homeOnClickHandler = () => {
    setActive("home");
    navigate("/");
  }

  // 마이페이지는 컴포넌트 단위 X, 페이지 자체를 전환
  const mypageOnClickHandler = () => {
    setActive("myPage");
    navigate("/myPage");
  }

  return (
    <div css={s.container}>
      <div css={s.side}>
        <div onClick={homeOnClickHandler}>홈</div>
        <div onClick={() => setActive("profile")}>프로필</div>
        <div onClick={mypageOnClickHandler}>마이페이지</div>
        <div onClick={() => setActive("preference")}>취향 설정 변경</div>
        <div onClick={() => setActive("signout")}>로그아웃</div>
      </div>
      <div css={s.component}>
        {renderComponent()}
      </div>
    </div>
  );
};

export default Setting;