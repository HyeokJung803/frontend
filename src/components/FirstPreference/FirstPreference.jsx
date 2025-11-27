/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";
import { LuCitrus, LuLeafyGreen } from "react-icons/lu";
import { GiButterflyFlower, GiChocolateBar, GiCoolSpices, GiDeadWood, GiFruitBowl, GiHoneypot, GiLeatherBoot, GiMilkCarton, GiPowderBag } from "react-icons/gi";
import { FaAirFreshener } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function FirstPreference() {
  const interests = [
    { id: 1, label: "시트러스", icon: <LuCitrus size={25} /> },
    { id: 2, label: "플로럴", icon: <GiButterflyFlower size={25} /> },
    { id: 3, label: "프루티", icon: <GiFruitBowl size={25} /> },
    { id: 4, label: "우디", icon: <GiDeadWood size={25} /> },
    { id: 5, label: "스파이시", icon: <GiCoolSpices size={25} /> },
    { id: 6, label: "그린", icon: <LuLeafyGreen size={25} /> },
    { id: 7, label: "아쿠아틱", icon: <FaAirFreshener size={25} /> },
    { id: 8, label: "오리엔탈", icon: <GiHoneypot size={25} /> },
    { id: 9, label: "파우더리", icon: <GiPowderBag size={25} /> },
    { id: 10, label: "구어망드", icon: <GiChocolateBar size={25} /> },
    { id: 11, label: "애니멀릭", icon: <GiMilkCarton size={25} /> },
    { id: 12, label: "타바코&레더", icon: <GiLeatherBoot size={25} /> },
  ]

  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const toggleInterest = (id) => {
    setSelected((prev) => 
      prev.includes(id) 
        ? prev.filter((i) => i !== id) 
        : [...prev, id]
    );
  };

  return (
    <div css={s.container}>
      <div css={s.header}>
        <h1>관심있는 토픽을 3개 이상 선택하세요.</h1>
        <p>취향에 맞는 향수를 추천해드려요.</p>
      </div>
      <div css={s.body}>
        {interests.map((item) => (
          <div
            key={item.id}
            onClick={() => toggleInterest(item.id)}
            css={s.toggle(selected.includes(item.id))}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>

            {selected.includes(item.id) && (
              <span
                style={{
                  position: "absolute",
                  top: "6px",
                  right: "6px",
                  fontSize: "14px",
                }}>
                ✅
              </span>
            )}
          </div>
        ))}
      </div>
        <button
          disabled={selected.length < 3}
          css={s.nextBtn(selected.length >= 3)}
          onClick={() => navigate("/")}
        >
          다음
        </button>
    </div>
  );
}

export default FirstPreference;