import './style.scss';

export function Button({children, clickEvent, buttonStyle}){
    
    return(
        <button onClick={clickEvent} style={buttonStyle} className="button">
            {children}
        </button>
    )
}