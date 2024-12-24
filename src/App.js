import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import WhoWeAre from "./WhoWeAre";
import Shop from "./Shop";
import Nav from "./Nav";
import Header from "./Header";
import Bloodtest from "./Bloodtest";
import Profile from "./Profile";
import Basket from "./Basket";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Header */}
        <Header />

        {/* Navigation */}
        <Nav />

        {/* Routes */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div>
                <section className="banner">
                  <h2 className="main-title">
                    Do not take any nutritional supplements. <br />
                    Eat what your blood tells you to do.
                  </h2>
                  <button className="cta-button">영양제 조합 추천받기</button>
                </section>
                <section className="images">
                  <div className="image-item">
                    <img src="/img/tea.jpg" alt="tea" />
                  </div>
                  <div className="image-item">
                    <img src="/img/fruitbasket.jpg" alt="fruitbasket" />
                    <p className="caption">
                      Central California — The person who grew these was located
                      in Central California's west. Hopefully, very
                      well-compensated.
                    </p>
                  </div>
                </section>
              </div>
            }
          />

          {/* Other Pages */}
          <Route path="/WhoWeAre" element={<WhoWeAre />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Bloodtest" element={<Bloodtest />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/basket" element={<Basket />} />

          {/* Image Section */}
        </Routes>

        {/* Common Footer */}
        <section className="belief">
          <h3>What We Believe</h3>
          <p>
            We believe in produce. Tasty produce. Produce like:
            <br />
            <strong>Apples, Oranges, Limes, Lemons...</strong>
          </p>
          <p>
            What are we forgetting?
            <br />
            <strong>Onions, Yams, Avocados...</strong>
          </p>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
