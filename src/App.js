import React from "react";

function App() {
  const myName = "Валерій";
  const favWebsite = { name: "Google", url: "https://www.google.com/" };

  const firstNumber = 349;
  const secondNumber = 247;
  const sum = firstNumber + secondNumber;

  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div className="App">
      <h1>Моє ім'я: {myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>

      <img
        src="https://cdn.pixabay.com/photo/2013/01/29/00/47/google-76517_1280.png"
        alt="sky"
        width="500"
      />

      <h4>
        улюблений сайт:{" "}
        <a href={favWebsite.url} target="_blank">
          {favWebsite.name}
        </a>
      </h4>

      <h4>Сума чисел:</h4>
      <p>
        {firstNumber} + {secondNumber} = {sum}
      </p>

      <h4>Список кольорів:</h4>

      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
