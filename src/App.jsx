import "./App.css";
import fetchData from "./services/api";
import React, { useState } from "react";
import initialData from "./helpers/inicialData";
import Card from "./components/Card";

function App() {
  const [city, setCity] = useState("São Paulo");

  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (city.trim() === "") {
      return;
    }

    fetchData(city).then((response) => {
      setData(response);
    });
  };

  return (
    <div className="flex flex-col w-full h-screen items-center sm: justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full flex p-4 sm:top-2 sm:relative sm:bottom-auto justify-center"
      >
        <input
          type="text"
          placeholder="Cidade"
          value={city}
          className="max-h-12 p-3 rounded-lg outline-none h-13 w-full  sm: max-w-[350px] flex-1"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#FF4000] p-3 rounded-lg ml-3 text-white font-bold max-h-12"
        >
          Pesquisar
        </button>
      </form>
      <Card data={data} />
    </div>
  );
}

export default App;
