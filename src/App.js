import { useState } from "react";

function App({title, descricao}) {
  const [number, setNumber] = useState(0);

  const fruits = ["Maçã", "Banana", "Laranja"]

  return (
    <>

      <div>
        {fruits.map((fruit) => (
          <p key={fruit}>{fruit}</p>
        ))}
      </div>

      <h1>{title} - {number}</h1>

      <p>{descricao}</p>

      <h2 className={number >= 0 ? "positivo" : "negativo"}>
        {number >= 0 ? "Positivo" : "Negativo"}
      </h2>

      <input
        type="number"
        name="number"
        value={number}
        onChange={({target}) => {
          setNumber(parseInt(target.value));
        }}
      ></input>

      <ul>
        {Array.from({ length: 11 }).map((_, i) => (
        <li key={i}>
          {number} x {i} = <b>{number * i}</b>
        </li>
        ))}
      </ul>
    </>
  );
}

export default App;
