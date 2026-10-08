import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';


export default function ContentEdit({contentLink, setContentLink, isAbsolute, setIsAbsolute, imsiLink, setImsiLink}) {

    const navigate = useNavigate();

    const SubmitClicked = () => {
        if (!imsiLink) {
            alert("링크를 입력해주세요");
            return;
        }

        let finalUrl = imsiLink;
        if(!finalUrl.startsWith('http://') && !finalUrl.startsWith('https://')) {
            finalUrl = 'https://'+finalUrl;
        }
        setContentLink(finalUrl);
        navigate('/');
    }
    
    return (
        <div className="Content-container">
            <h1>가짜 웹사이트를 입력하시오</h1>
            <input id='Content-input' onChange={(e) => {
                setImsiLink(e.target.value);
            }} value={imsiLink}/>

            <div className="Content-submitBox">
                <button id='Content-cancel' onClick={()=>{navigate('/');}}>취소하기</button>
                <button id='Content-submit' onClick={SubmitClicked}>입력하기</button>
            </div>
            
            <div className='Content-absoluteBox'>
                <label>광고 이미지를 웹사이트 위에 덮씌우기</label>
                <input type='checkbox'
                    onChange={(e) => {
                        setIsAbsolute(e.target.checked);
                    }}
                    checked={isAbsolute}
                />
            </div>
        </div>
    )
}