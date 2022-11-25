import './style.scss'

export function Input({inputValue, handleChange}){
    return(
        <input type="text" value={inputValue} onChange={handleChange}/>
    )
}
