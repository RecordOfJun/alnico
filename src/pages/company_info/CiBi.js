import "../Main.css"
import { MenuBar } from "../../components/MenuBar"
import "../ContentFrame.css"
import { Address } from "../../components/Address";
import { GoPrimitiveDot } from 'react-icons/go';
import logo from "../../images/logo.png"
const CiBi=()=>{
    return(
        <div className="main_container">
            <MenuBar
            selected_page={4}
            />
            <div className="nav_bar_frame"></div>
            
            <div className="common_frame_container">
                <div className="common_content_container">
                    <div style={{width:"100%",height:"100px"}}></div>
                    <span className="content_title">CI / BI</span>
                    <div className="title_line" style={{width:"121px"}}></div>
                    <div style={{width:"100%",height:"50px"}}></div>
                    <span className="content_title">ALNICO</span>
                    <div className="text_area">
                        영문 회사명인 <span style={{fontWeight:"bold"}}>ALNICO는 AL + NI + CO</span>를 합성한 이름입니다.<br></br>
                        <span style={{fontWeight:"bold",color:"red"}}>AL(ALUMINUM), NI(NICKEL), CO(COBALT)</span> 이 세 물질은 서로 뭉쳐서 영구자석용 자성합금으로 사용되고 있습니다.<br></br>
                        이들은 분리되면 그 힘이 대단하지 않지만 하나가 되면 강한 자성을 할뷔합니다.<br></br>
                        이러첨 회사의 모든 분야가 하나로 뭉쳐서 강한 힘을 발휘하고자 하는 의지가 담여깄습니다.<br></br>
                        또한 이 회사명은 세상 끝까지 알리코를 알리고자 하는 염원과 영구적으로 계속 발전하리라는 다짐이 들어있습니다.<br></br>
                    </div>

                    <div style={{width:"100%",height:"130px"}}></div>
                    <span className="content_title"><img src={logo} style={{height:"50px"}}/></span>
                    <div className="text_area">
                        이 로고는 <span style={{fontWeight:"bold",color:"red"}}>회사의 지속적 성장과 항상 고객 앞에서 친절과 봉사의 정신으로 임한다는 정신</span>을 이미지화하고
                        형상화 한 것입니다.<br></br>
                        <br></br>
                        작은 것에서부터 시작하여 점차 발전해 나감과 동시에 경영자에서부터 사원에 이르기까지<br></br>
                        유기적으로 하나로 연결되어 있다는 의미도 함께 있습니다.<br></br>
                        <span style={{fontWeight:"bold"}}>이 로고처럼 알리코는 겸손과 화합정신으로 회사를 성장시켜 나갈 것입니다.</span>
                    </div>
                    <div style={{width:"100%",height:"150px"}}></div>
                </div>
            </div>

            <Address/>
        </div>
    );
}
export default CiBi;