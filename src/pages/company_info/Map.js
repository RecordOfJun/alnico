import "../Main.css"
import { MenuBar } from "../../components/MenuBar"
import "../ContentFrame.css"
import { Address } from "../../components/Address";
import mapImg from "../../images/map.jpg";
export const Map=()=>{
    return(
        <div className="main_container">
            <MenuBar
            selected_page={5}
            />
            <div className="nav_bar_frame"></div>
            
            <div className="common_frame_container">
                <div className="common_content_container">
                    <div style={{width:"100%",height:"100px"}}></div>
                    <span className="content_title">찾아오시는길</span>
                    <div className="title_line" style={{width:"180px"}}></div>
                    <div className="text_area" style={{fontSize:"17px", marginTop:"50px"}}>경기도 군포시 엘에스로 182번길 22(산본동) / Tel. 031-427-4071 / Fax. 031-427-4567</div>
                    <img src={mapImg} style={{width:"660px", height:"auto",marginTop:"10px",marginLeft:"70px",border:"0.5px solid black", borderRadius:"5px"}}/>
                    <div style={{width:"100%",height:"100px"}}></div>
                </div>
            </div>

            <Address/>
        </div>
    );
}