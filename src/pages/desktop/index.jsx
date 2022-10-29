import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Date } from "../../components/Date";
import { Locate } from "../../components/Locate";
import { Modal } from "../../components/modal";

export function DesktopView(){
    const modal = document.querySelector('dialog');
    const date = {
        'day': '19',
        'mounth': '05',
        'year': '2002'
    }

    return(
        <>
            <Modal>
                <Button clickEvent={() => {
                    modal.close()
                }}>X
                </Button>
               
            </Modal>
            <div className="locate--field">
                <Locate />
                <Button clickEvent={() => {
                    modal.showModal()
                }}>Buscar</Button>
            </div>
            <Date date={date} />
            <Card />
            
        </>
        
    )
}