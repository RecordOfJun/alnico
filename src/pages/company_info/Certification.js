import "../Main.css"
import { MenuBar } from "../../components/MenuBar"
import "../ContentFrame.css"
import { Address } from "../../components/Address";
import img1 from "./img/sub1_27.gif"
import img2 from "./img/sub1_27_3.gif"
import img3 from "./img/sub1_27_4.gif"
import img4 from "./img/sub1_27_5.gif"
import { useState } from "react";
import Modal from "react-modal";
export const Certification = () => {
    const [isFirstModalOpen,setIsFirstModalOpen]=useState(false)
    const [isSecondModalOpen,setIsSecondModalOpen]=useState(false)
    const [isThirdModalOpen,setIsThirdModalOpen]=useState(false)
    const [isFourthModalOpen,setIsFourthModalOpen]=useState(false)
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
                    <div className="title_line" style={{width:"121px"}}></div>
                    <div className="certificate_grid_container">
                        {/* 1 */}
                        <div className="certification_card" onClick={()=>setIsFirstModalOpen(true)}>
                            <img className="certification_img" src={img1}/>
                            <div className="certification_title">기업부설연구소 인증서</div>
                        </div>
                        <Modal 
                        isOpen={isFirstModalOpen} 
                        style={{content:{width:"500px",height:"650px",margin:"auto",marginTop:"80px",display:"flex",alignItems:"center",justifyContent:"center"}}}
                        onRequestClose={()=>{setIsFirstModalOpen(false)}}
                        >
                            <img style={{width:"90%"}}src={img1}/>
                        </Modal>

                        {/* 2 */}
                        <div className="certification_card" onClick={()=>setIsSecondModalOpen(true)}>
                            <img className="certification_img" src={img2}/>
                            <div className="certification_title">이노비즈</div>
                        </div>
                        <Modal 
                        isOpen={isSecondModalOpen} 
                        style={{content:{width:"500px",height:"650px",margin:"auto",marginTop:"80px",display:"flex",alignItems:"center",justifyContent:"center"}}}
                        onRequestClose={()=>{setIsSecondModalOpen(false)}}
                        >
                            <img style={{width:"90%"}}src={img2}/>
                        </Modal>

                        {/* 3 */}
                        <div className="certification_card" onClick={()=>setIsThirdModalOpen(true)}>
                            <div className="certification_img">
                                <img src={img3} style={{width:"220px",border:"1px solid black"}}/>
                            </div>
                            <div className="certification_title">ISO 900</div>
                        </div>
                        <Modal 
                        isOpen={isThirdModalOpen} 
                        style={{content:{width:"500px",height:"650px",margin:"auto",marginTop:"80px",display:"flex",alignItems:"center",justifyContent:"center"}}}
                        onRequestClose={()=>{setIsThirdModalOpen(false)}}
                        >
                            <img style={{width:"90%"}}src={img3}/>
                        </Modal>

                        {/* 4 */}
                        <div className="certification_card" onClick={()=>setIsFourthModalOpen(true)} style={{marginTop:"100px"}}>
                            <div className="certification_img">
                                <img src={img4} style={{width:"220px",border:"1px solid black"}}/>
                            </div>
                            <div className="certification_title">특허증</div>
                        </div>
                        <Modal 
                        isOpen={isFourthModalOpen} 
                        style={{content:{width:"500px",height:"650px",margin:"auto",marginTop:"80px",display:"flex",alignItems:"center",justifyContent:"center"}}}
                        onRequestClose={()=>{setIsFourthModalOpen(false)}}
                        >
                            <img style={{width:"90%"}}src={img4}/>
                        </Modal>
                    </div>
                    <div style={{width:"100%",height:"100px"}}></div>
                </div>
            </div>

            <Address />
        </div>
    );
}