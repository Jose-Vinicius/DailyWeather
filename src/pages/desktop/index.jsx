import {useContext, useEffect, useRef} from "react";

import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Date } from "../../components/Date";
import { Input } from "../../components/Form/Input";
import { Locate } from "../../components/Locate";
import { Modal } from "../../components/Modal";
import { AppContext, useAppContext } from "../../context/AppContext";
import { getForecast } from "../../services/get.forecast.service";
import { getGeolocation} from "../../services/get.geolocation.service";

export function DesktopView(){
    const searchRef = useRef();
    
    const {
        locate, setLocate, 
        geolocation, setGeolocation, 
        forecast, setForecast, 
        dailyPrecipitation, setDailyPrecipitation,
        infoDay, setInfoDay
    } = useContext(AppContext);
    const {transformDate, onLoadError, onLoadSucess} = useAppContext()

    function openModal(){
        searchRef.current.showModal();
    }

    function setSelect(e){
        if(dailyPrecipitation){
            const currentItem = e.currentTarget
            setInfoDay(() => dailyPrecipitation[currentItem.id])
        }
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
        getForecast(geolocation.lat, geolocation.lon).then(forecast => {
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
        padding:'0 10px 0 0',
    }

    const styleSearchButton = {
        fontSize: '2.5rem',
        margin: '40px 0',
    }

    //Este useEffect pega os dados de uma API de geolocalização e manda para uma API de meteorologia.
    useEffect(() => {
        if(geolocation){
            handleGetForecast()
        }
    },[geolocation])

    //Este useEffect pega duas fontes de dados e transforma em um objeto
    useEffect(() => {
        if(forecast !== ''){
            let dateArray = forecast.daily.time;
            let precipitationArray = forecast.daily.precipitation_sum;
            let maxTemperatureArray = forecast.daily.temperature_2m_max;
            let minTemperatureArray = forecast.daily.temperature_2m_min;
            let weatherCodeArray = forecast.daily.weathercode;
            setDailyPrecipitation(() => transformDate(dateArray, precipitationArray, maxTemperatureArray, minTemperatureArray, weatherCodeArray));
        }
    },[forecast])

    useEffect(() => {
        setInfoDay(() => dailyPrecipitation[0])
    },[dailyPrecipitation])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(onLoadSucess, onLoadError)
    },[])
    
    return(
        <>
            <Modal ref={searchRef}>
                <div className="modal--header">
                    <h2>Buscar Cidade</h2>
                    <Button clickEvent={closeModal} buttonStyle={styleCloseButton}>X</Button>
                </div>
                <form onSubmit={handleGetLocate}>
                    <Input inputValue={locate} handleChange={(event) => setLocate(event.target.value)}/>
                    <Button buttonStyle={styleSearchButton}>Buscar Cidade</Button>
                </form>
            </Modal>
            <div className="locate--field">
                <Locate />
                <Button clickEvent={openModal}>Buscar</Button>
            </div>
            <div className="date">
                {infoDay ? <Date date={infoDay.date} week={infoDay.weekDay}/> : ''}
            </div>
            <div className="card--info">
                {dailyPrecipitation ? dailyPrecipitation.map((date) => {
                    return <Card 
                    id={date.id} 
                    data={date.weekDay} 
                    precipitation={date.precipitation} 
                    key={date.id}
                    weatherCondition={date.weatherCode} 
                    cardClass={infoDay && infoDay.id !== date.id ? false: true} 
                    handleClass={setSelect}/>
                }): ''}
            </div>
        </>
        
    )
}