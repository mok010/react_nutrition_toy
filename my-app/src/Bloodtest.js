import React from "react";
import "./Bloodtest.css";

function Bloodtest() {
  const supplements = [
    {
      name: "Vitamin D",
      dosage: "20 ng/ml",
      image: "/img/tea.jpg",
      description: "부족 조짐: 피로, 근육 약화, 골밀도 저하",
    },
    {
      name: "Vitamin B12",
      dosage: "150 pg/ml",
      image: "/img/tea.jpg",
      description: "부족 조짐: 빈혈, 신경 손상, 기억력 저하",
    },
    {
      name: "Ferritin(철)",
      dosage: "15 ng/ml",
      image: "/img/tea.jpg",
      description: "부족 조짐: 빈혈, 피로, 면역력 저하",
    },
  ];
  return (
    <div>
      <div className="blood-test-header">
        <h2>Blood Test</h2>
        <p className="date">Date: August 21, 2023</p>
      </div>
      <div className="supplement-list">
        {supplements.map((supplement, index) => (
          <div className="supplement-card" key={index}>
            <img
              src={supplement.image}
              alt={supplement.name}
              className="supplement-image"
            />
            <div className="supplement-info">
              <h3>{supplement.name}</h3>
              <p className="dosage">{supplement.dosage}</p>
              <p className="description">{supplement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bloodtest;
