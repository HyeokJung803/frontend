import { css } from "@emotion/react";

// 전체 페이지 컨테이너 스타일 (Header.jsx의 높이 60px 가정)
export const pageContainer = css`
  min-height: calc(100vh - 60px);
  padding: 30px 5vw;
  background-color: #fcfaf7; /* 밝은 베이지 배경 */
  color: #4b382a; /* 진한 갈색 텍스트 */
  display: flex;
  gap: 30px;
  font-family: "Pretendard", sans-serif;
`;

// 사이드바 컨테이너 (메뉴)
export const sidebar = css`
  width: 250px;
  min-width: 200px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(166, 138, 125, 0.1);
  padding: 20px 0;
  box-sizing: border-box;
  flex-shrink: 0;
`;

// 메뉴 제목
export const menuTitle = css`
  font-size: 1.4rem;
  font-weight: 700;
  padding: 15px 30px 10px;
  color: #a68a7d;
  border-bottom: 1px solid #e7e0d9;
  margin-bottom: 10px;
`;

// 메뉴 항목
export const menuItem = (isActive) => css`
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 500;
  list-style: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${isActive ? "#4b382a" : "#7d6f66"};
  background-color: ${isActive ? "#e7e0d9" : "transparent"};
  border-left: 5px solid ${isActive ? "#a68a7d" : "transparent"};

  &:hover {
    background-color: #f5f0eb;
    color: #4b382a;
  }
`;

// 메인 컨텐츠 영역
export const contentArea = css`
  flex: 1;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(166, 138, 125, 0.1);
  padding: 30px;
  box-sizing: border-box;
`;

// 폼 섹션 스타일
export const formSection = css`
  margin-bottom: 40px;
  padding: 20px 0;
  border-bottom: 1px solid #e7e0d9;
`;

// 섹션 제목
export const sectionTitle = css`
  font-size: 1.8rem;
  font-weight: 600;
  color: #4b382a;
  margin-bottom: 20px;
`;

// 입력 필드 스타일 (Signin.jsx의 inputFieldLogin 스타일 참조)
export const inputFieldSettings = css`
  width: 100%;
  max-width: 400px;
  padding: 10px 15px;
  margin-bottom: 15px;
  font-family: "Pretendard", Arial, sans-serif;
  font-size: 1rem;
  color: #2f2620;
  border: 1.8px solid #a48f72;
  border-radius: 8px;
  background-color: #fbf8f3;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #ad9372;
    background: #fff;
  }
`;

// 버튼 스타일 (Signin.jsx의 modalLoginButton 스타일 참조)
export const actionButtonSettings = css`
  background-color: #a68a7d;
  color: #fff;
  font-family: "Pretendard", Arial, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 0 1px 8px rgba(166, 138, 125, 0.14);
  margin-top: 10px;
  transition: background 0.19s;

  &:hover {
    background-color: #937b6f;
  }
`;

// 프로필 이미지 컨테이너
export const profileImgContainer = css`
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 20px;
`;

// 프로필 이미지 (임시)
export const profileImage = css`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #a68a7d;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;