import React, {useState} from 'react';

function Box(props) {
    const clickMe = () => {
        alert(props.num + "버튼을 클릭했습니다.")
    }

    const test = () => {
        console.log("qwe")
    }
    return(
        <div className='box'>
            <p>Box{props.num}</p>
            <p>{props.name}</p>
            <button onClick={clickMe}>추가</button>
        </div>
    );
}

export default Box