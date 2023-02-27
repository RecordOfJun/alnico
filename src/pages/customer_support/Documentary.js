import "../Main.css"
import { MenuBar } from "../../components/MenuBar"

export const Documentary=()=>{
    return(
        <div className="main_container">
            <MenuBar
            selected_page={10}
            />
        </div>
    );
}