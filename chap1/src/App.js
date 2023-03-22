import logo from './logo.svg';
import './App.css';

function App() {

  let posts = "강남 고기 맛집";
  function 함수(){
    return 100
  }

  let setColor = { color : 'red', fontSize : '30px'}

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <ht4>{ posts }</ht4>          {/* 변수 */}
      <ht4>{ 함수() }</ht4>         {/* 함수 */}
      <img src={ logo } />          {/* 이미지 */}
      <div className={posts}></div> {/* 클래스명 */}
      <div style={{color : 'blue', fontSize : '15px'}}>색상</div>
      <div style={setColor}>색상</div>
    </div>
  );
}

export default App;
