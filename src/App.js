import logo from './logo.svg';
import './App.css';
import SecondScreen from "./screens/SecondScreen.js"
import ThirdScreen from "./screens/ThirdScreen.js"
import NavBarNew from "./components/NewNav/NavBarNew.js"
import AboutMe from "./components/me/Me.js"
import MyServices from "./components/myservices/Services.js"
import {useState,useEffect} from "react"
import Sadnaot from './components/recommends/Sadnaot.js';
import ByMe from './components/ByMe/ByMe.js';
import SupremeCourse from './components/sadnaot/Sadnaot.js';
import ForthScreen from './screens/ForthScreen.js';
import PrivacyPolicy from './components/privacy/Privacy.js';
function App() {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return <>
  <NavBarNew/>
  {/* <FirstScreen/> */}
  {/* הולך להיות רקע עם צילומי תדמית */}
  <SecondScreen scrolled={scrolled}/>
  <AboutMe/>
  <ThirdScreen/>
  <SupremeCourse/>
<MyServices/>
<ForthScreen/>
<PrivacyPolicy 
  ownerName="נחמה גולדפוס" 
  email="goldfusn@gmail.com" 
  phone="+972 52-277-0278" 
  domain="https://nechamagoldfus.co.il/" 
/>
<ByMe/>
  </>
}

export default App;
