import "../Main.css"
import { MenuBar } from "../../components/MenuBar"

export const Product=()=>{
    return(
        <div className="main_container">
            <MenuBar
            selected_page={6}
            />
        </div>
    );
}