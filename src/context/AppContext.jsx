import { createContext, useContext, useState } from "react";
import moment from "moment/moment";
import { getReverseGeolocation } from "../services/get.geolocation.service";

export const AppContext = createContext();
AppContext.displayName = "AppContext";

export const AppProvider = ({children}) => {
    const [locate, setLocate] = useState('')
    const [geolocation, setGeolocation] = useState('');
    const [forecast, setForecast] = useState('');
    const [dailyPrecipitation, setDailyPrecipitation] = useState('');
    const [infoDay, setInfoDay] = useState('');

    return(
        <AppContext.Provider
            value={{
                geolocation,setGeolocation,
                forecast, setForecast,
                locate, setLocate,
                dailyPrecipitation,setDailyPrecipitation,
                infoDay, setInfoDay
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const {
        geolocation, setGeolocation,
        forecast,
        locate,

    } = useContext(AppContext)

    function weekDaySwitch(date){
        let day
        switch(date){
          case 0: 
            day = 'Domingo'
            break;
          case 1:
            day = 'Segunda'
            break;
          case 2: 
            day = 'Terça'
            break;
          case 3: 
            day = 'Quarta'
            break;
          case 4: 
            day = 'Quinta'
            break;
          case 5: 
            day = 'Sexta'
            break;
          case 6: 
            day = 'Sabado'
            break;
      }
        return day
    }

    function transformWeek(array){
        let weekArray = array.map((day) => {
          let dayWeek = moment(day).day()
          return weekDaySwitch(dayWeek)
        })
        return weekArray
      }

    function sliceArrays(array){
        let transformedArray = array.slice(0,5)
        return transformedArray
    }

    function transformDate(arrayTime, precipitation, maxTemperature, minTemperature){
        const timeMapTransform = arrayTime.slice(0,5).map((date) => {
            let dateArray =  moment(date).format('DD/MM/YYYY')
            return dateArray
        })

        const precipitationTransform = sliceArrays(precipitation);

        const maxTemperatureTransform = sliceArrays(maxTemperature);

        const minTemperatureTransform = sliceArrays(minTemperature);

        const weekTranform = transformWeek(sliceArrays(arrayTime));

        let mergedDataArray = []

        for (let i = 0; i < timeMapTransform.length; i++){
            mergedDataArray[`${[i]}`] = {
                id: `${i}`,
                date: timeMapTransform[i],
                weekDay: weekTranform[i],
                precipitation: precipitationTransform[i],
                maxTemperature: maxTemperatureTransform[i],
                minTemperature: minTemperatureTransform[i],
            }
          }
        return mergedDataArray
    }

      function onLoadSucess(pos){
        const crs = pos.coords;
        const latitude = crs.latitude;
        const longitude = crs.longitude;
        let objCoords = {
          lat: latitude,
          lon: longitude
        }
        getReverseGeolocation(objCoords).then(({results}) => {
          setGeolocation(results[0])
        })
    }

    function onLoadError(err){
        console.log(err.message)
    }

    return {
        geolocation,
        forecast,
        locate,
        transformDate,
        onLoadError,
        onLoadSucess
    }
}