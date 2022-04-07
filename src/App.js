import logo from "./logo.svg";
import "./App.css";
import DesctopOne from "./ui/desctop-one/DesctopOne";
import DesctopTwo from "./ui/desctop-two/DesctopTwo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<DesctopOne />}/>
        <Route path='/hotels' element={<DesctopTwo />}/>
      </Routes>
    </div>
  );
}

export default App;
