import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import CiBi from './pages/company_info/CiBi';
import { CEOIntroduction } from './pages/company_info/CEOIntroduction';
import { Certification } from './pages/company_info/Certification';
import { Map } from './pages/company_info/Map';
import { CompanyHistory } from './pages/company_info/CompanyHistory';
import { Product } from './pages/business_info/Product';
import { Solution } from './pages/business_info/Solution';
import { AS } from './pages/customer_support/AS';
import { Documentary } from './pages/customer_support/Documentary';
import { Sales } from './pages/customer_support/Sales';
import { Recruitment } from './pages/recruitment_info/Recruitment';
import { Videos } from './pages/video/Videos';
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            {/* company_info */}
            <Route path="/company-info/ceo-introduction" element={<CEOIntroduction />}></Route> 
            <Route path="/company-info/certification" element={<Certification />}></Route> 
            <Route path="/company-info/cibi" element={<CiBi />}></Route> 
            <Route path="/company-info/map" element={<Map />}></Route> 
            <Route path="/company-info/history" element={<CompanyHistory />}></Route> 
            {/* business */}
            <Route path="/business/product" element={< Product/>}></Route>
            <Route path="/business/solution" element={< Solution/>}></Route> 
            {/* customer */}
            <Route path="/customer/as" element={<AS />}></Route>
            <Route path="/customer/documentay" element={< Documentary/>}></Route> 
            <Route path="/customer/sales" element={< Sales/>}></Route> 
            {/* recruitment */}
            <Route path="/recruitment" element={< Recruitment/>}></Route> 
            {/* video */}
            <Route path="/video" element={<Videos />}></Route> 
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
