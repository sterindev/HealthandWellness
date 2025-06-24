import React from 'react';
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Health & Wellness Dashboard</h1>

      {/* Physical Health Section */}
      <section className="section">
        <h2>Physical Health</h2>
        <ul>
          <li>Steps: 8,500</li>
          <li>Calories Burned: 540</li>
          <li>Heart Rate: 72 bpm</li>
          <li>Sleep: 7 hrs 30 min</li>
          <li>Weight: 68 kg</li>
        </ul>
      </section>

      {/* Mental Health Section */}
      <section className="section">
        <h2>Mental Health</h2>
        <ul>
          <li>Mood: 😊 Happy</li>
          <li>Stress Level: Moderate</li>
          <li>Mindfulness Minutes: 15</li>
        </ul>
      </section>

      {/* Nutrition Section */}
      <section className="section">
        <h2>Nutrition</h2>
        <ul>
          <li>Calories Intake: 2,000 kcal</li>
          <li>Macros: 40% Carbs, 30% Protein, 30% Fats</li>
          <li>Water Intake: 2.5L</li>
        </ul>
      </section>

      {/* Medical & Vitals Section */}
      <section className="section">
        <h2>Medical & Vitals</h2>
        <ul>
          <li>Blood Pressure: 120/80</li>
          <li>Blood Sugar: 95 mg/dL</li>
          <li>Cholesterol: 180 mg/dL</li>
          <li>Next Checkup: 2025-07-10</li>
        </ul>
      </section>

      {/* Goals Section */}
      <section className="section">
        <h2>Goals & Habits</h2>
        <ul>
          <li>Daily Steps Goal: 10,000</li>
          <li>Water Goal: 3L</li>
          <li>Sleep Goal: 8 hours</li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;


