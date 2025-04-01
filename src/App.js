import React from "react";

function App() {
  const name = "Valerii";
  const text = "Ласкаво просимо до нашого сайту";
  const urlImg =
    "https://cdn.pixabay.com/photo/2023/12/29/18/23/daisy-8476666_1280.jpg";
  const alt = "daisy";
  const obj = {
    name: "pixabay",
    url: "https://pixabay.com/pl/",
  };
  const firstNum = 12;
  const secondNum = 303;
  const colors = ["Червоний", "синій", "зелений"];
  return (
    <div className="App">
      <h1> {name} </h1>
      <p>{text}</p>
      <img width="300" src={urlImg} alt={alt} />
      <a href={obj.url}>{obj.name}</a>
      <p>{firstNum + secondNum}</p>
      <ul>
        {colors.map((color, index) => {
          return <li key={index}>{color}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
