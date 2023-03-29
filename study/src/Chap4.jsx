import React, {useState} from 'react'
import './App.css';

function Header(props){
    return(
        <header>
            <h1><a href='/' onClick={(e)=>{
                e.preventDefault();
                props.onChangeMod();
            }}>
                {props.title}</a></h1>
        </header>
    )
}

function Nav(props){
    const lis = []

    for(let i=0; i < props.topic.length; i++){
        let t = props.topic[i];
        lis.push(<li key={t.id}>
            <a id={t.id} href={'/read/'+t.id} onClick={(e)=>{
                e.preventDefault();
                props.onChangeMod(Number(e.target.id));
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

function Article(props){
    return(
        <div>
            <h2>{props.title}</h2>
            {props.body}
        </div>
    )
}

function Chap4(){
    const [id, setId] = useState(null);
    const [mode, setMode] = useState("WELCOME");
    const topics = [
        {id:1, title:'html', body:'html is ...'},
        {id:2, title:'css', body:'css is ...'},
        {id:3, title:'js', body:'javascript is ...'}
    ]
    let content = null;
    if (mode === "WELCOME"){
        content = <Article title='Welcome' body='Hello, WEB'/>
    }else if(mode === "READ"){
        let title, body = null;
        for(let i=0; i<topics.length; i++){
            if(topics[i].id === id){
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Article title={title} body={body}/>
    }

    return(
        <div>
            <Header title="WEB" onChangeMod={()=>{
                setMode('WELCOME');
            }}/>
            <Nav topic={topics} onChangeMod={(id)=>{
                setMode('READ');
                setId(id)
            }}/>
            <hr></hr>
            {content}
        </div>
    )
}

export default Chap4