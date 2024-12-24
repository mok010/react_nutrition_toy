import React, { useState, useEffect } from "react";
import "./Bloodtest.css";

function Bloodtest() {
  const [supplements, setSupplements] = useState([
    {
      name: "Vitamin D",
      dosage: 20,
      unit: "ng/ml",
      normalRange: [30, 50],
      description: "피로, 근육 약화, 면역력 저하",
      normalText: "정상 범위: 30-50 ng/mL",
    },
    {
      name: "Vitamin B12",
      dosage: 150,
      unit: "pg/ml",
      normalRange: [200, 900],
      description: "빈혈, 신경 손상, 기억력 감퇴",
      normalText: "정상 범위: 200-900 pg/mL",
    },
    {
      name: "Ferritin (철)",
      dosage: 15,
      unit: "ng/ml",
      normalRange: [30, 300],
      description: "빈혈, 피로, 집중력 저하",
      normalText: "정상 범위: 남성 30-300 ng/mL, 여성 15-150 ng/mL",
    },
    {
      name: "Calcium (칼슘)",
      dosage: 8.0,
      unit: "mg/dL",
      normalRange: [8.5, 10.5],
      description: "골다공증, 근육 경련, 치아 약화",
      normalText: "정상 범위: 8.5-10.5 mg/dL",
    },
    {
      name: "Magnesium (마그네슘)",
      dosage: 1.5,
      unit: "mg/dL",
      normalRange: [1.7, 2.2],
      description: "근육 경련, 수면 장애, 불안감",
      normalText: "정상 범위: 1.7-2.2 mg/dL",
    },
    {
      name: "Folate (엽산)",
      dosage: 1.8,
      unit: "ng/mL",
      normalRange: [2, 20],
      description: "빈혈, 피로, 신경관 결손 (임산부 위험)",
      normalText: "정상 범위: 2-20 ng/mL",
    },
    {
      name: "Zinc (아연)",
      dosage: 65,
      unit: "mcg/dL",
      normalRange: [70, 120],
      description: "면역력 저하, 탈모, 상처 회복 지연",
      normalText: "정상 범위: 70-120 mcg/dL",
    },
    {
      name: "Glucose (혈당)",
      dosage: 110,
      unit: "mg/dL",
      normalRange: [70, 99],
      description: "고혈당, 저혈당 모두 건강 문제 유발",
      normalText: "정상 범위: 70-99 mg/dL (공복 시)",
    },
    {
      name: "Albumin (단백질)",
      dosage: 3.0,
      unit: "g/dL",
      normalRange: [3.5, 5.0],
      description: "영양실조, 부종, 간 기능 저하",
      normalText: "정상 범위: 3.5-5.0 g/dL",
    },
    {
      name: "Cholesterol (콜레스테롤)",
      dosage: 200,
      unit: "mg/dL",
      normalRange: [100, 200],
      description: "심혈관 질환 위험 증가",
      normalText: "LDL/HDL/중성지방에 따라 정상 범위가 다양합니다.",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);

  // Load data from Local Storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("bloodTestData");
    if (storedData) {
      try {
        setSupplements(JSON.parse(storedData));
      } catch (error) {
        console.error("Failed to parse Local Storage data:", error);
      }
    }
  }, []);

  // Save data to Local Storage whenever supplements data changes
  useEffect(() => {
    localStorage.setItem("bloodTestData", JSON.stringify(supplements));
  }, [supplements]);

  // Toggle Edit Mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Update dosage for a specific supplement
  const handleInputChange = (index, value) => {
    const updatedSupplements = [...supplements];
    updatedSupplements[index].dosage = Number(value);
    setSupplements(updatedSupplements);
  };

  // Calculate health status based on dosage and normal range
  const calculateStatus = (dosage, normalRange) => {
    if (dosage >= normalRange[0] && dosage <= normalRange[1]) return "안전";
    if (dosage < normalRange[0]) return "위험";
    return "매우 위험";
  };

  return (
    <div>
      <div className="blood-test-header">
        <h2>Blood Test</h2>
        <p className="date">Date: August 21, 2023</p>
        <button className="edit-button" onClick={handleEditToggle}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      <div className="supplement-list">
        {supplements.map((supplement, index) => (
          <div className="supplement-card" key={index}>
            <div className="supplement-info">
              <h3>{supplement.name}</h3>
              {isEditing ? (
                <input
                  type="number"
                  value={supplement.dosage}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              ) : (
                <p className="dosage">
                  측정 수치: {supplement.dosage} {supplement.unit}
                </p>
              )}
              <p className="status">
                상태:
                <span
                  className={
                    calculateStatus(
                      supplement.dosage,
                      supplement.normalRange
                    ) === "안전"
                      ? "safe"
                      : calculateStatus(
                          supplement.dosage,
                          supplement.normalRange
                        ) === "위험"
                      ? "warning"
                      : "danger"
                  }
                >
                  {calculateStatus(supplement.dosage, supplement.normalRange)}
                </span>
              </p>
              <p className="description">{supplement.description}</p>
              <p className="normal-text">{supplement.normalText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bloodtest;
