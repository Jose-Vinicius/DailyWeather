import React from "react";
import './style.scss';

export function Date({date, week}){
    return(
        <>
           {date ? <div className="date--field">
                <span>{week}</span>
                <span>{date}</span>
            </div> : ''}
        </>
    )
}