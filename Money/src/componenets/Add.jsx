import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';


export default function Add({Video, setVideo, imageUrl, isAbsolute}) {

    


    return (
        <div className={isAbsolute ? "absolute container" : "container"}>
            <div id='leftSide'>
                <Link id='ajdBox' to="/yedit">
                    <img src={imageUrl[0]}/>
                    <div className='mr-X'>X</div>
                </Link>

                <Link id='churchBox' to='/addedit'>
                    <img src={imageUrl[1]}/>
                    <div className='mr-X'>X</div>
                </Link>
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
                <Link id='copangBox' to='/contentedit'>
                    <img src={imageUrl[2]}/>
                    <div className='mr-X'>X</div>
                </Link>
            </div>
        </div>
    )
}