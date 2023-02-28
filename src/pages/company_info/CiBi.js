import "../Main.css"
import { MenuBar } from "../../components/MenuBar"
import "../ContentFrame.css"
import { Address } from "../../components/Address";
const CiBi=()=>{
    return(
        <div className="main_container">
            <MenuBar
            selected_page={4}
            />
            <div className="nav_bar_frame"></div>
            
            <div className="common_frame_container">
                <div className="common_content_container">
                    
                </div>
            </div>

            <Address/>
        </div>
    );
}
export default CiBi;