import React from "react";


const City = ({ city }) => {
    console.log(city)
    return (
        <div className="my-5">
            <div class="alert alert-info d-flex flex-column justify-content-center align-items-center" role="alert">
                <h1 style={{fontSize:"50px", borderBottom:"5px solid red"}}>Temp : {city.main.temp}</h1>
                <h1 style={{fontSize:"50px", borderBottom:"5px solid blue"}}> City : {city.name}</h1>
                <h1 style={{fontSize:"50px", borderBottom:"5px solid green"}}> Weather : {city.weather[0].main}</h1>
            </div>
        </div>
    )



}

export default City;