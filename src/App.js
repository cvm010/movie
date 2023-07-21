import React from 'react';
import { Button} from "@chakra-ui/react"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Header from './components/Header';
import Home from "./components/Home";
import Footer from './components/Footer';
import Video from './components/Video';
import Upload from './components/Upload';
import Login from './components/Login';
import SignUp from './components/SignUp';




function App() {
  return (
  <Router>
<Header />
<Routes>

<Route path='/' element={<Home />} />
<Route path='/Videos' element={<Video />} />
<Route path='/Upload' element={<Upload />} />
<Route path='/Login' element={<Login />} />
<Route path='/SignUp' element={<SignUp />} />

</Routes>
<Footer />
  </Router>
  );
}

export default App;
