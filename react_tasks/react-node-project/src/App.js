import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Editform from './components/Editform';
import Listform from './components/Listform';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">


    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Form/>} />

          <Route path="/Editform/:id" element={<Editform/>}></Route>
          <Route path="/Listform/:id" element={<Listform/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
