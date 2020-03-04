import React from 'react';
import "./App.css"

import Navmenu from "./components/Navmenu"

const menu =[
  
    {title: "home"},
   { title : "contact"},
    {title :"services",
    drop : ["for entrepreneur", "for hobbysist","for students"]
  }
]

function App() {
  return (
    <div className="App">
      
      <Navmenu x={menu}/>

    
    </div>
     
 
  );
}

export default App;
