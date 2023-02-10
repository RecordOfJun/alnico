import "./Address.css"

export const Address=()=>{
    return(
        // <footer id="footer">

        //     <div class="footer_con">
        //         <div class="wrap cf">
        //             <address class="address">
        //                 <span class="address_text">경기도 군포시 엘에스로 182번길 22(산본동)</span>
        //                 <span class="tel">Tel. 031-427-4071</span>
        //                 <span>Fax. 031-427-4567</span>
        //                 <span>E-mail. alnico@alnico.co.kr</span>
        //             </address>
        //             <p class="copyright">COPYRIGHT©2021. ALNICO All Rights Reserved</p>
        //         </div>
        //     </div>
        // </footer>
        <div>
        <div className="bottom_address">
            <span class="address_span">경기도 군포시 엘에스로 182번길 22(산본동)</span>
            <span class="address_span">Tel. 031-427-4071</span>
            <span class="address_span">Fax. 031-427-4567</span>
            <span class="address_span">E-mail. alnico@alnico.co.kr</span>
            <p class="copyright">COPYRIGHT©2021. ALNICO All Rights Reserved</p>
        </div>
        </div>
    );
};