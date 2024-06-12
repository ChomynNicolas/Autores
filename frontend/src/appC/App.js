import { useState } from 'react';
import Home from '../pages/Home/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from '../pages/Add/Add';
import Edit from '../pages/Edit/Edit';



function App() {
    const [BASE_URI] = useState("http://localhost:3001/api")


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home BASE_URI={BASE_URI}/>} />
      <Route path='/add' element={ <Add  BASE_URI={BASE_URI}/> }/>
      <Route path='/edit/:id' element={ <Edit BASE_URI={BASE_URI}/> }/>


    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
