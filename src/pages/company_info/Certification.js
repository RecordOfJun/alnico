import "../Main.css"
import { MenuBar } from "../../components/MenuBar"
import "../ContentFrame.css"
import { Address } from "../../components/Address";
export const Certification = () => {
    return (
        <div className="main_container">
            <MenuBar
                selected_page={3}
            />

            <div className="nav_bar_frame"></div>

            <div className="common_frame_container">
                <div className="common_content_container">
                    <div style={{width:"100%",height:"100px"}}></div>
                    <span className="content_title">인증서</span>
                        <div className="title_line"></div>
                    </div>
                    <div style={{width:"100%",height:"100px"}}></div>
            </div>

            <Address />
        </div>
    );
}