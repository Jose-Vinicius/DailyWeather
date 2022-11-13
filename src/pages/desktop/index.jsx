import {useContext, useEffect, useRef} from "react";

import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Input } from "../../components/Form/Input";
import { Locate } from "../../components/Locate";
import { Modal } from "../../components/Modal";
import { AppContext, useAppContext } from "../../context/AppContext";
import { getForecast } from "../../services/get.forecast.service";
import { getGeolocation } from "../../services/get.geolocation.service";

export function DesktopView(){
    const searchRef = useRef()
    const {locate, setLocate, geolocation, setGeolocation, setForecast, forecast, dailyPrecipitation, setDailyPrecipitation} = useContext(AppContext);
    const {transformDate} = useAppContext()

    function openModal(){
        searchRef.current.showModal();
    }

    function closeModal(){
        searchRef.current.close()
    }

    function handleGetLocate(event){
        event.preventDefault()
        getGeolocation(locate).then(locate => {
            setGeolocation(locate.results[0])
            setLocate('')
        })
    }

    function handleGetForecast(){
        getForecast(geolocation.latitude, geolocation.longitude).then(forecast => {
            setForecast(forecast)
            closeModal()
        })
    }

    const styleCloseButton = {
        color: 'rgb(5, 5, 5)',
        width: '10px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2.5rem',
        margin: '10px 0 20px 0',
        backgroundColor:'transparent',
        padding:'0 10px 0 0'
    }

    const styleSearchButton = {
        fontSize: '2.5rem',
        margin: '40px 0',
    }

    useEffect(() => {
        if(geolocation){
            handleGetForecast()
        }
    },[geolocation])

    useEffect(() => {
        if(forecast !== ''){
            let dateArray = [];
            forecast.daily.time.map((day) => {
                dateArray.push(day)
            })
            let precipitationArray = []
            forecast.daily.precipitation_sum.map((precipitationSum) => {
                precipitationArray.push(precipitationSum);
            })
            setDailyPrecipitation(() => transformDate(dateArray, precipitationArray));
        }
    },[forecast])
    
    return(
        <>
            <Modal ref={searchRef}>
                <div className="modal--header">
                    <h2>Buscar Cidade</h2>
                    <Button clickEvent={closeModal} buttonStyle={styleCloseButton}>X</Button>
                </div>
                <form onSubmit={handleGetLocate}>
                    <Input />
                    <Button buttonStyle={styleSearchButton}>Buscar Cidade</Button>
                </form>
            </Modal>
            <div className="locate--field">
                <Locate />
                <Button clickEvent={openModal}>Buscar</Button>
            </div>
            <div className="card--info">
                {dailyPrecipitation ? dailyPrecipitation.map((date) => {
                    return <Card data={date.date} precipitation={date.precipitation} key={date.id}/>
                }): ''}
            </div>
        </>
        
    )
}