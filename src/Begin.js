import LogoBar from './components/LogoBar';
import SearchBar from './components/SearchBar';
import HWLabel from './components/HWLabel';
import Breadcrumbs from './components/Breadcrumbs';
import About from './components/About';
import Credit from './components/Credit';
import Main from './components/Main';
import React from 'react';
import {ContentContextConsumer} from './contentContext';

function Begin() {
  return (
    <ContentContextConsumer>  
      {context => (  
        <div>
          <LogoBar />
          <div className={context.OpacityClass}>
            <SearchBar />
            <HWLabel />
            <Breadcrumbs />
            <Main />
          </div>
          <About />
          <Credit />
        </div>
      )}
    </ContentContextConsumer>
  );
}

export default Begin;
