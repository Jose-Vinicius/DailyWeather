import { forwardRef } from "react";

import './style.scss'

export const Modal = forwardRef(({children}, ref) => {
    return(
        <dialog ref={ref} className="Modal">
            {children}
        </dialog>
    )
})