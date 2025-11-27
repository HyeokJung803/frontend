/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";
import { LuCitrus, LuLeafyGreen } from "react-icons/lu";
import { GiButterflyFlower, GiChocolateBar, GiCoolSpices, GiDeadWood, GiExpense, GiFruitBowl, GiHoneypot, GiLeatherBoot, GiMilkCarton, GiPeach, GiPlantRoots, GiPowderBag, GiSoap, GiVineFlower } from "react-icons/gi";
import { FaAirFreshener, FaBomb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdSmokingRooms } from "react-icons/md";
import { IoBandage } from "react-icons/io5";


function Preference() {
  const interests = [
    { id: 1, label: "citrus", icon: <LuCitrus size={30} /> },
    { id: 2, label: "floral", icon: <GiButterflyFlower size={30} /> },
    { id: 3, label: "fruity", icon: <GiFruitBowl size={30} /> },
    { id: 4, label: "woody", icon: <GiDeadWood size={30} /> },
    { id: 5, label: "spicy", icon: <GiCoolSpices size={30} /> },
    { id: 6, label: "green", icon: <LuLeafyGreen size={30} /> },
    { id: 7, label: "aquatic", icon: <FaAirFreshener size={30} /> },
    { id: 8, label: "oriental", icon: <GiHoneypot size={30} /> },
    { id: 9, label: "powedery", icon: <GiPowderBag size={30} /> },
    { id: 10, label: "gourmand", icon: <GiChocolateBar size={30} /> },
    { id: 11, label: "animalic", icon: <GiMilkCarton size={30} /> },
    { id: 12, label: "tobacco", icon: <MdSmokingRooms size={30} /> },
    { id: 13, label: "aldehydic", icon: <GiSoap size={30} /> },
    { id: 14, label: "smoky", icon: <FaBomb size={30} /> },
    { id: 15, label: "leather", icon: <GiLeatherBoot size={30} /> },
    { id: 16, label: "aromatic", icon: <GiVineFlower size={30} /> },
    { id: 17, label: "lactonic", icon: <GiPeach size={30} /> },
    { id: 18, label: "saffron", icon: <GiExpense size={30} /> },
    { id: 19, label: "iris", icon: <GiPlantRoots size={30} /> },
    { id: 20, label: "oud", icon: <IoBandage size={30} /> },
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
        <h1>선호하는 향을 3개 이상 선택하세요.</h1>
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
          저장
        </button>
    </div>
  );
}

export default Preference;