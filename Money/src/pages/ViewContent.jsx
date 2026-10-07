import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function ViewContent({contentLink}) {

    return (
        <section className='ViewContent-container'>
            {contentLink && (
                <iframe
                    src={contentLink}
                    width="100%"
                    height="100%"
                    className='ViewContent-iframe'
                />
            )}
        </section>
    )
}