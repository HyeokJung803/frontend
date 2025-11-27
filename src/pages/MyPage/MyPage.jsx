/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from "./styles";   // MyPage 스타일
import Vault3D from '../Vault/Vault3D';// 2단계에서 구현할 보관함 컴포넌트

// 임시 설정 컴포넌트
function Settings() {
  return (
    <div>
      <h2 style={{ color: '#4b382a', marginBottom: '20px' }}>설정</h2>
      <p style={{ lineHeight: '1.6' }}>
        사용자 정보 수정, 비밀번호 변경, 알림 설정 등 마이페이지 설정 기능이 여기에 들어갑니다. (구현 예정)
      </p>
    </div>
  );
}

export default function MyPage() {
  // 'vault' (보관함) 또는 'settings' (설정) 탭 상태 관리
  const [activeTab, setActiveTab] = useState('vault');

  return (
    <div css={s.pageContainer}>
      {/* 1. 사이드바 (메뉴) */}
      <div css={s.sidebar}>
        <div css={s.menuTitle}>마이페이지</div>
        <ul>
          <li
            css={s.menuItem(activeTab === 'vault')}
            onClick={() => setActiveTab('vault')}
          >
            보관함
          </li>
          <li
            css={s.menuItem(activeTab === 'settings')}
            onClick={() => setActiveTab('settings')}
          >
            설정
          </li>
        </ul>
      </div>

      {/* 2. 메인 컨텐츠 영역 */}
      <div css={s.contentArea}>
        {activeTab === 'vault' && <Vault3D />}
        {activeTab === 'settings' && <Settings />}
      </div>
    </div>
  );
}