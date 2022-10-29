import React from "react";
import './style.scss';

export function Date({date}){
    const day = date.day;
    const mounth = date.mounth;
    const year = date.year;
    return(
        <div className="date--field">
            <p>Quarta Feira</p>
            <span>{day}/{mounth}/{year}</span>
        </div>
    )
}