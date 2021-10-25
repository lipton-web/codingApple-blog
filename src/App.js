import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState(0);

  let [modal, setModal] = useState(false);

  let array = [2,3,4];

  array.map(function(){

  });

  // 1. 일단 기존 state 카피본 만들고
  // 2. 카피본에 수정사항 반영하고
  // 3. 변경함수()에 집어넣기(꼭 외우기)
  function changeTitle() { // 리액트 대 원칙: immutable data. 기본값 수정X
    let newArray = [...title]; //deep copy: 값 공유X, 서로 독립적인 값을 가지는 복사 ,deepCopy 안쓰면 제대로 작동 안됨
    newArray[0] = '여자 코트 추천'
    setTitle(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{fintSize: '30px'}}>개발 blog</div>
      </div>

      {/* 버튼 누르면 타이틀 바뀜 */}
      <button onClick={changeTitle}>버튼</button>

      <div className="list">
        <h3>{ title[0] } <span onClick={ () => { setLike(like + 1) }}>👍</span> {like} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3>{ title[1] }</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3 onClick={()=>{setModal(true)}}> { title[2] } </h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>

      {/* 모달 토글 버튼 */}
      <button onClick={ ()=>{ setModal(!modal)}}>버튼</button>
      {
        modal === true ? <Modal /> : null
      }
      

    </div>
  );
}

export default App;

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}