/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom"; 
import React, { useEffect, useState } from "react";
import * as s from "./styles"; 


// --- 1. 기본 레시피 데이터 정의 ---
const DEFAULT_RECIPE = {
    name: "시작 추천: 스윗 베이직",
    description: "산뜻한 하루를 위한 기본적인 베이스 레시피입니다.",
    top: { name: "베르가못", percent: 30, notes: ["베르가못", "민트"] },
    middle: { name: "자스민", percent: 40, notes: ["자스민", "로즈마리"] },
    base: { name: "머스크", percent: 30, notes: ["머스크", "앰버"] },
};


// --- 2. AnimatedText 컴포넌트 ---
function AnimatedText({ text, onDone }) {
  useEffect(() => {
    const timer = setTimeout(() => onDone && onDone(), text.length * 90 + 500);
    return () => clearTimeout(timer);
  }, [text, onDone]);

  return (
    <div>
      {text.split("").map((char, idx) => (
        <span key={idx} css={s.charAnimate(idx)}>
          {char}
        </span>
      ))}
    </div>
  );
}



function PerfumeVisualization({ recipeData }) {
 if (!recipeData) {
  return <p style={{ color: '#495057', textAlign: 'center' }}>레시피 추천받기를 누르면<br/>향수 비율이 시각화됩니다.</p>;
 }

 
 const layers = [
     { name: 'Top Note', percentage: recipeData.top.percent, color: '#F0E68C' }, // 옅은 황금빛 (Khaki)
     { name: 'Middle Note', percentage: recipeData.middle.percent, color: '#C2B280' }, // 부드러운 베이지/골드 (Taupe)
     { name: 'Base Note', percentage: recipeData.base.percent, color: '#6A5A4D' }, // 진한 갈색 (Dark Brown)
 ].filter(layer => layer.percentage > 0);

 const totalHeight = layers.reduce((sum, layer) => sum + layer.percentage, 0);
 const reversedLayers = [...layers].reverse();

 return (
     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
   <h3 style={{ marginBottom: '15px', color: '#212529' }}>{recipeData.name || "AI 추천 레시피"}</h3>
         <div css={s.perfumeBottle}>
                {reversedLayers.map((layer, index) => (
                    <div 
                        key={layer.name} 
                        css={s.liquidLayer(layer.percentage, layer.color)} 
                        style={{ bottom: `${layers.slice(0, layers.length - index - 1).reduce((sum, l) => sum + l.percentage, 0)}%` }}
                        title={`${layer.name}: ${layer.percentage}%`}
                    />
                ))}
            </div>
            <div style={{ marginTop: '20px', fontSize: '0.9rem' }}>
                {layers.map(layer => (
                    <div key={layer.name} style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                        <div style={{ width: '10px', height: '10px', backgroundColor: layer.color, marginRight: '8px' }}></div>
                        {layer.name}: **{layer.percentage}%**
                    </div>
                ))}
            </div>
            {totalHeight < 100 && (
                <p style={{ marginTop: '10px', color: '#6C757D' }}>* 미채움: {100 - totalHeight}%</p>
            )}
        </div>
    );
}


// --- 4. Home 컴포넌트 시작 (Hook 및 함수 정의) ---
export default function Home({ userName = "고객" }) { 

    const navigate = useNavigate(); 
    const welcomeText = `안녕하세요, ${userName}님! 오늘 어떤 향을 찾으시나요?`;
    
    
    const [chatLog, setChatLog] = useState([
        { text: welcomeText, sender: "bot", animatedDone: false },
    ]);
    const [input, setInput] = useState("");
    
    // AI 레시피 창 상태 
    const [recipeInput, setRecipeInput] = useState('');
    const [recipeResultText, setRecipeResultText] = useState(''); 
    const [currentRecipe, setCurrentRecipe] = useState(DEFAULT_RECIPE); 
    
    // 챗봇 애니메이션 완료 핸들러
    const handleAnimatedDone = (idx) => { 
        setChatLog((log) =>
            log.map((msg, i) => (i === idx ? { ...msg, animatedDone: true } : msg))
        );
    };

    // 레시피 추천 및 시각화 로직
    const handleGenerateRecipe = () => {
        // 새 레시피 데이터 생성 (임시)
        const newRecipe = {
            name: "AI 추천: 시트러스 우디",
            description: "가벼우면서도 무게감이 있는 현대적인 조합입니다.",
            top: { name: "자몽, 라임", percent: 25, notes: ["자몽", "라임"] },
            middle: { name: "로즈마리, 민트", percent: 45, notes: ["로즈마리", "민트"] },
            base: { name: "샌달우드, 앰버", percent: 30, notes: ["샌달우드", "앰버"] },
        };
        
        setCurrentRecipe(newRecipe); // 시각화 데이터 업데이트
        setRecipeResultText("AI가 새로운 레시피를 추천했습니다."); // 메시지 업데이트
    };

    // 레시피 저장 및 보관함 이동 로직
    const handleSaveRecipe = () => {
        if (!currentRecipe) {
            alert("저장할 레시피가 없습니다. 레시피 추천을 먼저 받아주세요.");
            return;
        }
        alert(`'${currentRecipe.name}' 레시피를 보관함에 저장했습니다!`);
        navigate("/myPage"); 
    };
    
    // 이미지 구현 로직
    const handleImplementImage = () => {
        alert('향수 이미지 구현은 시각화 창에서 이루어지거나 별도 모달로 구현 예정입니다.');
    };

    // 챗봇 메시지 전송 로직 
    const sendMessage = () => {
        const trimmed = input.trim();
        if (!trimmed) return;
        
        setChatLog((log) => [
            ...log,
            { sender: "user", text: trimmed, animatedDone: true },
        ]);
        setInput("");
        
        // API 호출 
        fetch("http://localhost:8080/api/chat/recommend", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(trimmed),
        })
        .then((response) => response.text())
        .then((data) => {
            setChatLog((log) => [
                ...log,
                {
                    sender: "bot",
                    text: `"${trimmed}" 향수, 정말 좋은 선택입니다! ${data}`,
                    animatedDone: false,
                },
            ]);
        })
        .catch((error) => {
            console.error("Chat API Error:", error);
            setChatLog((log) => [
                ...log,
                { sender: "bot", text: "챗봇 연결에 문제가 발생했습니다.", animatedDone: false },
            ]);
        });
    };

    // 레시피 그리드 렌더링 컴포넌트
    const RecipeDetails = () => {
        if (!currentRecipe) {
             return <p style={{ textAlign: 'center', color: '#6C757D', padding: '50px 0' }}>
                버튼을 눌러 AI에게 새로운 레시피를 추천받으세요.
            </p>;
        }

        return (
            <>
                
                <div css={s.recipeGrid}>
                    <div css={s.recipeKey}>RECIPE NAME</div>
                    <div css={s.recipeValue}>{currentRecipe.name}</div>
                </div>
                
                <div css={s.recipeGrid}>
                    <div css={s.recipeKey}>DESCRIPTION</div>
                    <div css={s.recipeValue}>{currentRecipe.description}</div>
                </div>
                
                {/* 노트별 상세 정보 */}
                <div style={{ padding: '10px 0' }}>
                    <h4 style={{ color: '#495057', fontSize: '1.1rem', marginBottom: '10px' }}>Fragrance Notes</h4>
                    {['top', 'middle', 'base'].map(key => (
                        <div css={s.recipeGrid} key={key} style={{backgroundColor: '#fff', border: 'none', padding: '8px 0'}}>
                            <div css={s.recipeKey}>{key.toUpperCase()} ({currentRecipe[key].percent}%)</div>
                            <div css={s.recipeValue}>{currentRecipe[key].notes.join(', ')}</div>
                        </div>
                    ))}
                </div>

                <p style={{ marginTop: '20px', textAlign: 'center', color: '#A68A7D', fontWeight: 600 }}>
                    레시피가 시각화 창에 업데이트되었습니다. 마음에 드시면 저장하세요!
                </p>
            </>
        );
    };


    // --- 5. JSX 렌더링 시작 ---
   return (
    <div css={s.container}>
      
      {/* 1. 왼쪽 영역: 향수 비율 시각화 창 */}
      <div css={s.visualizationContainer}>
          <PerfumeVisualization recipeData={currentRecipe} />
      </div>

      {/* 2. [Panel 2 - 중앙] AI 레시피 및 이미지 구현 창 */}
      <div css={s.recipeWindowContainer}>
        <h2 style={{ color: '#212529', marginBottom: '25px', fontSize: '1.5rem', fontWeight: 600 }}>
            AI 레시피 생성 및 시뮬레이션
        </h2> 
        
       
        {/* 레시피 결과 출력 창 */}
        <div css={s.recipeResult}>
            <RecipeDetails />
        </div>
        
       
      
        <button 
            css={[s.actionButton(true), { width: '100%', padding: '12px 0' }]} 
            onClick={handleSaveRecipe}
        > 
            레시피 저장하기
        </button>
 {/* 레시피 추천 버튼 */}
        <button css={s.actionButton(true)} onClick={handleGenerateRecipe} style={{marginBottom: '20px'}}>
            레시피 추천받기
        </button>
        
        
      </div>

            {/* 3. [Panel 3 - 오른쪽] 챗봇 창 */}
            <div css={s.largeBox}> 
                <div css={s.chatContainer}>
                    {chatLog.map((msg, idx) =>
                        msg.sender === 'bot' && !msg.animatedDone ? (
                            <div key={idx} css={[s.chatMessage, s.botMsg]}>
                                <AnimatedText text={msg.text} onDone={() => handleAnimatedDone(idx)} />
                            </div>
                        ) : (
                            <div
                                key={idx}
                                css={[s.chatMessage, msg.sender === 'user' ? s.userMsg : s.botMsg]}
                            >
                                {msg.text}
                            </div>
                        )
                    )}
                </div>
                <div css={s.inputArea}>
                    <input
                        css={s.inputField}
                        type="text"
                        placeholder="원하시는 향수를 말씀해 주세요..."
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                sendMessage();
                            }
                        }}
                    />
                    <button css={s.sendButton} onClick={sendMessage}>적용하기</button>
                </div>
            </div>
        </div>
    );
}