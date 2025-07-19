import Page from './page';
import Navbar from "./nav";
import Footer from "./footer";
import './index.css';

import pf from "./assets/soc-logo/pumpfun.png";
import dexs from "./assets/soc-logo/dexs.png";
import dext from "./assets/soc-logo/dext.png";
import tw from "./assets/soc-logo/twitter.png";

import copyBtn from "./assets/logo/copy-btn.png";
import copyDone from "./assets/logo/copy-done.png"

import logo1B from "./assets/logo/logo-transparent.png";
import logo1A from "./assets/logo/logo.jpg";
import z01 from "./assets/img/z01.png"; import z04 from "./assets/img/z04.jpg";
import z02 from "./assets/img/z02.jpg"; import z05 from "./assets/img/z05.png";
import z03 from "./assets//img/z03.png"; import z06 from "./assets/img/z06.jpg";

const copyPasteBtn = {
  copyBtn, copyDone
}
const socioLogo = {
  pf, dexs, dext, tw
}
const allImg = {
  logo1B, logo1A, z01, z02, z03, z04, z05, z06
}

function App() {
  return (
    <div className="App">
      <Navbar logo1={allImg.logo1B} />
        <div className="AllPage">
          < Page allImg={allImg} copyBtn={copyPasteBtn} socialLink={socioLogo}/>
        </div>
      <Footer />
    </div>
  );
}

export default App;
