/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom"; 
import React, { useEffect, useState } from "react";
import * as s from "./styles"; 
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

// AnimatedText 컴포넌트
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

// 향수 시각화 컴포넌트
function PerfumeVisualization({ recipeData }) {
  if (!recipeData) {
    return <p style={{ color: '#495057', textAlign: 'center' }}>레시피 추천받기를 누르면<br/>향수 비율이 시각화됩니다.</p>;
  }

  const layers = [
    { name: 'Top Note', percentage: recipeData.top.percent, color: '#F0E68C' },
    { name: 'Middle Note', percentage: recipeData.middle.percent, color: '#C2B280' },
    { name: 'Base Note', percentage: recipeData.base.percent, color: '#6A5A4D' },
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
            {layer.name}: {layer.percentage}%
          </div>
        ))}
      </div>
      {totalHeight < 100 && (
        <p style={{ marginTop: '10px', color: '#6C757D' }}>* 미채움: {100 - totalHeight}%</p>
      )}
    </div>
  );
}

// 레시피 파싱 함수
function parseRecipeText(text) {
  const topMatch = text.match(/Top Note[:\s]*\(?(\d+)[-~]?(\d+)?%?\)?/i);
  const middleMatch = text.match(/Middle Note[:\s]*\(?(\d+)[-~]?(\d+)?%?\)?/i);
  const baseMatch = text.match(/Base Note[:\s]*\(?(\d+)[-~]?(\d+)?%?\)?/i);

  const topPercent = topMatch ? parseInt(topMatch[1]) : 30;
  const middlePercent = middleMatch ? parseInt(middleMatch[1]) : 40;
  const basePercent = baseMatch ? parseInt(baseMatch[1]) : 30;

  const topNotes = text.match(/Top Note[^:]*:\s*([^\n]+)/i)?.[1] || "베르가못, 레몬";
  const middleNotes = text.match(/Middle Note[^:]*:\s*([^\n]+)/i)?.[1] || "자스민, 로즈";
  const baseNotes = text.match(/Base Note[^:]*:\s*([^\n]+)/i)?.[1] || "샌달우드, 머스크";

  return {
    name: text.match(/향수 이름[:\s]*([^\n]+)/i)?.[1] || "AI 추천 향수",
    description: text.match(/향의 특징[:\s]*([^\n]+)/i)?.[1] || "",
    top: { name: topNotes, percent: topPercent, notes: topNotes.split(',').map(n => n.trim()) },
    middle: { name: middleNotes, percent: middlePercent, notes: middleNotes.split(',').map(n => n.trim()) },
    base: { name: baseNotes, percent: basePercent, notes: baseNotes.split(',').map(n => n.trim()) },
  };
}

export default function Home({ userName = "고객" }) { 
  const navigate = useNavigate(); 
  const welcomeText = `안녕하세요, ${userName}님! 오늘 어떤 향을 찾으시나요?`;
  
  const [chatLog, setChatLog] = useState([
    { text: welcomeText, sender: "bot", animatedDone: false },
  ]);
  const [input, setInput] = useState("");
  const [currentRecipe, setCurrentRecipe] = useState(null); 
  const [recipeResultText, setRecipeResultText] = useState('');
  const [currentImageUrl, setCurrentImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAnimatedDone = (idx) => { 
    setChatLog((log) =>
      log.map((msg, i) => (i === idx ? { ...msg, animatedDone: true } : msg))
    );
  };

  const handleGenerateRecipe = async () => {
    setIsLoading(true);
    try {
      const userMessages = chatLog
        .filter(msg => msg.sender === 'user')
        .map(msg => ({ role: 'user', content: msg.text }));

      const lastMessage = userMessages[userMessages.length - 1]?.content || "상쾌하고 청량한 향수를 추천해주세요";

      const response = await axios.post(`${API_BASE_URL}/api/perfume/recipe`, {
        userMessage: lastMessage,
        chatHistory: userMessages
      });

      if (response.data.success) {
        const parsedRecipe = parseRecipeText(response.data.recipe);
        setCurrentRecipe(parsedRecipe);
        setRecipeResultText(response.data.recipe);
        
        setChatLog(log => [
          ...log,
          { sender: 'bot', text: `새로운 레시피를 생성했습니다: "${parsedRecipe.name}"`, animatedDone: false }
        ]);
      }
    } catch (error) {
      console.error('레시피 생성 오류:', error);
      alert('레시피 생성 중 오류가 발생했습니다. 백엔드 서버가 실행 중인지 확인해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateImage = async () => {
    if (!currentRecipe) {
      alert('먼저 레시피를 생성해주세요.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/perfume/image-prompt`, {
        recipe: recipeResultText
      });

      if (response.data.success) {
        const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(response.data.imagePrompt)}?width=512&height=512&nologo=true`;
        setCurrentImageUrl(imageUrl);
        
        setChatLog(log => [
          ...log,
          { sender: 'bot', text: '향수 이미지가 생성되었습니다!', animatedDone: false }
        ]);
      }
    } catch (error) {
      console.error('이미지 생성 오류:', error);
      alert('이미지 생성 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveRecipe = () => {
    if (!currentRecipe) {
      alert("저장할 레시피가 없습니다.");
      return;
    }
    alert(`'${currentRecipe.name}' 레시피를 보관함에 저장했습니다!`);
    navigate("/myPage"); 
  };

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    
    setChatLog((log) => [
      ...log,
      { sender: "user", text: trimmed, animatedDone: true },
    ]);
    setInput("");
    
    try {
      const response = await axios.post(`${API_BASE_URL}/api/chat/recommend`, trimmed, {
        headers: { 'Content-Type': 'application/json' }
      });
      
      setChatLog((log) => [
        ...log,
        {
          sender: "bot",
          text: response.data,
          animatedDone: false,
        },
      ]);
    } catch (error) {
      console.error("Chat API Error:", error);
      setChatLog((log) => [
        ...log,
        { sender: "bot", text: "챗봇 연결에 문제가 발생했습니다.", animatedDone: false },
      ]);
    }
  };

  const RecipeDetails = () => {
    if (!recipeResultText) {
      return <p style={{ textAlign: 'center', color: '#6C757D', padding: '50px 0' }}>
        버튼을 눌러 AI에게 새로운 레시피를 추천받으세요.
      </p>;
    }

    return (
      <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8' }}>
        {recipeResultText}
      </div>
    );
  };

  return (
    <div css={s.container}>
      
      <div css={s.visualizationContainer}>
        <PerfumeVisualization recipeData={currentRecipe} />
        
        {currentImageUrl && (
          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <h4 style={{ marginBottom: '10px', color: '#212529' }}>향수 이미지</h4>
            <img 
              src={currentImageUrl} 
              alt="AI 생성 향수 이미지" 
              style={{ maxWidth: '100%', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
          </div>
        )}
      </div>

      <div css={s.recipeWindowContainer}>
        <h2 style={{ color: '#212529', marginBottom: '25px', fontSize: '1.5rem', fontWeight: 600 }}>
          AI 레시피 생성 및 시뮬레이션
        </h2>
        
        <div css={s.recipeResult}>
          <RecipeDetails />
        </div>
        
        <button 
          css={[s.actionButton(true), { width: '100%', padding: '12px 0', marginBottom: '10px' }]} 
          onClick={handleGenerateRecipe}
          disabled={isLoading}
        > 
          {isLoading ? '생성 중...' : '레시피 추천받기'}
        </button>

        <button 
          css={[s.actionButton(true), { width: '100%', padding: '12px 0', marginBottom: '10px' }]} 
          onClick={handleGenerateImage}
          disabled={isLoading || !currentRecipe}
        > 
          {isLoading ? '이미지 생성 중...' : '향수 이미지 생성'}
        </button>
        
        <button 
          css={[s.actionButton(true), { width: '100%', padding: '12px 0' }]} 
          onClick={handleSaveRecipe}
          disabled={!currentRecipe}
        > 
          레시피 저장하기
        </button>
      </div>

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
