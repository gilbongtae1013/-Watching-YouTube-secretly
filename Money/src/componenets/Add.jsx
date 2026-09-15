import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

import copang from '../assets/copang.png'
import ajd from '../assets/ajd.png'
import church from '../assets/church.png'


export default function Add({Video, setVideo}) {


    return (
        <div className='container'>
            <div id='leftSide'>
                <Link id='ajdBox' to="/yedit">
                    <img src={ajd}/>
                    <div className='mr-X'>X</div>
                </Link>

                <div id='churchBox'>
                    <img src={church}/>
                    <div className='mr-X'>X</div>
                </div>
            </div>

            <div className='mainBox'>
                <Outlet/>
            </div>

            <div id='rightSide'>
                <div className='youtubeBox'>
                    <iframe 
                        width="340" 
                        height="230" 
                        src={`https://www.youtube.com/embed/${Video}`} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                    <div className='mr-X'>X</div>
                </div>
                <div id='copangBox'>
                    <img src={copang}/>
                    <div className='mr-X'>X</div>
                </div>
            </div>
        </div>
    )
}