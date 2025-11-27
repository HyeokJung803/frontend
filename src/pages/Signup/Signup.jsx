// Signup.jsx
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auriaLogo from "../../assets/auria_logo.png";

const EXISTING_IDS = ["admin", "user1", "test123"];
const EXISTING_EMAILS = ["admin@example.com", "user1@example.com"];
const EXISTING_NICKNAMES = ["꽃미남", "향수매니아", "향긋한나"];
const genderOptions = ["남성", "여성", "기타"];
const ageOptions = ["10대", "20대", "30대", "40대", "50대 이상"];

const perfumeQuestions = [
  {
    id: 1,
    question: "어떤 첫인상을 원하시나요?",
    description: "사람들에게 남기고 싶은 당신만의 인상을 골라주세요. 1개 또는 2개 선택 가능합니다.",
    options: ["센슈얼", "청량한", "우아한", "자연스러운", "강렬한", "편안한"],
  },
  {
    id: 2,
    question: "가장 좋아하는 향의 종류는 어느 쪽인가요?",
    description: "자신을 표현하는 향을 선택해보세요. 1개 또는 2개 선택 가능합니다.",
    options: ["플로럴", "시트러스", "우디", "오리엔탈", "머스크", "허브"],
  },
  {
    id: 3,
    question: "향의 지속력 중 어느 정도를 선호하시나요?",
    description: "1개 또는 2개 선택 가능합니다. 은은한 것부터 오래 지속되는 것까지.",
    options: ["가볍게 지속", "중간 지속", "오래 지속"],
  },
  {
    id: 4,
    question: "주로 향수를 사용하는 계절은 언제인가요?",
    description: "계절에 따라 선호하는 향이 달라질 수 있어요. 1개 또는 2개 선택 가능.",
    options: ["봄", "여름", "가을", "겨울", "계절 상관없음"],
  },
  {
    id: 5,
    question: "향수에서 가장 중시하는 포인트는 무엇인가요?",
    description: "1개 또는 2개 선택 가능. 탑노트부터 전체 밸런스까지.",
    options: ["탑노트", "미들노트", "베이스노트", "전체 밸런스"],
  },
  {
    id: 6,
    question: "향수를 고를 때 중요하게 생각하는 요소는 무엇인가요?",
    description: "1개 또는 2개 선택 가능. 브랜드, 성분 등.",
    options: ["천연 성분", "니치 브랜드", "희소성", "패키지 디자인", "향조 독창성"],
  },
  {
    id: 7,
    question: "어떤 분위기의 향을 좋아하시나요?",
    description: "1개 또는 2개 선택 가능. 다양한 분위기 중에 골라보세요.",
    options: ["로맨틱", "프레시", "클래식", "모던", "아방가르드"],
  },
  {
    id: 8,
    question: "향의 무게감은 어떤 걸 좋아하시나요?",
    description: "1개 또는 2개 선택 가능. 산뜻한부터 무거운 향까지.",
    options: ["가벼움", "중간", "무거움"],
  },
  {
    id: 9,
    question: "선호하는 향의 색감은 무엇인가요?",
    description: "1개 또는 2개 선택 가능. 밝고 투명한 향부터 깊은 어두운 향까지.",
    options: ["밝고 투명", "따뜻하고 부드러움", "깊고 어둠"],
  },
  {
    id: 10,
    question: "향수 구매 시 주로 고려하는 점은 무엇인가요?",
    description: "1개 또는 2개 선택 가능. 가격, 브랜드 등 고려 요소.",
    options: ["가격", "독창성", "브랜드", "느낌"],
  },
  {
    id: 11,
    question: "향을 즐기는 주요 장소는 어디인가요?",
    description: "1개 또는 2개 선택 가능. 장소에 따른 향 선호도.",
    options: ["실내", "야외", "사무실", "특별한 자리"],
  },
  {
    id: 12,
    question: "향에 기대하는 감정은 무엇인가요?",
    description: "1개 또는 2개 선택 가능. 향수를 통해 느끼고 싶은 감정.",
    options: ["안정감", "기분전환", "자신감", "섹시함"],
  },
  {
    id: 13,
    question: "좋아하는 자연의 향은 무엇인가요?",
    description: "1개 또는 2개 선택 가능. 자연에서 영감을 받은 향.",
    options: ["비 오는 냄새", "숲속", "바다", "꽃밭"],
  },
  {
    id: 14,
    question: "계절에 따라 향을 바꾸시나요?",
    description: "1개 또는 2개 선택 가능. 향수 사용 습관.",
    options: ["항상 바꾼다", "가끔 바꾼다", "잘 안 바꾼다"],
  },
  {
    id: 15,
    question: "향의 강한 잔향을 좋아하시나요?",
    description: "잔향 강도에 대한 선호도. 1개 또는 2개 선택 가능.",
    options: ["좋아한다", "적당히", "싫어한다"],
  },
  {
    id: 16,
    question: "향수 사용 빈도는 얼마나 되나요?",
    description: "1개 또는 2개 선택 가능. 사용 빈도.",
    options: ["매일", "주 2~3회", "가끔"],
  },
  {
    id: 17,
    question: "향수 선택 시 스토리를 중요시하나요?",
    description: "향수에 담긴 이야기에 대한 선호. 1개 또는 2개 선택 가능.",
    options: ["중요하다", "그냥 향이 좋아야 한다", "상관없다"],
  },
  {
    id: 18,
    question: "향수를 추천받는 편인가요?",
    description: "주변에서 향수 추천 받는 빈도. 1개 또는 2개 선택 가능.",
    options: ["자주 받는다", "가끔", "받지 않는다"],
  },
  {
    id: 19,
    question: "선호하는 향수 향조는 무엇인가요?",
    description: "선호하는 향수 계열. 1개 또는 2개 선택 가능.",
    options: ["프루티", "스파이스", "그린", "아로마틱"],
  },
  {
    id: 20,
    question: "향수 구매 시 어떤 점이 가장 중요한가요?",
    description: "최종적으로 구매 결정 시 중요 요소. 1개 또는 2개 선택 가능.",
    options: ["가격", "향", "브랜드", "용기 디자인"],
  },
];

export default function Signup({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    age: "",
    perfumePreferences: {},
  });
  const [errors, setErrors] = useState({});
  const [showSummary, setShowSummary] = useState(false);
  const [selectionError, setSelectionError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePerfumeChange = (option) => {
    const current = form.perfumePreferences[step] || [];
    let updated;

    if (current.includes(option)) {
      updated = current.filter((i) => i !== option);
      setSelectionError("");
    } else {
      if (current.length < 2) {
        updated = [...current, option];
        setSelectionError("");
      } else {
        setSelectionError("최대 2개까지 선택 가능합니다.");
        return;
      }
    }
    setForm((prev) => ({
      ...prev,
      perfumePreferences: { ...prev.perfumePreferences, [step]: updated },
    }));
  };

  const checkPasswordRules = (pw) => {
    const rules = {
      length: pw.length >= 8,
      alphabet: /[a-zA-Z]/.test(pw),
      number: /\d/.test(pw),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(pw),
    };
    const passedCount = Object.values(rules).filter(Boolean).length;
    return { passed: rules.length && passedCount >= 2, rules };
  };

  const validateStep = () => {
    let valid = true;
    const newErrors = {};

    if (step === 1) {
      if (!form.fullName) {
        newErrors.fullName = "이름을 입력해주세요.";
        valid = false;
      }
      if (!form.username) {
        newErrors.username = "아이디를 입력해주세요.";
        valid = false;
      } else if (EXISTING_IDS.includes(form.username)) {
        newErrors.username = "이미 사용중인 아이디 입니다.";
        valid = false;
      }
      if (!form.nickname) {
        newErrors.nickname = "닉네임을 입력해주세요.";
        valid = false;
      } else if (EXISTING_NICKNAMES.includes(form.nickname)) {
        newErrors.nickname = "이미 사용중인 닉네임 입니다.";
        valid = false;
      }
      if (!form.email) {
        newErrors.email = "이메일을 입력해주세요.";
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        newErrors.email = "올바른 이메일 형식이 아닙니다.";
        valid = false;
      } else if (EXISTING_EMAILS.includes(form.email)) {
        newErrors.email = "이미 가입된 이메일 입니다.";
        valid = false;
      }
      const pwCheck = checkPasswordRules(form.password);
      if (!form.password) {
        newErrors.password = "비밀번호를 입력해주세요.";
        valid = false;
      } else if (!pwCheck.passed) {
        const msgs = [];
        if (!pwCheck.rules.length) msgs.push("8자 이상");
        if (
          [pwCheck.rules.alphabet, pwCheck.rules.number, pwCheck.rules.special].filter(Boolean)
            .length < 2
        )
          msgs.push("영문, 숫자, 특수문자 중 2가지 이상");
        newErrors.password = "비밀번호 조건 미달: " + msgs.join(", ");
        valid = false;
      }
      if (!form.confirmPassword) {
        newErrors.confirmPassword = "비밀번호 확인을 입력해주세요.";
        valid = false;
      } else if (form.password !== form.confirmPassword) {
        newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
        valid = false;
      }
    }

    if (step === 2) {
      if (!form.gender) {
        newErrors.gender = "성별을 선택해주세요.";
        valid = false;
      }
      if (!form.age) {
        newErrors.age = "연령대를 선택해주세요.";
        valid = false;
      }
    }

    if (step >= 3) {
      const current = form.perfumePreferences[step] || [];
      if (current.length < 1) {
        setSelectionError("최소 1개 이상의 선택이 필요합니다.");
        valid = false;
      } else {
        setSelectionError("");
      }
    }
    setErrors(newErrors);
    return valid;
  };

  const totalSteps = perfumeQuestions.length + 2;
  const isLastStep = step === totalSteps;

  const getSummary = () => {
    let summary = "당신의 향 취향 요약:\n\n";
    const prefs = form.perfumePreferences;
    Object.entries(prefs).forEach(([qStep, answers]) => {
      const id = parseInt(qStep);
      const question = perfumeQuestions[id - 3];
      if (!question) return;
      summary += `${question.question}\n- ${answers.join(", ")}\n\n`;
    });
    return summary;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (isLastStep) setShowSummary(true);
    else setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (showSummary) setShowSummary(false);
    else setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleConfirm = () => {
    alert("회원가입 완료! (구현 필요)");
    setShowSummary(false);
    onClose();
    navigate("/");
  };

  const handleGoogleLogin = () => {
    alert("구글 로그인 성공 (구현 필요)");
    setStep(3);
  };

  if (!isOpen) return null;

  return (
    <div css={s.modalOverlay}>
      <div css={s.modalContainer} role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div css={s.stepCounter}>{showSummary ? "요약" : `질문 ${step} / ${totalSteps}`}</div>
        <button type="button" onClick={() => onClose()} css={s.closeButton} aria-label="닫기">
          ×
        </button>
        <img
          src={auriaLogo}
          alt="Auria Logo"
          css={s.modalLogo}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
        <h2 id="modalTitle" css={s.modalTitle}>
          {showSummary ? "향수 취향 요약" : "회원가입"}
        </h2>
        {!showSummary ? (
          <>
            {step === 1 && (
              <>
                {/* 1. 유저 이름 */}
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="이름"
                  css={s.inputUser}
                  aria-invalid={!!errors.fullName}
                  aria-describedby="error-fullName"
                />
                {errors.fullName && <p id="error-fullName" css={s.errorText}>{errors.fullName}</p>}

                {/* 2. 유저 아이디 */}
                <input
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="아이디"
                  css={s.inputUser}
                  aria-invalid={!!errors.username}
                  aria-describedby="error-username"
                />
                {errors.username && <p id="error-username" css={s.errorText}>{errors.username}</p>}

                {/* 3. 유저 닉네임 */}
                <input
                  name="nickname"
                  value={form.nickname}
                  onChange={handleChange}
                  placeholder="닉네임"
                  css={s.inputUser}
                  aria-invalid={!!errors.nickname}
                  aria-describedby="error-nickname"
                />
                {errors.nickname && <p id="error-nickname" css={s.errorText}>{errors.nickname}</p>}

                {/* 4. 유저 이메일 */}
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="이메일"
                  css={s.inputUser}
                  aria-invalid={!!errors.email}
                  aria-describedby="error-email"
                />
                {errors.email && <p id="error-email" css={s.errorText}>{errors.email}</p>}

                {/* 5. 유저 비밀번호 */}
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="비밀번호"
                  css={s.inputUser}
                  aria-invalid={!!errors.password}
                  aria-describedby="error-password"
                  autoComplete="new-password"
                />
                {errors.password && <p id="error-password" css={s.errorText}>{errors.password}</p>}

                {/* 6. 유저 비밀번호 확인 */}
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="비밀번호 확인"
                  css={s.inputUser}
                  aria-invalid={!!errors.confirmPassword}
                  aria-describedby="error-confirmPassword"
                  autoComplete="new-password"
                />
                {errors.confirmPassword && <p id="error-confirmPassword" css={s.errorText}>{errors.confirmPassword}</p>}

                <button type="button" css={s.googleLoginButton} onClick={handleGoogleLogin}>
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" css={s.googleIcon} />
                  구글로 회원가입
                </button>
              </>
            )}
            {step === 2 && (
              <div css={s.genderAgeContainer}>
                <div css={s.radioGroup}>
                  <p css={s.radioLabel}>성별</p>
                  {genderOptions.map((g) => (
                    <label key={g} css={s.radioLabelOption}>
                      <input type="radio" name="gender" value={g} checked={form.gender === g} onChange={handleChange} css={s.radioInput} />
                      {g}
                    </label>
                  ))}
                  {errors.gender && <p css={s.errorText}>{errors.gender}</p>}
                </div>
                <div css={s.ageGroup}>
                  <p css={s.radioLabel}>연령대</p>
                  <select name="age" value={form.age} onChange={handleChange} css={s.selectInput} aria-invalid={!!errors.age} aria-describedby="error-age">
                    <option value="">선택하세요</option>
                    {ageOptions.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                  {errors.age && <p id="error-age" css={s.errorText}>{errors.age}</p>}
                </div>
              </div>
            )}
            {step >= 3 && step <= totalSteps && (
              <div css={s.perfumeQuestion}>
                <p css={s.questionTitle}>{perfumeQuestions[step - 3].question}</p>
                <p css={s.questionDescription}>{perfumeQuestions[step - 3].description}</p>
                {selectionError && <p css={s.errorText}>{selectionError}</p>}
                <div css={s.optionsContainer} role="group" aria-label={perfumeQuestions[step - 3].question}>
                  {perfumeQuestions[step - 3].options.map((option) => {
                    const selectedOptions = form.perfumePreferences[step] || [];
                    const isSelected = selectedOptions.includes(option);
                    return (
                      <label key={option} css={isSelected ? s.optionLabelSelected : s.optionLabel}>
                        <input type="checkbox" value={option} checked={isSelected} onChange={() => handlePerfumeChange(option)} css={s.checkbox} />
                        {option}
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        ) : (
          <div css={s.summaryContainer}>
            <h3 css={s.summaryTitle}>향수 취향 요약</h3>
            <pre css={s.summaryText}>{getSummary()}</pre>
          </div>
        )}
        <div css={s.buttonGroup}>
          {(step > 1 || showSummary) && (
            <button type="button" css={s.prevButton} onClick={handlePrev}>← 이전</button>
          )}
          {showSummary ? (
            <button type="button" css={s.submitButton} onClick={handleConfirm}>가입 완료</button>
          ) : (
            <button type="button" css={s.nextButton} onClick={handleNext}>다음 →</button>
          )}
        </div>
      </div>
    </div>
  );
}