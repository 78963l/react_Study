/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = "강남 고기 맛집";

  // useState('남자 코트 추천');
  // array가 남음 [a, b]
  // a => "남자 코트 추천"
  // b => state 정정해주는 함수

  // destructuring 문법
  // var [a, b] = [10, 100];

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기(){
    var newArray = [...글제목]; // ...(스프레드오퍼레이터) 은 중괄호, 대괄호 제거하고 새로만듬(deep Copy).
    newArray[0] = '여자 코트 추천';
    newArray = newArray.sort();
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      <div className="list">
        <h3> {글제목[0]} 
          <span onClick={ ()=>{따봉변경(따봉 + 1)}}>👍</span> {따봉}
        </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목[1]} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목[2]} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <Modal />
    </div>
  );
}

function listInfo(){
  return(
    <div className='list'>

    </div>
  )
}

function Modal(){
  return (
    <div className='modal'>
      <h2>제목바꾸기</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
