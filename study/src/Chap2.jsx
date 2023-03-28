import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function Modal(){
    return (
        <div className='modal'>
            <h2>제목바꾸기</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

function Chap2(){
    let posts = '강남 고기 맛집';
    let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '리엑트 독학']);
    let [따봉, 따봉변경] = useState(0);

    function 제목바꾸기(){
        var newArray = [...글제목];
        newArray[0] = '여자 코트 추천';
        글제목변경(newArray);
    }

    return(
        <>
        <div className='black-nav'>
            <div>개발 Blog</div>
        </div>
        <button onClick={제목바꾸기}>버튼</button>
        <div className='list'>
            <h3> {글제목[0] }</h3>
            <p>2월 17일 발행</p>
        </div>
        <div className='list'>
            <h3> {글제목[1] }</h3>
            <p>2월 17일 발행</p>
        </div>
        <div className='list'>
            <h3> {글제목[2] }</h3>
            <p>2월 17일 발행</p>
        </div>

        <Modal/>
        </>
    )
}

export default Chap2