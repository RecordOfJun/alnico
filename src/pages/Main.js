import "./Main.css";
import mainImg from "../images/banner01.png";
import youtubeLink from "../images/utub.png";
import autoImg from "../images/auto_system.png";
const Main=()=>{
    return(
        <div>
        <div className="top_bar">
            {/* <img src="" */}
        </div>
        <div className="main_container">

            <img src={mainImg}style={{width:"100%", height:"800px"}}/>

            <div className="youtube_banner">
                <a href="https://www.youtube.com/channel/UCSUW_pGH6ru65irfT4I7sog" target="_blank">
                    <div className="youtube_image">
                        <img src={youtubeLink} style={{width:"700px"}}/>
                    </div>
                </a>
            </div>

            <div className="alnico_product">
                
                <p style={{fontSize:"50px", fontWeight:"500",fontFamily:"맑은 고딕",marginTop:"100px"}}>Alnico Product</p>

                <div className="product_content1">
                    <div className="product_content1-1">
                        hello
                    </div>
                    <div className="product_content1-2">
                        <div className="auto_image">
                            {/* <img src={autoImg} style={{width:"480px", height:"250px"}} /> */}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    );
};
export default Main;