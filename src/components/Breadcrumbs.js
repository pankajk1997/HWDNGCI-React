import React from 'react';
import {ContentContextConsumer} from '../contentContext';

function Breadcrumbs() {
  return (
    <ContentContextConsumer>  
      {context => (  
      <div className="container-fluid slide-up-fade-in bg-warning p-1 pl-5 pr-5" style={{animationDelay: "0.6s"}}>
        {context.Content}
      </div>
      )}
    </ContentContextConsumer>
  );
}

export default Breadcrumbs;
