import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import './style.scss';
 
export function Locate(){
    const {geolocation, infoDay} = useContext(AppContext);
    return(
        <>
            {geolocation ? <div className="locate">
                {infoDay ? <div className="locate--temperature">
                    <div>
                        <h2>Max</h2>
                        <p>{infoDay.maxTemperature}ºC</p>
                    </div>
                    <div>
                        <h2>Min</h2>
                        <p>{infoDay.minTemperature}ºC</p>
                    </div>
                </div> : ''}
                <p>{geolocation.city}, {geolocation.country_code}</p>
            </div> : ''}
        </>
    )
}