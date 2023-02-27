import "../css/header.css"
import "../css/media.css"
import {Helmet} from "react-helmet"
export const MenuBar=(props)=>{
    return(
        <>
        <header id="header">
            <Helmet>
                <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
                <script src="../js/jquery-1.12.4.min.js" type="text/javascript"></script>
                <script src="../js/jquery-ui-1.10.4.custom.min.js" type="text/javascript"></script>
                <script src="../js/jquery.easing.1.3.js" type="text/javascript"></script>
                <script src="../js/prefixfree.min.js" type="text/javascript"></script>
                <script src="../js/script.js" type="text/javascript"></script>
            </Helmet>
            <div class="header_top">
                <h1 class="logo"><a href="/">알리코</a></h1>
            </div>


            <div class="lnb">
                <nav class="menu after eachdown">
                    <h2 class="skip">메뉴</h2>
                    <div class="depth depth1">
                        <ul class="depth_list depth1_list cf">
                            <li class="depth_item depth1_item" onMouseEnter={()=>{}}>
                                <a href="/company-info/ceo-introduction" target="_self" class="depth_text depth1_text" id="company-info" style={props.selected_page===1||props.selected_page===2||props.selected_page===3||props.selected_page===4||props.selected_page===5?{color:"red"}:{}}><span>알리코 소개</span></a>
                                    <div class="depth depth2 cf">
                                        <ul class="depth_list depth2_list fl">
     
                                            <li class="depth_item depth2_item cf" >
                                                <a href="/company-info/ceo-introduction" class="depth_text depth2_text fl" target="_self" style={props.selected_page===1?{color:"red"}:{}}><span>CEO인사말</span></a>
                                            </li>
                
                                            <li class="depth_item depth2_item cf">
                                                <a href="/company-info/history" class="depth_text depth2_text fl" target="_self" style={props.selected_page===2?{color:"red"}:{}}><span>회사연혁</span></a>
                                            </li>
                
                                            <li class="depth_item depth2_item cf">
                                                <a href="/company-info/certification" class="depth_text depth2_text fl" target="_self" style={props.selected_page===3?{color:"red"}:{}}><span>인증서</span></a>
                                            </li>
                                            
                                            <li class="depth_item depth2_item cf">
                                                <a href="/company-info/cibi" class="depth_text depth2_text fl" target="_self" style={props.selected_page===4?{color:"red"}:{}}><span>CI/BI소개</span></a>
                                            </li>
                                            
                                            <li class="depth_item depth2_item cf">
                                                <a href="/company-info/map" class="depth_text depth2_text fl" target="_self" style={props.selected_page===5?{color:"red"}:{}}><span>찾아오시는 길</span></a>
                                            </li>

                                        </ul>
                                    </div>
                            </li>

                            <li class="depth_item depth1_item has">
                                <a href="/business/product" target="_self" class="depth_text depth1_text" style={props.selected_page===6||props.selected_page===7?{color:"red"}:{}}><span>사업분야</span></a>
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
                                                <a href="/business/product" class="depth_text depth2_text fl" target="_self" style={props.selected_page===6?{color:"red"}:{}}><span>제품</span></a>
                                            </li>
                                            
                                            <li class="depth_item depth2_item cf">
                                                <a href="/business/solution" class="depth_text depth2_text fl" target="_self" style={props.selected_page===7?{color:"red"}:{}}><span>솔루션</span></a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                            </li>
            
                            <li class="depth_item depth1_item has">
                                <a href="/video" target="_self" class="depth_text depth1_text" style={props.selected_page===11?{color:"red"}:{}}><span>동영상</span></a>
                                    <div class="depth depth2 cf">
                                        <div class="menu_title fl">
                                            <div class="innerbox">
                                                <div class="titlebox">
                                                    <p>ALNICO</p>
                                                    <div class="title">동영상</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </li>
            
                            <li class="depth_item depth1_item has">
                                <a href="/customer/sales" target="_self" class="depth_text depth1_text" style={props.selected_page===8||props.selected_page===9||props.selected_page===10?{color:"red"}:{}}><span>고객지원</span></a>
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
                                                <a href="/customer/sales" class="depth_text depth2_text fl" target="_self" style={props.selected_page===8?{color:"red"}:{}}><span>영업상담</span></a>
                                                
                                            </li>
                                        
                                            <li class="depth_item depth2_item cf">
                                                <a href="/customer/as" class="depth_text depth2_text fl" target="_self" style={props.selected_page===9?{color:"red"}:{}}><span>A/S상담</span></a>

                                            </li>
                
                                            <li class="depth_item depth2_item cf">
                                                <a href="/customer/documentay" class="depth_text depth2_text fl" target="_self" style={props.selected_page===10?{color:"red"}:{}}><span>자료실</span></a>

                                            </li>

                                        </ul>
                                    </div>
                            </li>

                            {/* <li class="depth_item depth1_item has">
                                <a href="https://www.youtube.com/channel/UCSUW_pGH6ru65irfT4I7sog" target="_blank" class="depth_text depth1_text"><span>Youtube</span></a>
                            </li> */}
                            <li class="depth_item depth1_item has">
                                <a href="/recruitment" target="_self" class="depth_text depth1_text" style={props.selected_page===12?{color:"red"}:{}}><span>채용정보</span></a>
                                    <div class="depth depth2 cf">
                                        <div class="menu_title fl">
                                            <div class="innerbox">
                                                <div class="titlebox">
                                                    <p>ALNICO</p>
                                                    <div class="title">채용정보</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </li>

                        </ul>
                    </div>
                </nav>
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
        </header>

<div id="sitemap">
<div class="bgopacity"></div>
<a href="#none" class="sitmap_close_button"><span></span><span></span></a>
<div class="moclapop cf">
    <ul class="logo fl">
        <li><a href="/">로고</a></li>
    </ul>


    <div class="contents cf">
        <div class="con1 fl">
            <ul>
                <li class="maintit"><a href="/company-info/ceo-introduction">알리코 소개</a></li>
                <li class="subtit titTop">
                    <a href="/company-info/ceo-introduction" style={props.selected_page===1?{color:"red"}:{}}>CEO인사말</a>
                </li>
                {/* <li class="subtit">
                    <a href="#none">사업개요</a>
                </li> */}
                <li class="subtit">
                    <a href="/company-info/history" style={props.selected_page===2?{color:"red"}:{}}>회사연혁</a>
                </li>
                <li class="subtit">
                    <a href="/company-info/certification" style={props.selected_page===3?{color:"red"}:{}}>인증서</a>
                </li>
                <li class="subtit">
                    <a href="/company-info/cibi" style={props.selected_page===4?{color:"red"}:{}}>CI/BI소개</a>
                </li>
                <li class="subtit">
                    <a href="/company-info/map" style={props.selected_page===5?{color:"red"}:{}}>찾아오시는 길</a>
                </li>
            </ul>
        </div>

            <div class="con2 fl">
                <ul>
                    <li class="maintit"><a href="/business/product">사업분야</a></li>
                    <li class="subtit titTop">
                        <a href="/business/product" style={props.selected_page===6?{color:"red"}:{}}>제품</a>
                    </li>
                    <li class="subtit">
                        <a href="/business/solution" style={props.selected_page===7?{color:"red"}:{}}>솔루션</a>
                    </li>
                </ul>
            </div>
            <div class="con3 fl">
                <ul>
                    <li class="maintit"><a href="/customer/sales">고객지원</a></li>
                    <li class="subtit titTop">
                        <a href="/customer/sales" style={props.selected_page===8?{color:"red"}:{}}>영업상담</a>
                    </li>
                    <li class="subtit">
                        <a href="/customer/as" style={props.selected_page===9?{color:"red"}:{}}>A/S상담</a>
                    </li>
                    <li class="subtit">
                        <a href="/customer/documentay" style={props.selected_page===10?{color:"red"}:{}}>자료실</a>
                    </li>
                </ul>
            </div>
            <div class="con4 fl">
                <ul>
                    <li class="maintit"><a href="/video">기타정보</a></li>
                    <li class="subtit titTop">
                        <a href="/video" style={props.selected_page===11?{color:"red"}:{}}>동영상</a>
                    </li>
                    <li class="subtit">
                        <a href="/recruitment" style={props.selected_page===12?{color:"red"}:{}}>채용정보</a>
                    </li>
                </ul>
            </div>

    </div>
</div>

</div>
</>
    );
};