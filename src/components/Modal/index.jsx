import { Button } from "../Button";

export function Modal({children}){
    const modal = document.querySelector('dialog');
    return(
        <dialog>
            {children}
        </dialog>
    )
}