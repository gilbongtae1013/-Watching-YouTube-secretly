import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import DamnFiddle from '../assets/damnFiddle.gif'


export default function AddImage({setImageUrl, imageUrl}) {

    const imgInput = (e, index) => {
        const file = e.target.files[0];

        if(file) {
            const img = URL.createObjectURL(file);

            setImageUrl((prev) => ({
                ...prev,
                [index]: img
            }))
        }
    }

    return (
        <div className='Ad-container'>
            <div className='Ad-box1'>
                <label for='Ad-input1'>광고이미지 설정1</label>
                <input id='Ad-input1' type='file' accept='image/*'
                onChange={(e) => {imgInput(e, 0)}}/>
            </div>

            <div className='Ad-box2'>
                <label for='Ad-input2'>광고이미지 설정2</label>
                <input id='Ad-input2' type='file' accept='image/*'
                onChange={(e) => {imgInput(e, 1)}}/>
            </div>

            <div className='Ad-box3'>
                <label for='Ad-input3'>광고이미지 설정3</label>
                <input id='Ad-input3' type='file' accept='image/*'
                onChange={(e) => {imgInput(e, 2)}}/>
            </div>

            <img src={DamnFiddle} className='Ad-fiddle'/>
        </div>
    )
}