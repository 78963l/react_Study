import React, {useState} from 'react'
import './App.css';

function Article(props){
    return(
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    )
}

function Header(props){
    return(
        <header>
            <h1><a href='/' onClick={(e)=>{
                e.preventDefault();
                props.onChangeMod();
            }}>{props.title}</a></h1>
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
            }}>{t.title}</a>
            </li>)
    }

    return(
        <nav>
            <ol> {lis} </ol>
        </nav>
    )
}

function Create(props){
    return(
        <article>
            <h2>Create</h2>
            <form onSubmit={(e)=>{
                e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.body.value;
                props.onCreate(title, body);
            }}> {/*form테크에서 버튼클릭시 js실행 (onSubmit) */}
                <p><input type='text' name='title' placeholder='title'></input></p>
                <p><textarea name='body' placeholder='body'></textarea></p>
                <p><input type='submit' value='Create'></input></p>
            </form>
        </article>
    )
}

function Update(props){
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    return(
        <article>
            <h2>Update</h2>
            <form onSubmit={(e)=>{
                e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.body.value;
                props.onUpdate(title, body);
            }}> {/*form테크에서 버튼클릭시 js실행 (onSubmit) */}
                <p><input type='text' name='title' placeholder='title' value={title} onChange={(e)=>{
                    setTitle(e.target.value);
                }}></input></p>
                <p><textarea name='body' placeholder='body' value={body} onChange={(e)=>{
                    setBody(e.target.value);
                }}></textarea></p>
                <p><input type='submit' value='Update'></input></p>
            </form>
        </article>
    )
}

function Chap7(){
    const [mode, setMode] = useState("WELCOME");
    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(4);
    const [topics, setTopics] = useState([
        {id:1, title:'html', body:'html is ...'},
        {id:2, title:'css', body:'css is ...'},
        {id:3, title:'javascript', body:'javascript is ...'}
    ]);
    let content = null;
    let contextControl = null;
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
        contextControl = <>
        <li><a href={'/update/'+id} onClick={(e)=>{
            e.preventDefault();
            setMode("UPDATE");
        }}>Update</a></li>
        <li><input type="button" value="Delete" onClick={()=>{
            const newTopic = []
        }}/></li>
        </>
    }else if(mode === "CREATE"){
        content = <Create onCreate={(_title, _body)=>{
            const newTopic = {id:nextId, title:_title, body:_body};
            const newTopics = [...topics];
            newTopics.push(newTopic);
            setTopics(newTopics);
            setMode("READ");
            setId(nextId);
            setNextId(nextId+1);
        }}></Create>
    }else if(mode === "UPDATE"){
        let title, body = null;
        for(let i=0; i<topics.length; i++){
            if(topics[i].id === id){
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Update title={title} body={body} onUpdate={(_title, _body)=>{
            const newTopics = [...topics]
            const updatedTopic = {id:id, title:_title, body:_body}
            for(let i =0; i<newTopics.length; i++){
                if (newTopics[i].id === id){
                    newTopics[i] = updatedTopic;
                    break;
                }
            }
            setTopics(newTopics);
            setMode("READ");
        }}></Update>
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
            <hr></hr>
            <ul>
                <li>
                    <a href='/create' onClick={(e)=>{
                    e.preventDefault();
                    setMode('CREATE');
                    }}>Create</a>
                </li>
                {contextControl}
            </ul>
        </div>
    )
}

export default Chap7