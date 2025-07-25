import { useState } from 'react';
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Wonderland",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });
    const [error, setError] = useState("");

    let updateInfo = (newInfo, errMsg = "") => {
        if (errMsg) {
            setError(errMsg);
        } else {
            setWeatherInfo(newInfo);
            setError("");
        }
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            {error && <p style={{color: "red", margin: "10px 0"}}>{error}</p>}
            <InfoBox info={weatherInfo}/>
        </div>
    );
}
