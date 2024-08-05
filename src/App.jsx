import { useState } from "react";
import "./App.css";

const MusicalIntrument = () => {
  const [selectInstrument, setSelectedInstrument] = useState("");

  const musicalInstrumentHandler = (event) => {
    setSelectedInstrument(event.target.value);
  };

  return (
    <div>
      <label htmlFor="instrument">Select a musical instrument: </label>
      <select id="instrument" onChange={musicalInstrumentHandler}>
        <option value="Guitar">Guitar</option>
        <option value="Piano">Piano</option>
        <option value="Drums">Drums</option>
      </select>
      <p>Type: {selectInstrument}</p>
    </div>
  );
};

const LanguageSelect = () => {
  const [selectLanguage, setSelectLanguage] = useState("");

  const languageHandler = (event) => {
    setSelectLanguage(event.target.value);
  };

  return (
    <div>
      <label htmlFor="languageSelect">Select a language: </label>
      <select id="languageSelect" onChange={languageHandler}>
        <option value="France">French</option>
        <option value="Nepal">Nepali</option>
        <option value="India">Hindi</option>
      </select>
      <p>{selectLanguage && `Origin: ${selectLanguage}`}</p>
    </div>
  );
};

const SelectCarBrand = () => {
  const [selectCar, setCar] = useState("");

  const carHandler = (event) => {
    setCar(event.target.value);
  };

  return (
    <div>
      <label htmlFor="carSelect">Select a car brand: </label>
      <select id="carSelect" onChange={carHandler}>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="Tesla">Tesla</option>
      </select>
      <p>
        Details:{" "}
        {selectCar &&
          (selectCar === "Audi"
            ? `${selectCar} - German luxury autombile manufacturer`
            : selectCar === "BMW"
              ? `${selectCar} - Bavarian Motor Works, a German multinational company`
              : `${selectCar} - American electric vehicle and clean energy compnay`)}
      </p>
    </div>
  );
};

const SelectContinent = () => {
  const [selectContinent, setContinent] = useState("");

  const continentHandler = (event) => {
    setContinent(event.target.value);
  };

  return (
    <div>
      <label htmlFor="continentSelect">Select a continent: </label>
      <select id="continentSelect" onChange={continentHandler}>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
      </select>
      <p>
        Details:{" "}
        {selectContinent &&
          (selectContinent === "Africa"
            ? `${selectContinent} - The second largest and second most populous continent`
            : selectContinent === "Asia"
              ? `${selectContinent} - The largest continent by land area and population`
              : `${selectContinent} - The third most populous continent`)}
      </p>
    </div>
  );
};

const MovieGenre = () => {
  const [selectGenre, setGenre] = useState("");

  const genreHandler = (event) => {
    setGenre(event.target.value);
  };

  return (
    <div>
      <label htmlFor="genreSelect">Select a movie genre: </label>
      <select id="genreSelect" onChange={genreHandler}>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
      </select>
      <p>
        Details:{" "}
        {selectGenre &&
          (selectGenre === "Action"
            ? `${selectGenre} - Films with exciting and fast-paced sequences`
            : selectGenre === "Comedy"
              ? `${selectGenre} - Films intended to make the audience laugh`
              : `${selectGenre} - Films with serious themes and emotions`)}
      </p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <MusicalIntrument />
      <LanguageSelect />
      <SelectCarBrand />
      <SelectContinent />
      <MovieGenre />
    </main>
  );
}
