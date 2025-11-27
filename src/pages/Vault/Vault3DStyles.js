

import { css } from "@emotion/react";

// 보관함 전체 레이아웃 (3D 뷰 + 상세 정보)
export const vaultLayout = css`
  display: flex;
  gap: 40px;
  min-height: 60vh;
`;

// 3D 뷰 컨테이너
export const vault3DView = css`
  flex: 3; // 3/5 비율
  background-color: #4b382a; 
  border-radius: 10px;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; 
  padding: 0; /* Canvas가 채우도록 패딩 0 */
  position: relative;
  overflow: hidden;

  & > canvas {
    width: 100%;
    height: 100%;
  }
`;

// 상세 정보 패널
export const detailPanel = css`
  flex: 2; 
  padding: 20px;
  background-color: #f5f0eb;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`;

export const detailTitle = css`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #4b382a;
`;

export const detailInfo = css`
  margin-bottom: 20px;
  line-height: 1.6;
  font-size: 1rem;
`;

export const buttonGroup = css`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  gap: 10px;
`;

export const editButton = css`
  background-color: #a68a7d;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #937b6f;
  }
`;

export const deleteButton = css`
  background-color: #d96666;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c05555;
  }
`;

//  마우스 오버 시 표시되는 2D 정보 카드 스타일
export const hoverInfoCard = css`
    position: absolute;
    top: 50%;
    left: 100%; /* 3D 뷰 영역 끝에 위치 */
    transform: translateY(-50%) translateX(20px); 
    width: 250px; 
    padding: 15px;
    background-color: #f9f7f5;
    border: 1px solid #a68a7d;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 100;
    pointer-events: none;
    transition: opacity 0.2s ease;
`;
export const hoverTitle = css`
    font-size: 1.1rem;
    font-weight: 700;
    color: #4b382a;
    margin-bottom: 8px;
`;

export const hoverText = css`
    font-size: 0.9rem;
    color: #6e5c52;
    line-height: 1.4;
`;