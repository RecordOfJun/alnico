import "./Main.css";
import mainImg from "../images/banner01.png";
import youtubeLink from "../images/utub.png";
import mapImg from "../images/map.jpg";
import { MenuBar } from "../components/MenuBar";
import { Address } from "../components/Address";
const Main=()=>{
    return(


            <div className="main_container">
                <MenuBar/>

                <img src={mainImg}style={{width:"100%", height:"800px"}}/>

                <div className="youtube_banner">
                    <a href="https://www.youtube.com/channel/UCSUW_pGH6ru65irfT4I7sog" target="_blank">
                        <div className="youtube_image">
                            <img src={youtubeLink} className="youtube_link"/>
                        </div>
                    </a>
                </div>

                <div className="alnico_product">
                    
                    <p style={{fontSize:"50px", fontWeight:"500",fontFamily:"맑은 고딕",marginTop:"100px"}}>Alnico Product</p>

                    <div className="product_content">

                        <div className="product_content_left">
                        </div>

                        <div className="product_content_right">
                            <div className="auto_system_image">
                            </div>
                            <p className="font_top">공장 자동화 시스템</p>
                            <p className="font_bottom">이송부터 측량, 데이터 관리까지 한 번에 가능합니다.</p>
                        </div>

                    </div>

                    <div className="product_content">

                        <div className="product_content_left">
                            <div className="pack_system_image">
                            </div>
                            <p className="font_top">포장 시스템</p>
                            <p className="font_bottom">단시간에 깔끔하고 완벽한 포장</p>
                        </div>

                        <div className="product_content_right">
                            <div className="">
                            </div>
                        </div>

                    </div>

                    <div style={{width:"100%",height:"500px",marginTop:"100px",display:"flex",flexDirection:"column"}}>
                        <div className="label_print_image"></div>
                        <p className="font_top">라벨 프린터</p>
                        <p className="font_bottom">알리코에서는 라벨 프린터기 판매 뿐만 아니라 A/S 서비스까지 제공합니다.</p>
                    </div>
                </div>
                <div>
                    <div className="alnico_map">
                        <h2 style={{color:"mintcream", fontWeight:"900", fontSize:"3rem"}}>오시는 길</h2>
                        <img src={mapImg}style={{width:"600px", height:"420px", marginTop:"80px"}}/>
                    </div>
                </div>
                
                <Address/>

            </div>
    );
};
export default Main;