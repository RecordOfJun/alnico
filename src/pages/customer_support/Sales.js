import "../Main.css"
import { MenuBar } from "../../components/MenuBar"

export const Sales=()=>{
    return(
        <div className="main_container">
            <MenuBar
            selected_page={8}
            />
        </div>
    );
}