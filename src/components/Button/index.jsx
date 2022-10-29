
export function Button({children, clickEvent}){
    return(
        <button onClick={clickEvent}>
            {children}
        </button>
    )
}