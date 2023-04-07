import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from '../components/common'
import Footer from '../components/common/Footer'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Services from '../pages/Services'
import ScrollToTop from '../components/common/ScrollToTop'
import ScrollTop from '../components/common/ScrollTop'
import YoutubeVideo from '../pages/YoutubeVideo'
import CookiePolicy from '../pages/policy/CookiePolicy'
import PrivacyPolicy from '../pages/policy/PrivacyPolicy'
import TermsAndCondition from '../pages/policy/TermsAndCondition'

const Layout = ({ children }) => {
    return (
        <>
            <Index />
            {children}
            <ScrollToTop />
        </>
    )
}

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollTop />
            <Routes>
                <Route path='/' element={<Layout children={<Home />} />} />
                <Route path='/Home' element={<Layout children={<Home />} /> } />
                <Route path='/Movies' element={<Layout children={<Movies />} />} />
                <Route path='/About' element={<Layout children={<About />} /> } />
                <Route path='/Contact' element={<Layout children={<Contact />} />} />
                <Route path='/Services' element={ <Layout children={<Services />} /> } />
                <Route path='/video/:videoId' element={<YoutubeVideo />} />
                <Route path="/policy" >
                    
                    <Route path="/policy/cookie-policy" element={<Layout children={<CookiePolicy />}/>} />
                    <Route path="/policy/privacy-policy" element={<Layout children={<PrivacyPolicy />} />} />
                    <Route path="/policy/Terms-and-condition" element={ <Layout children={<TermsAndCondition />} /> } />
                    
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
// const AppRoutes = () => {
//     return (
//         <BrowserRouter>
//             <Index />
//             <ScrollTop />
//             <Routes>
//                 <Route path='/' element={<Home />} />
//                 <Route path='/Home' element={<Home />} />
//                 <Route path='/Movies' element={<Movies />} />
//                 <Route path='/About' element={<About />} />
//                 <Route path='/Contact' element={<Contact />} />
//                 <Route path='/Services' element={<Services />} />
//                 <Route path='/video/:videoId' element={<YoutubeVideo />} />
                
//             </Routes>
//             <ScrollToTop />
//             <Footer />
//         </BrowserRouter>
//     );
// };

export default AppRoutes;
