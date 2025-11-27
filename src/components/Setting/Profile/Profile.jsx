/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import * as s from "./styles";
import { BiSolidPencil } from "react-icons/bi";
import { FaCamera } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";

function Profile() {
  const [selectGender, setSelectGender] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleGenderChange = (gender) => {
    setSelectGender(gender);
  };

  // 이미지 파일 선택 처리
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handlePencilClick = () => {
    // write 박스의 input 수정 가능하게 하기
  };

  return (
    <div css={s.container}>
      <div css={s.profile}>
        {/* 파일 입력으로 사진 불러오기 */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: "none" }}
        />

        {/* 프로필 이미지 */}
        <div>
          {image ? (
          <img
            src={image} 
            alt="Uploaded Preview" 
            style={{ width: "200px", height: "200px", borderRadius: "40%", border: "1px solid #333" }} 
          />
        ) : (
          <div>
            <IoPersonCircleSharp size={245} color="#333"/>
          </div>
        )}
        </div>
        
        {/* 프로필 사진 수정 버튼 */}
        <div onClick={handleImageClick}>
          <FaCamera size={25} color="white" />
        </div>

        {/* 프로필 수정 버튼 */}
        <div onClick={handlePencilClick}>
          <BiSolidPencil />
        </div>
        
      </div>
      <div css={s.writeBox}>
        <ul>
          <li>
            <p>이름</p>
            <input type="text" />
          </li>
          <li>
            <p>나이</p>
            <input type="text" />
          </li>
          <li>
            <p>전화번호</p>
            <input type="text" />
          </li>
        </ul>
        <ul>
          <li>
            <p>성별</p>
            <div>
              <button
                onClick={() => handleGenderChange("male")}
                css={s.genderBtn(selectGender === "male")}
              >
                남성
              </button>
              <button
                onClick={() => handleGenderChange("female")}
                css={s.genderBtn(selectGender === "female")}
              >
                여성
              </button>
            </div>
          </li>
          <li>
            <p>이메일</p>
            <input type="text" />
          </li>
          <li>
            <p>주소</p>
            <input type="text" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;