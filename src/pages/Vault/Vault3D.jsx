// [Vault3D.jsx] 파일 전체 내용 (최종 오류 해결)

/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from './Vault3DStyles';
import CanvasWrapper from "../../components/CanvasWrapper"; // 경로 확인

// 임시 레시피 데이터
const mockRecipes = [
  { id: 1, name: '센슈얼 로즈', top: '베르가못 30%', middle: '로즈 50%', base: '샌달우드 20%', description: '우아함과 강렬함이 조화된 장미 향' },
  { id: 2, name: '청량한 시트러스', top: '레몬 50%', middle: '민트 20%', base: '앰버 30%', description: '상쾌한 여름날의 아침을 담은 향' },
  { id: 3, name: '깊은 우디 노트', top: '라벤더 10%', middle: '베티버 40%', base: '오크모스 50%', description: '고요한 숲속의 신비롭고 차분한 향' },
];



export default function Vault3D() {
  // 호버 및 Active View를 위한 상태 정의
  const [selectedRecipe, setSelectedRecipe] = useState(mockRecipes[0]);
  const [hoveredRecipe, setHoveredRecipe] = useState(null); 
  const [isHoverPanelOpen, setIsHoverPanelOpen] = useState(false);


  // Active/Hover View 로직 통합
  const handlePerfumeSelect = (id, isHovering = false) => {
    const recipe = mockRecipes.find(r => r.id === id);
    
    if (isHovering) {
        setHoveredRecipe(recipe);
        setIsHoverPanelOpen(true);
    } else {
        setIsHoverPanelOpen(false);
        // 클릭 (호버가 아닐 때) 시에만 selectedRecipe 업데이트
        if (id === selectedRecipe?.id) {
            // 같은 병을 다시 클릭하면 Active View 해제 (null)
            setSelectedRecipe(null);
        } else {
            setSelectedRecipe(recipe);
        }
    }
  };
  
  // Active View 해제 로직 (보관함으로 돌아가기 버튼용)
  const handleDeactivate = () => {
    setSelectedRecipe(null);
    setIsHoverPanelOpen(false);
  };


  const handleEdit = () => {
    alert(`'${selectedRecipe.name}' 레시피 수정 모달/페이지 호출 (구현 예정)`);
  };

  const handleDelete = () => {
    if (window.confirm(`정말 '${selectedRecipe.name}' 레시피를 보관함에서 삭제하시겠습니까?`)) {
      alert(`'${selectedRecipe.name}' 레시피 삭제 완료 (실제 삭제 로직 구현 필요)`);
      setSelectedRecipe(null); 
    }
  };

  
  return (
    <>
      <h2 style={{ color: '#4b382a', marginBottom: '25px', borderBottom: '2px solid #a68a7d', paddingBottom: '10px' }}>
        AI 추천 레시피 보관함 ({mockRecipes.length}개 보관 중)
      </h2>

      <div css={s.vaultLayout}>
        
        {/* 1. 3D 보관함 뷰 영역 (왼쪽) */}
        <div css={s.vault3DView} style={{ padding: 0, position: 'relative' }}>
            
            {/*  Active View 해제 버튼 렌더링 조건 추가 */}
            {selectedRecipe && (
                <button 
                    onClick={handleDeactivate}
                    style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1000, padding: '8px', cursor: 'pointer' }}
                >
                    ← 돌아가기
                </button>
            )}

            <CanvasWrapper 
                recipes={mockRecipes} 
                onSelectPerfume={handlePerfumeSelect} 
                selectedId={selectedRecipe?.id}
            />
            
            {/* 2D 호버 정보 카드 */}
            {isHoverPanelOpen && hoveredRecipe && (
                <div css={s.hoverInfoCard}> 
                    <h4 css={s.hoverTitle}>{hoveredRecipe.name}</h4>
                    <p css={s.hoverText}>설명: {hoveredRecipe.description}</p>
                    <p css={s.hoverText}>Top: {hoveredRecipe.top}</p>
                </div>
            )}
        </div>

        {/* 2. 상세 정보 패널 (오른쪽) */}
        <div css={s.detailPanel}>
          {selectedRecipe ? (
            <>
              <h3 css={s.detailTitle}>{selectedRecipe.name}</h3>
              <div css={s.detailInfo}>
                <p><strong>설명:</strong> {selectedRecipe.description}</p>
                <p><strong>Top Note:</strong> {selectedRecipe.top}</p>
                <p><strong>Middle Note:</strong> {selectedRecipe.middle}</p>
                <p><strong>Base Note:</strong> {selectedRecipe.base}</p>
              </div>
              <div css={s.buttonGroup}>
                <button css={s.editButton} onClick={handleEdit}>
                  레시피 수정하기
                </button>
                <button css={s.deleteButton} onClick={handleDelete}>
                  삭제하기
                </button>
              </div>
            </>
          ) : (
            <p>보관함에서 향수를 선택해 주세요.</p>
          )}
        </div>
      </div>
    </>
  );
}