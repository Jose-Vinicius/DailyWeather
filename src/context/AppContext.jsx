import { createContext, useContext, useState } from "react";
import moment from "moment/moment";

export const AppContext = createContext();
AppContext.displayName = "AppContext";

export const AppProvider = ({children}) => {
    const [locate, setLocate] = useState('')
    const [geolocation, setGeolocation] = useState('');
    const [forecast, setForecast] = useState('');
    const [dailyPrecipitation, setDailyPrecipitation] = useState('')

    return(
        <AppContext.Provider
            value={{
                geolocation, setGeolocation,
                forecast, setForecast,
                locate, setLocate,
                dailyPrecipitation, setDailyPrecipitation
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const {
        geolocation,
        forecast,
        locate,
    } = useContext(AppContext)

    function transformDate(arrayTime, precipitation){
        const timeMapTransform = arrayTime.slice(0,5).map((date) => {
            let dateArray =  moment(date).format('DD/MM/YYYY')
            return dateArray
        })
        const precipitationTransform = precipitation.slice(0,5)

        let mergedDataArray = []

        for (let i = 0; i < timeMapTransform.length; i++){
            mergedDataArray[`${[i]}`] = {
                id: [i],
                date: timeMapTransform[i],
                precipitation: precipitationTransform[i]
            }
          }
        return mergedDataArray
    }

    return {
        geolocation,
        forecast,
        locate,
        transformDate
    }
}