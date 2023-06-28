import React from 'react'
import { useState,useMemo} from "react";

import './App.css'




//----------------------------------

import { BrowserRouter, Routes, Route ,Router} from "react-router-dom";
//import Login from "./Login";
const LazyLogin = React.lazy(()=>import('./Login'))
//import Register from "./Register";
const LazyRegister= React.lazy(()=>import('./Register'))
//import Home from "./Home";
const LazyHome= React.lazy(()=>import('./Home'))
//import KLdbPJ from './KLdbPJ';
const LazyKLdbPJ= React.lazy(()=>import('./KLdbPJ'))
//import KLdbPub from './KLdbPub';
const LazyKLdbPub= React.lazy(()=>import('./KLdbPub'))
//import UpPub from "./UpPub";
const LazyUpPub= React.lazy(()=>import('./UpPub'))
//import UpPJ from "./UpPJ";
const LazyUpPJ= React.lazy(()=>import('./UpPJ'))
//import MUser from "./MUser";
const LazyMUser= React.lazy(()=>import('./MUser'))
//import MProj from "./MProj";
const LazyMProj= React.lazy(()=>import('./MProj'))
//import MPub from "./MPub";
const LazyMPub= React.lazy(()=>import('./MPub'))
//import MUpPJ from "./MUpPJ";
const LazyMUpPJ= React.lazy(()=>import('./MUpPJ'))
//import MUpPub from "./MUpPub";
const LazyMUpPub= React.lazy(()=>import('./MUpPub'))
//import AdminLogin from "./AdminLogin";
const LazyAdminLogin= React.lazy(()=>import('./AdminLogin'))
//import DesPJ from "./DesPJ";
const LazyDesPJ= React.lazy(()=>import('./DesPJ'))
//import DesPub from "./DesPub";
const LazyDesPub= React.lazy(()=>import('./DesPub'))

//import Profile from "./Profile";
const LazyProfile= React.lazy(()=>import('./Profile'))
//import EditProfile from "./EditProfile";
const LazyEditProfile= React.lazy(()=>import('./EditProfile'))
//import MDesPJ from "./MDesPJ";
const LazyMDesPJ= React.lazy(()=>import('./MDesPJ'))
//import MDesPub from "./MDesPub";
const LazyMDesPub= React.lazy(()=>import('./MDesPub'))
//import SearchMember from "./SearchMember";
const LazySearchMember= React.lazy(()=>import('./SearchMember'))
const LazyMEditProfile_admin= React.lazy(()=>import('./MEditProfile'))
const LazyEditData= React.lazy(()=>import('./EditData'))
const LazyBar_Chart= React.lazy(()=>import('./Bar_Chart'))
const LazyBar_Chart_Pub= React.lazy(()=>import('./Bar_Chart_Pub'))
const LazyBar_chart_PJ_SL_yaer= React.lazy(()=>import('./Bar_chart_PJ_SL_yaer'))
const LazyBar_chart_Pub_SL_yaer= React.lazy(()=>import('./Bar_chart_Pub_SL_yaer'))



function App() {
  
  
  return (
    // <div className="App">   
    // {<Tan/>}
    // {/*<Login2/>*/}
    // {/*<PersistentDrawerLeft/>*/}
    // </div>
    
    <BrowserRouter >
    
      <Routes>
        <Route path='/' element={<React.Suspense fallback ='Loading...'  ><LazyHome/></React.Suspense>} />
        <Route path='/Login' element={<React.Suspense fallback ='Loading...'  ><LazyLogin/></React.Suspense>} />
        <Route path='/Register' element={<React.Suspense fallback ='Loading...'  ><LazyRegister/></React.Suspense>} />
        <Route path='/Home' element={<React.Suspense fallback ='Loading...'  ><LazyHome/></React.Suspense>} />
        <Route path='/KLdbPJ' element={<React.Suspense fallback ='Loading...'  ><LazyKLdbPJ/></React.Suspense>} />
        <Route path='/KLdbPub' element={<React.Suspense fallback ='Loading...'  ><LazyKLdbPub/></React.Suspense>} />
        <Route path='/UpPub' element={<React.Suspense fallback ='Loading...'  ><LazyUpPub/></React.Suspense>} />
        <Route path='/UpPJ' element={<React.Suspense fallback ='Loading...'  ><LazyUpPJ/></React.Suspense>} />
        <Route path='/MUser' element={<React.Suspense fallback ='Loading...'  ><LazyMUser/></React.Suspense>} />
        <Route path='/MProj' element={<React.Suspense fallback ='Loading...'  ><LazyMProj/></React.Suspense>} />
        <Route path='/MPub' element={<React.Suspense fallback ='Loading...'  ><LazyMPub/></React.Suspense>} />
        <Route path='/MUpPJ' element={<React.Suspense fallback ='Loading...'  ><LazyMUpPJ/></React.Suspense>} />
        <Route path='/MUpPub' element={<React.Suspense fallback ='Loading...'  ><LazyMUpPub/></React.Suspense>} />
        <Route path='/AdminLogin' element={<React.Suspense fallback ='Loading...'  ><LazyAdminLogin/></React.Suspense>} />
        
        <Route path='/DesPJ' element={<React.Suspense fallback ='Loading...'  ><LazyDesPJ/></React.Suspense>} />
        <Route path='/DesPub' element={<React.Suspense fallback ='Loading...'  ><LazyDesPub/></React.Suspense>} />
        <Route path='/Profile' element={<React.Suspense fallback ='Loading...'  ><LazyProfile/></React.Suspense>} />
        <Route path='/EditProfile' element={<React.Suspense fallback ='Loading...'  ><LazyEditProfile/></React.Suspense>} />
        <Route path='/MDesPJ' element={<React.Suspense fallback ='Loading...'  ><LazyMDesPJ/></React.Suspense>} />
        <Route path='/MDesPub' element={<React.Suspense fallback ='Loading...'  ><LazyMDesPub/></React.Suspense>} />
        <Route path='/SearchMember' element={<React.Suspense fallback ='Loading...'  ><LazySearchMember/></React.Suspense>} />
        <Route path='/MEditProfile' element={<React.Suspense fallback ='Loading...'  ><LazyMEditProfile_admin/></React.Suspense>} />
        <Route path='/EditData' element={<React.Suspense fallback ='Loading...'  ><LazyEditData/></React.Suspense>} />
        <Route path='/Bar_chart' element={<React.Suspense fallback ='Loading...'  ><LazyBar_Chart/></React.Suspense>} />
        <Route path='/Bar_Chart_Pub' element={<React.Suspense fallback ='Loading...'  ><LazyBar_Chart_Pub/></React.Suspense>} />
        <Route path='/Bar_chart_PJ_SL_yaer' element={<React.Suspense fallback ='Loading...'  ><LazyBar_chart_PJ_SL_yaer/></React.Suspense>} />
        <Route path='/Bar_chart_Pub_SL_yaer' element={<React.Suspense fallback ='Loading...'  ><LazyBar_chart_Pub_SL_yaer/></React.Suspense>} />
      </Routes>

      
      

      </BrowserRouter>
      

  
  )
}

export default App
