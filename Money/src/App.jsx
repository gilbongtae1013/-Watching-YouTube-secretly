import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css'
import Add from './componenets/Add'
import YoutubeEdit from './pages/YoutubeEdit'
import AddImage from './pages/AddImage'

import copang from './assets/copang.png'
import ajd from './assets/ajd.png'  
import church from './assets/church.png'


function App() {

  const [Video, setVideo] = useState("");

  const [imageUrl, setImageUrl] = useState({
    0: church,
    1: ajd,
    2: copang
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add Video={Video} setVideo={setVideo} imageUrl={imageUrl}/>}>
          <Route path='/yedit' element={<YoutubeEdit Video={Video} setVideo={setVideo}/>}/>
          <Route path='/addedit' element={<AddImage setImageUrl={setImageUrl} imageUrl={imageUrl}/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
