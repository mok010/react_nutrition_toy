import React, { useState, useEffect } from "react";
import "./Profile.css";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "User",
    birthdate: "XXXX.XX.XX",
    gender: "여성",
    phone: "010-xxxx-xxxx",
    email: "bloodvita@gmail.com",
    profileImage: "https://via.placeholder.com/80",
  });

  // 데이터 로드
  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  // 데이터 저장
  const handleSave = () => {
    setIsEditing(false);
    localStorage.setItem("userData", JSON.stringify(userData)); // 데이터를 Local Storage에 저장
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-icon">
          {isEditing ? (
            <input
              type="file"
              name="profileImage"
              onChange={(e) =>
                setUserData((prevData) => ({
                  ...prevData,
                  profileImage: URL.createObjectURL(e.target.files[0]),
                }))
              }
            />
          ) : (
            <img src={userData.profileImage} alt="User Icon" />
          )}
        </div>
        <div className="profile-info">
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="input-name"
            />
          ) : (
            <h3>{userData.name}</h3>
          )}
          <p>
            생년월일:{" "}
            {isEditing ? (
              <input
                type="text"
                name="birthdate"
                value={userData.birthdate}
                onChange={handleChange}
              />
            ) : (
              userData.birthdate
            )}
          </p>
        </div>
        {isEditing ? (
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
      </div>
      <div className="profile-details">
        <p>
          <strong>성별:</strong>{" "}
          {isEditing ? (
            <>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="여성"
                  checked={userData.gender === "여성"}
                  onChange={handleChange}
                />{" "}
                여성
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="남성"
                  checked={userData.gender === "남성"}
                  onChange={handleChange}
                />{" "}
                남성
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="그외"
                  checked={userData.gender === "그외"}
                  onChange={handleChange}
                />{" "}
                그외
              </label>
            </>
          ) : (
            userData.gender
          )}
        </p>
        <p>
          <strong>연락처:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
            />
          ) : (
            userData.phone
          )}
        </p>
        <p>
          <strong>이메일:</strong>{" "}
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          ) : (
            userData.email
          )}
        </p>
      </div>
    </div>
  );
}

export default Profile;
