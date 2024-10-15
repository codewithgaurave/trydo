import React from 'react'
import TrydoNav from '../task2/TrydoNav';
import Card from '../task2/Card';
import Services from '../task2/Services';
import Work from '../task2/work';
import WorkingProcess from '../task2/Workingprocess';
import ManagingTeam from '../task2/ManagingTeam';
import AboutSection from '../task2/AboutSection';
import LogoSection from '../task2/LogoSection';
import PricingSection from '../task2/PricingSection';
import Footer from '../task2/Footer';
import Lets from '../task2/Lets';
import LatestSection from '../task2/LatestSection';
import Slider from '../task2/Slider';
// import LetsGetTouch from './navbar/LetsGetTouch';
// import Message from './Message';
// import NavBar from './navbar/NavBar';
// import ReachUs from './ReachUs';
// import Faq from './Faq';
// import Brand from './Brand';
// import Gain from './Gain';
// import Footer from './Footer';

const Home = () => {
  return (
    <div>
      {/* <NavBar/>
      <LetsGetTouch/>
      <Message/>
      <ReachUs/>
      <Faq/>
      <Brand/>
      <Gain/>
      <Footer/> */}

      <TrydoNav/>
      <Slider/>
      <Card/>
      <Services/>
      <Work/>
      <WorkingProcess/>
      <ManagingTeam/>
      <AboutSection/>
      <LogoSection/>
      <PricingSection/>
      <LatestSection/>
      <Lets/>
      <Footer/>
    </div>
  )
}

export default Home;
