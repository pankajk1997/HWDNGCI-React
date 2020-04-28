import React from 'react';
import HWCarousel from './HWCarousel';
import Grid from './Grid';
import Contribute from './Contribute';
import Donate from './Donate';
import {ContentContextConsumer} from '../contentContext';

function Main() {

  const If = (props) => {
    const condition = props.condition || false;
    const positive = props.then || null;
    const negative = props.else || null;
    
    return condition ? positive : negative;
  };

  return (
    <ContentContextConsumer>  
      {context => (     
        <div>
          <If condition={ context.Content === "Home" }
            then={ 
            <div>
              <HWCarousel />
              <Grid />
            </div> }
          />

          <If condition={ context.Content === "Contribute" }
            then={ <Contribute /> }
          />

          <If condition={ context.Content === "Donate" }
            then={ <Donate /> }
          />
        </div>
      )}
    </ContentContextConsumer>
  );
}

export default Main;
