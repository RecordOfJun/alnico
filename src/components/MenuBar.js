import "./MenuBar.css"
import logoImg from "../images/marklogo.png"
export const MenuBar=()=>{
    return(
        // <div className="top_bar">
        //     <img src={logoImg} style={{width:"230px", height:"68px"}}/>
        // </div>
        <header id="header">
            <div class="header_top">
                <h1 class="logo"><a href="#">알리코</a></h1>
                <div class="gnbbox cf">
                    <div class="gnbLBox fl cf">
                        <div class="sitebox fl">
                            <div class="sitemap_btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="lnb">
                <nav class="menu after eachdown">
                    <h2 class="skip">메뉴</h2>
                    <div class="depth depth1">
                        <ul class="depth_list depth1_list cf">
                            <li class="depth_item depth1_item">
                                <a href="#none" target="_self" class="depth_text depth1_text"><span>알리코 소개</span></a>
                                    <div class="depth depth2 cf">
                                        <ul class="depth_list depth2_list fl">
     
                                            <li class="depth_item depth2_item cf">
                                                <a href="#none" class="depth_text depth2_text fl" target="_self"><span>CEO인사말</span></a>
                                            </li>
                
                                            <li class="depth_item depth2_item cf">
                                                <a href="#none" class="depth_text depth2_text fl" target="_self"><span>사업개요</span></a>
                                            </li>
                
                                            <li class="depth_item depth2_item cf">
                                                <a href="#none" class="depth_text depth2_text fl" target="_self"><span>회사연혁</span></a>
                                            </li>
                
                                            <li class="depth_item depth2_item cf">
                                                <a href="#none" class="depth_text depth2_text fl" target="_self"><span>인증서</span></a>
                                            </li>
                                            
                                            <li class="depth_item depth2_item cf">
                                                <a href="#none" class="depth_text depth2_text fl" target="_self"><span>CI/BI소개</span></a>
                                            </li>
                                            
                                            <li class="depth_item depth2_item cf">
                                                <a href="#none" class="depth_text depth2_text fl" target="_self"><span>찾아오시는 길</span></a>
                                            </li>

                                        </ul>
                                    </div>
                            </li>

                            <li class="depth_item depth1_item has">
                                <a href="#none" target="_self" class="depth_text depth1_text"><span>사업분야</span></a>
                                    <div class="depth depth2 cf">
                                        <div class="menu_title fl">
                                            <div class="innerbox">
                                                <div class="titlebox">
                                                    <p>ALNICO</p>
                                                    <div class="title">사업분야</div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul class="depth_list depth2_list fl">
                                            <li class="depth_item depth2_item cf">
                                                <a href="#none" class="depth_text depth2_text fl" target="_self"><span>주요사업분야</span></a>
                                            </li>
                                            
                                            <li class="depth_item depth2_item cf">
                                                <a href="#none" class="depth_text depth2_text fl" target="_self"><span>주요사업실적</span></a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                            </li>
            
                            <li class="depth_item depth1_item has">
                                <a href="#none" target="_self" class="depth_text depth1_text"><span>제품&솔루션</span></a>
                                    <div class="depth depth2 cf">
                                        <div class="menu_title fl">
                                            <div class="innerbox">
                                                <div class="titlebox">
                                                    <p>ALNICO</p>
                                                    <div class="title">제품&솔루션</div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul class="depth_list depth2_list fl">
                                            
                                            <li class="depth_item depth2_item cf">
                                                <a href="#none" class="depth_text depth2_text fl" target="_self"><span>제품</span></a>
                                                
                                            </li>
                                                                                
                                            <li class="depth_item depth2_item cf">
                                                <a href="#none" class="depth_text depth2_text fl" target="_self"><span>솔루션</span></a>

                                            </li>
                
                                        </ul>
                                    </div>
                            </li>
            
                            <li class="depth_item depth1_item has">
                                <a href="#none" target="_self" class="depth_text depth1_text"><span>고객지원</span></a>
                                    <div class="depth depth2 cf">
                                        <div class="menu_title fl">
                                            <div class="innerbox">
                                                <div class="titlebox">
                                                    <p>ALNICO</p>
                                                    <div class="title">고객지원</div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul class="depth_list depth2_list fl">
                                        
                                            <li class="depth_item depth2_item cf">
                                                <a href="#none" class="depth_text depth2_text fl" target="_self"><span>영업상담</span></a>
                                                
                                            </li>
                                        
                                            <li class="depth_item depth2_item cf">
                                                <a href="#none" class="depth_text depth2_text fl" target="_self"><span>A/S상담</span></a>

                                            </li>
                
                                            <li class="depth_item depth2_item cf">
                                                <a href="#none" class="depth_text depth2_text fl" target="_self"><span>자료실</span></a>

                                            </li>

                                        </ul>
                                    </div>
                            </li>

                            <li class="depth_item depth1_item has">
                                <a href="https://www.youtube.com/channel/UCSUW_pGH6ru65irfT4I7sog" target="_blank" class="depth_text depth1_text"><span>Youtube</span></a>
                            </li>

                        </ul>
                    </div>                
                </nav>                                    
            </div>
        </header>
    );
};