/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { GiPowerButton } from "react-icons/gi";
import auriaLogo from "../../../assets/auria_logo.png";
import Signin from "@/pages/Signin/Signin";
import Signup from "@/pages/Signup/Signup";

function Header() {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const onClickNavHandler = (path) => {
    navigate(path);
  };

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  const openSignupModal = () => setIsSignupOpen(true);
  const closeSignupModal = () => setIsSignupOpen(false);

  // 로그인 팝업에서 회원가입 팝업으로 전환 함수
  const handleOpenSignupFromLogin = () => {
    closeLoginModal();
    openSignupModal();
  };

  return (
    <div css={s.header}>
      <div css={s.logoContainer} onClick={() => onClickNavHandler("/")}>
        <img src={auriaLogo} alt="Auria Logo" css={s.logoImage} />
      </div>
      <div>
        <ul>
          <li css={s.headerIcon} onClick={() => onClickNavHandler("/myPage")}>
            <IoMdPerson />
          </li>
          <li css={s.headerIcon} onClick={() => onClickNavHandler("/setting")}>
            <IoSettings />
          </li>
          <li css={s.headerIcon} onClick={() => onClickNavHandler("/test")}>
            <GiPowerButton />
          </li>
          <li css={s.loginButton} onClick={openLoginModal}>
            로그인
          </li>
          <li css={s.signupButton} onClick={openSignupModal}>
            회원가입
          </li>
        </ul>
      </div>
      {isLoginOpen && (
        <Signin
          isOpen={isLoginOpen}
          onClose={closeLoginModal}
          goToSignup={handleOpenSignupFromLogin}
        />
      )}
      {isSignupOpen && <Signup isOpen={isSignupOpen} onClose={closeSignupModal} />}
    </div>
  );
}

export default Header;
