import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div>
      <div className="profile-header">
        <h2>My profile</h2>
      </div>
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-icon">
            <img
              src="https://via.placeholder.com/80" // 사용자 아이콘 이미지
              alt="User Icon"
            />
          </div>
          <div className="profile-info">
            <h3>User</h3>
            <p>생년월일 : XXXX.XX.XX</p>
          </div>
          <button className="edit-button">edit</button>
        </div>
        <div className="profile-details">
          <p>
            <strong>성별:</strong> 여성 ⭕ 남성 ⭕ 그외 ⭕
          </p>
          <p>
            <strong>연락처:</strong> 010-xxxx-xxxx
          </p>
          <p>
            <strong>이메일:</strong> bloodvita@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
