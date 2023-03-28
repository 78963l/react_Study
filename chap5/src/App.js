import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props){
  return(
    <header>
      <h1><a href="/" onClick={(e)=>{
        e.preventDefault();   // 기본동작을 방지 
        props.onChangeMod();  // onChangeMod 함수 호출
        }}>
          {props.title}</a></h1>
    </header>
  )
}

function Nav(props) {
  const lis = []

  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={(e)=>{
        e.preventDefault();
        props.onChangeMod(e.target.id);
        }}>
          {t.title}</a>
      </li>)
  }

  return(
  <nav>
    <ol> {lis} </ol>
  </nav>
  )
}

function Article(props) {
  return(
    <div>
      <h2>{props.title}</h2>
      {props.body}
    </div>
  )
}

function App() {
  const mode = 'WELCOME';
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'}
  ]
  let content = null;
  if (mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  }else if(mode === 'READ'){
    content = <Article title="Read" body="Hello, Read"></Article>
  }
  return (
    <div className="App">
      <Header title="WEB" onChangeMod={()=>{alert("헤더클릭")}}/>
      <Nav topics={topics} onChangeMod={(id)=>{alert(id)}}/>
      <Article title="Welcome" body="Hello, WEB"/>
      <Article title="Hi" body="Hello, WEB"/>
    </div>
  );
}

export default App;
