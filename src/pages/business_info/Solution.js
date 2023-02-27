import "../Main.css"
import { MenuBar } from "../../components/MenuBar"

export const Solution=()=>{
    return(
        <div className="main_container">
            <MenuBar
            selected_page={7}
            />
        </div>
    );
}