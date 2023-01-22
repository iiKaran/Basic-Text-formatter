import Navbar from "./components/Navbar";
// import Card from "./components/Card";
// import State from "./components/State";
import TextForm from "./components/Textform";
import "./App.css";
let obj = {
  head1 : 'heading1',
  head2 : 'heading2',
  head3 : 'heading3',
  text1 : 'para 1 ',
  text2 : 'para2 ',
  text3 : 'para 3 '
};
function App() {
  return (
  <>
<Navbar  head="Home"  about = "About"/>
<TextForm/>
 </>
  );
}

export default App;