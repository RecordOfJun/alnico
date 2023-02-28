import "../Main.css"
import { MenuBar } from "../../components/MenuBar"
import "../ContentFrame.css"
import { Address } from "../../components/Address";
export const CompanyHistory=()=>{
    return(
        <div className="main_container">
            <MenuBar
            selected_page={2}
            />
            <div className="nav_bar_frame"></div>
            
            <div className="common_frame_container">
                <div className="common_content_container">
                <div style={{width:"100%",height:"100px"}}></div>
                    <span className="content_title">회사연혁</span>
                    <div className="title_line" style={{width:"140px"}}></div>

                    <span className="content_title" style={{fontWeight:"600",marginTop:"50px"}}>2000's ~</span>
                    <div className="history_area">
                        <p><span className="history_year">2013년</span> 삼성 SDS : 건설업 등록</p><br></br>
                        <p><span className="history_year">2011년</span> R&D 연구소 설립, 기술혁신형 중소기업 (INNO-BIZ) 등록</p><br></br>
                        <p><span className="history_year">2009년</span> 공장자동화 물류시스템 도입</p><br></br>
                        <p><span className="history_year">2006년</span> 현 사옥 준공 및 회사이전</p><br></br>
                        <p><span className="history_year">2005년</span> Bar Code LaBel Print Applicator 실용신안 획득</p><br></br>
                        <p><span className="history_year">2004년</span> ISO 9001:2000/ksA9001:1001 인증 획득</p><br></br>
                        <p><span className="history_year">2003년</span> Bar Code LaBel Print Applicator 개발</p><br></br>
                        <p><span className="history_year">2002년</span> 고속 Card Feeder 및 고속 Label 부착기 개발판매(10매/sec)</p><br></br>
                        <p><span className="history_year">2000년</span> 다품종 원주형 Lavel Printing & Applicator 개발(제품 공급 및 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;부착위치 자동조절:녹십자)</p>
                    </div>
                    <span className="content_title" style={{fontWeight:"600",marginTop:"50px"}}>1990's ~</span>
                    <div className="history_area">
                        <p><span className="history_year">1999년</span> Auto Labeler 개발 및 자동화 시스템 사업 시작</p><br></br>
                        <p><span className="history_year">1997년</span> (주)삼익THK 해외개발부 재고 및 영업권 인수</p><br></br>
                        <p><span className="history_year">1994년</span> 회사설립. Cording 분야 및 Label Printer M/C 판매</p><br></br>
                    </div>
                </div>
                <div style={{width:"100%",height:"100px"}}></div>
            </div>

            <Address/>
        </div>
    );
}