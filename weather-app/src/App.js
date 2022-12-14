import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import City from "./City";



function App() {

  const key = "1b8255e8216625ef791d841d67af70d4"
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`)
      .then((response) => {
        console.log(response)
        setCity(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [search])



  return (
    <div className="container ">
        <h1 style={{textAlign:"center",marginTop:"20px",fontSize:"55px"}}>Weather App</h1>
      <div className="input-group mb-3 my-5">
        <input
          type="text"
          className="form-control"
          placeholder="Type Your City..."
          onChange={(event) => {
            setSearch(event.target.value)

          }}
        />

      </div>
      {city && <City city={city} />}
    </div>
  );
}

export default App;
