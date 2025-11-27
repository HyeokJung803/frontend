/** @jsxImportSource @emotion/react */
import * as s from "./styles";

export default function Signin({ isOpen, onClose, goToSignup }) {
  if (!isOpen) return null;

  const handleGoogleLogin = () => {
    alert("구글 로그인 실행 (구현 필요)");
    onClose();
  };

  const handleLogin = () => {
    alert("로그인 버튼 클릭 (구현 필요)");
    onClose();
  };

  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div css={s.modalOverlay} onClick={onOverlayClick}>
      <div css={s.modalContainer}>
        <h2 css={s.modalTitle}>로그인</h2>
        <input type="text" placeholder="아이디" css={s.inputFieldLogin} />
        <input type="password" placeholder="비밀번호" css={s.inputFieldLogin} />
        <button css={s.modalLoginButton} onClick={handleLogin}>
          로그인
        </button>
        <button css={s.googleButton} onClick={handleGoogleLogin}>
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            css={s.googleIcon}
          />
          구글 로그인
        </button>
        <button css={s.signupButton} onClick={() => {
            onClose();
            goToSignup();
          }}>
          회원가입
        </button>
      </div>
    </div>
  );
}
