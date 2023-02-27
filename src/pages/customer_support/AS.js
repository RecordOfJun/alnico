import "../Main.css"
import { MenuBar } from "../../components/MenuBar"

export const AS=()=>{
    return(
        <div className="main_container">
            <MenuBar
            selected_page={9}
            />
        </div>
    );
}