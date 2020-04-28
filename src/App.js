import React from 'react';
import Begin from './Begin';
import { ContentContextConsumer } from './contentContext';

function App() {

  return (
      <ContentContextConsumer>
        {context => (      
        <Begin everything={context}/>
        )}
      </ContentContextConsumer>
    );
  }

export default App;
