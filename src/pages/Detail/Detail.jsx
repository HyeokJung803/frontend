/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

function Detail() {
  const navigate = useNavigate();

  // DB 받아와서 교체하기
  const ingredients = [
    {
      name: "베르가못",
      description: "상큼하고 쌉쌀한 향으로 향수의 첫인상을 여는 이탈리아산 시트러스",
    },
    {
      name: "카다멈",
      description: "따뜻하고 스파이시한 매력을 더해주는 '향신료의 여왕'",
    },
    {
      name: "인디안 자스민",
      description: "풍부하고 관능적인 무드를 자아내는 인도의 화이트 플로럴 노트",
    },
    {
      name: "일랑일랑",
      description: "달콤하면서도 이국적인 분위기를 연출하는 열대 지방의 꽃",
    },
    {
      name: "오리스",
      description: "붓꽃의 뿌리에서 추출한, 파우더리하고 섬세한 느낌을 주는 고급 원료",
    },
    {
      name: "인디안 샌달우드",
      description: "크리미하고 부드러운 우디 향으로 깊이와 안정감을 주는 인도의 백단향",
    },
    // {
    //   name: "베티버",
    //   description: "촉촉한 흙과 나무 뿌리를 연상시키는 스모키하고 차분한 향",
    // },
    // {
    //   name: "타히티산 바닐라",
    //   description: "일반 바닐라보다 더 깊고 부드러운 달콤함으로 향을 마무리하는 고급 원료",
    // },
  ];

  return (
    <div css={s.container}>
      <div css={s.header}>
        <button onClick={() => navigate(-1)}><IoChevronBack /></button>
        <p>Auria</p>
        <button onClick={() => navigate("/")}>저장</button>
      </div>
      <div css={s.body}>
        <div css={s.perfume}>
          <div>
            그림
          </div>
          <div>
            <div>Clive Christian</div>
            <ul>
              {ingredients.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div css={s.chatbot}>
          <div>AI 팝업</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;