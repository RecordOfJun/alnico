import "../Main.css"
import { MenuBar } from "../../components/MenuBar"
import "../ContentFrame.css"
import { Address } from "../../components/Address";
import Sign from "./img/CEO_SIGN.png"
export const CEOIntroduction=()=>{
    return(
        <div className="main_container">

            <MenuBar
            selected_page={1}
            />
            <div className="nav_bar_frame"></div>

            <div className="common_frame_container">
                <div className="common_content_container">
                    <div style={{width:"100%",height:"100px"}}></div>
                    <span className="content_title">CEO인사말</span>
                    <div className="title_line"></div>
                    <span className="content_title" style={{fontWeight:"400",marginTop:"50px"}}>여유와 풍요로움이 함께 하는 <span style={{color:"red"}}>고객만족</span>을 실현하겠습니다.</span>
                    <div className="text_area">
                        안녕하십니까<br></br>
                        자동화 산업을 선도해 가는 알리코입니다.<br></br>
                        알리코는 1994년 창립한 이래 꾸준한 발전과 성장을 이루어 왔습니다.<br></br>
                        <br></br>
                        알리코는 처음 자동화 사업을 시작하면서부터 항상 고객의 어려움을 알리코의 어려움으로 생각하며
                        시작부터 끝까지 고객의 힘이 되겠다는 자세로 사업에 임해왔습니다. 이 자세를 창립시기부터 현재까지
                        그 초심을 잃지 않기 위해 노력하고 있습니다.<br></br>
                        <br></br>
                        라벨 구매부터 미래 산업의 필수인 공장 자동화 시스템까지 알리코에서 해결하실 수 있도록
                        원스텝 솔루션을 제공해드립니다.<br></br>
                        <br></br>
                        귀사의 미래에 힘이 되는 파트너로서 항상 함께 하는 알리코가 되겠습니다.<br></br>
                        <br></br>
                        감사합니다.<br></br>
                    </div>
                    <div style={{width:"100%",marginTop:"100px"}}>
                        <img src={Sign} style={{width:"200px",float:"right",marginRight:"60px"}}/>
                    </div>
                    <div style={{width:"100%",height:"100px"}}></div>
                </div>
            </div>

            <Address/>
        </div>
    );
}