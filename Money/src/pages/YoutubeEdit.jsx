import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function YoutubeEdit({Video, setVideo}) {

    const navigate = useNavigate();

    const [Link, setLink] = useState("");

    const GetYId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11) ? match[2] : null;
    }

    const SubmitClicked = () => {

        if (!Link) {
            alert("주소를 입력해주세요");
            return;
        }

        setVideo(GetYId(Link));

    }

    return (
        <div className="Yedit-container">
            <h1>유튜브 주소를 입력하시오</h1>
            <input id='Yedit-input' onChange={(e) => {
                setLink(e.target.value);
            }} value={Link}/>

            <div className="Yedit-submitBox">
                <button id='Yedit-cancel' onClick={()=>{navigate('/');}}>취소하기</button>
                <button id='Yedit-submit' onClick={SubmitClicked}>입력하기</button>
            </div>
        </div>
    )
}