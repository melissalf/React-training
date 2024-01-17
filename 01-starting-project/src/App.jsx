import React from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/coreConcepts.jsx";
import Examples from "./components/Examples.jsx";

export function MainGoal() {
  return (
    <div>
      <h1>My main goal: 3 in this course</h1>
      <ul>
        <li>Refresch my already existing knowleadge of react</li>
        <li>Gather more knowleadge of react than before</li>
        <li>
          Thave the necesary knowleadge to work proffecionally in my next
          project
        </li>
      </ul>
      {React.createElement(
        'div',
        {id: 'content'},
        React.createElement(
          'p',
          null,
          'Nastier examples without JSX'
        )
      )}
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
      <MainGoal />
    </>
  );
}

export default App;
