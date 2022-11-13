import { useContext } from 'react'
import { AppContext } from '../../../context/AppContext'
import './style.scss'

export function Input(){
    const {locate, setLocate} = useContext(AppContext);
    return(
        <input type="text" value={locate} onChange={(event) => setLocate(event.target.value)}/>
    )
}