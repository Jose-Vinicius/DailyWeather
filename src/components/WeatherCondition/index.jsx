import './style.scss'

export function WeatherCondition({weatherCondition}){
    function getWeatheCondition(condition){
        let weatherCode;
        let conditionsCode = {
            0: {
                'ConditionText': 'Céu limpo', 
                'ConditionImg': 'Sunny.svg'
            },
            1: {
                'ConditionText': 'Céu com poucas nuvens',
                'ConditionImg': 'PartlyCloudy.svg'
            },
            2: {
                'ConditionText': 'Céu parcialmente nublado',
                'ConditionImg': 'PartlyCloudy.svg'
            },
            3: {
                'ConditionText': 'Céu nublado', 
                'ConditionImg': 'Cloudy.png'
            },
            45: {
                'ConditionText': 'Neblina', 
                'ConditionImg': 'Fog'
            },
            48: {
                'ConditionText': 'Nevoeiro', 
                'ConditionImg': 'Fog'
            },
            51: {
                'ConditionText': 'Garoa leve', 
                'ConditionImg': 'Drizzle.png'
            },
            52: {
                'ConditionText': 'Garoa moderada', 
                'ConditionImg': 'Drizzle.png'
            },
            53: {
                'ConditionText': 'Garoa pesada', 
                'ConditionImg': 'Drizzle.png'
            },
            56: {
                'ConditionText': 'Garoa gelada leve', 
                'ConditionImg': 'FreezingRain.png'
            },
            57: {
                'ConditionText': 'Garoa gelada Pesada', 
                'ConditionImg': 'FreezingRain.png'
            },
            61: {
                'ConditionText': 'Chuva leve', 
                'ConditionImg': 'Rainy.svg'
            },
            62: {
                'ConditionText': 'Chuva moderada', 
                'ConditionImg': 'RainThunder.svg'
            },
            65: {
                'ConditionText': 'Chuva forte', 
                'ConditionImg': 'RainThunder.svg'
            },
            66: {
                'ConditionText': 'Chuva gelada leve', 
                'ConditionImg': 'SnowFlake;png'
            },
            67: {
                'ConditionText': 'Chuva gelada Pesada', 
                'ConditionImg': 'SnowFlake;png'
            },
            71: {
                'ConditionText': 'Queda de neve leve', 
                'ConditionImg': 'Snowy.svg'
            },
            73: {
                'ConditionText': 'Queda de neve moderada', 
                'ConditionImg': 'SnowFall.png'
            },
            75: {
                'ConditionText': 'Queda de neve pesada', 
                'ConditionImg': 'SnowFall.png'
            },
            77: {
                'ConditionText': 'Flocos de neve', 
                'ConditionImg': 'Snowy.svg'
            },
            80: {
                'ConditionText': 'Chuva leve', 
                'ConditionImg': 'LightRain.png'
            },
            81: {
                'ConditionText': 'Chuva moderada', 
                'ConditionImg': 'Rain.png'
            },
            82: {
                'ConditionText': 'Chuva violenta', 
                'ConditionImg': 'HeaveRain.png'
            },
            85: {
                'ConditionText': 'Chuva de neve Leve', 
                'ConditionImg': 'Snowy.svg'
            },
            86: {
                'ConditionText': 'Chuva de neve pesada', 
                'ConditionImg': 'SnowFall.png'
            },
            95: {
                'ConditionText': 'Trovoada moderada', 
                'ConditionImg': 'Storm.png'
            },
            96: {
                'ConditionText': 'Trovoada com granizo leve', 
                'ConditionImg': 'Hail.png'
            },
            99: {
                'ConditionText': 'Trovoada com granizo pesado', 
                'ConditionImg': 'Hail.png'
            }
        }
        if (conditionsCode[condition]){
            weatherCode = conditionsCode[condition]
        } else {
            weatherCode = conditionsCode[0]
        }

        return weatherCode
    }

    let weatherCode = getWeatheCondition(weatherCondition)
    const pathImg = '/weatherIcons/'
    return(
        <img src={`${pathImg}${weatherCode.ConditionImg}`} alt={weatherCode.ConditionText} />
    )
}