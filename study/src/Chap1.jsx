import React from 'react'
import logo from './logo.svg';
import './App.css';

function Chap1() {
    let posts = "강남 고기 맛집";
    function 함수(){
        return 100
    }
    let setColor = {color : 'red', fontSize : '30px'}

    return(
        <div className='black-nav'>
            <div>개발 blog</div>
            <h4>{ posts }</h4>                                              {/* 변수 */}
            <h4>{ 함수 }</h4>                                               {/* 함수 */}
            <img src={logo}></img>                                          {/*이미지 */}
            <div className={posts}></div>                                   {/* 클래스명 */}
            <div style={{color : 'blue', fontSize : '15px'}}>색상</div>     {/* 스타일 */}
            <div style={setColor}></div>                                    {/* 스타일 변수 불러오기 */}
        </div>
    )
}

export default Chap1