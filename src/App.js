import React from 'react';
import './App.css';

import MyNewComponent from './components/MyNewComponent'

function App() {
  return (
    <div className="App">
      <div className="App">
      <MyNewComponent firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
      <MyNewComponent firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
      <MyNewComponent firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"/>
      <MyNewComponent firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
    </div>
    </div>
  );
}

export default App;
