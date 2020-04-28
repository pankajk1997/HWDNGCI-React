import React, {useState} from 'react';
import { ContentContextConsumer } from '../contentContext';

function LogoBar () {

  const [SidebarState, toggleSidebar] = useState("sidenav hide-sidebar");

  function switchSidebar() {
    toggleSidebar(prevState => prevState === "sidenav hide-sidebar" ? "sidenav show-sidebar" : "sidenav hide-sidebar");
  }

  return (
    <ContentContextConsumer>  
    {context => (     
      <div>
      <div className="slide-up-fade-in bg-white">
      <img src="https://i.imgur.com/0r5J1cV.png" alt="Logo" className="float-left ml-5 icon-6"/>
      <img onClick={switchSidebar} src="https://i.imgur.com/ohUdyBk.png" alt="Menu" className="float-right mr-5 mt-3 icon-4" style={{cursor: "pointer"}}/>
      </div>

      <div className={SidebarState}>
      <img onClick={switchSidebar} src="https://i.imgur.com/ohUdyBk.png" alt="Menu" className="ml-3 mb-3 icon-4" style={{cursor: "pointer"}}/>
      <p onClick={context.changeContent1}>Home</p>
      <p onClick={context.changeContent2}>Contribute Resources</p>
      <p onClick={context.changeContent3}>About Us</p>
      <p onClick={context.changeContent4}>Donate Money</p>
      </div>
      </div>       
    )}
    </ContentContextConsumer>
  );
}  
    
export default LogoBar;
