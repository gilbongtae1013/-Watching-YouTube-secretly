import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css'
import Add from './componenets/Add'
import YoutubeEdit from './pages/YoutubeEdit'


function App() {

  const [Video, setVideo] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add Video={Video} setVideo={setVideo}/>}>
          <Route path='/yedit' element={<YoutubeEdit Video={Video} setVideo={setVideo}/>}/>

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
