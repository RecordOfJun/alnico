import "../Main.css"
import { MenuBar } from "../../components/MenuBar"

export const CompanyHistory=()=>{
    return(
        <div className="main_container">
            <MenuBar
            selected_page={2}
            />
        </div>
    );
}