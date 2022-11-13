import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import './style.scss';
 
export function Locate(){
    const {forecast, geolocation} = useContext(AppContext);
    return(
        <div className="locate">
            <span>{forecast ? `${forecast.daily.temperature_2m_max[0]}º` : ''}</span>
            <p>{geolocation.name}, {geolocation.country_code}</p>
        </div>
    )
}