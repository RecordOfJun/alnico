import "../Main.css"
import { MenuBar } from "../../components/MenuBar"

export const Map=()=>{
    return(
        <div className="main_container">
            <MenuBar
            selected_page={5}
            />
        </div>
    );
}