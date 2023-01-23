import Navbar from "./components/Navbar";
// import Card from "./components/Card";
// import State from "./components/State";
import TextForm from "./components/Textform";
import "./App.css";
import { useState } from "react";

let obj = {
  head1 : 'heading1',
  head2 : 'heading2',
  head3 : 'heading3',
  text1 : 'para 1 ',
  text2 : 'para2 ',
  text3 : 'para 3 '
};

function App() {
  const [mode,changeMode] = useState('light');
  const toggleMode= ()=>{
    console.log("called");
    if(mode==="dark")
    {
      changeMode('light');
      document.body.style.backgroundColor='white';
    }
    else{
      changeMode('dark');
      document.body.style.backgroundColor='black';
    }

  }
  return (
  <>
<Navbar  mode={mode} head="Home"  about = "About" toggle={toggleMode} />
<TextForm mode={mode} />
 </>
  );
}

export default App;