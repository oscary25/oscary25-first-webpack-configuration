import React, { useState } from "react";

import data from "./data.json";
function App(props) {
  const [loaderList, setLoaderList] = useState([]);
  console.log(data);

  function handleClick() {
    setLoaderList(data.loaders);
  }

  return (
    <section>
      <ul>
        {loaderList.map((item, index) => (
          <li key={index.id}>{item.name}</li>
        ))}
      </ul>
      <p>Qlok wawa</p>
      <button onClick={handleClick}>Dale aquí🌚</button>
    </section>
  );
}

export default App;
