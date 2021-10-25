import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);

  let [input, setInput] = useState('');

  // 1. 일단 기존 state 카피본 만들고
  // 2. 카피본에 수정사항 반영하고
  // 3. 변경함수()에 집어넣기(꼭 외우기)
  function changeTitle() { // 리액트 대 원칙: immutable data. 기본값 수정X
    let newArray = [...title]; //deep copy: 값 공유X, 서로 독립적인 값을 가지는 복사 ,deepCopy 안쓰면 제대로 작동 안됨
    newArray[0] = '여자 코트 추천'
    setTitle(newArray);
  }

  // 좋아요 숫자 개별 카운트 기능
  function newlike(idx) {
    let newlike = [...like];
    newlike[idx] += 1 // newlike[idx]++
    console.log(newlike)
    setLike(newlike);
  }

  // map 관련 코딩내용
  let array = [2,3,4];

  let mapArray = array.map(function(a){
    return a * 2
  });

  function forui() {
    let array = [];
    for (var i=0; i<3; i++){
      array.push(<div key={i}>안녕</div>);
    }
    return array
  }

  //내가 방금 누른 제목 넘버
  let [selectTitle, setSelectTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{fintSize: '30px'}}>개발 blog</div>
      </div>

      {/* 버튼 누르면 타이틀 바뀜 */}
      <button onClick={changeTitle}>버튼</button>

      {
        title.map((title, i) => { //반복문 돌 때마다 i는 1씩 증가
          return (
            <div className="list" key={i}>
              <h3 onClick={ () => { setSelectTitle(i) } }> { title } <span onClick={ () => { newlike(i) }}>👍</span> {like[i]} </h3>
              <p>2월 18일 발행</p>
              <hr/>
            </div>
          )
        })
      }

      <div className="publish">
        <input onChange={ (e)=>{ setInput(e.target.value) } } />
        <button onClick={ ()=>{ 
          let addTitle = [...title]; // 직접 수정하면 안되고 사본을 만들어서 수정해 줘야 한다.
          addTitle.unshift(input); //array 맨 앞에 자료 추가해 줌
          setTitle(addTitle)

          let addLike = [...like]; //좋아요 리스트 추가
          addLike.unshift(0);
          setLike(addLike);
         }}>저장</button>
      </div>
   
 


      {/* 모달 토글 버튼 */}
      <button onClick={ ()=>{ setModal(!modal)}}>버튼</button>
      {
        modal === true ? <Modal title={title} selectTitle={selectTitle} /> : null  // title의 값을 title로 자식에게 넘겨 줌
      }
      
      {forui()}
    </div>
  );
}

export default App;

function Modal(props) {
  return (
    <div className="modal">
      {/* 부모 컴포넌트의 title값을 받아 와서 사용 */}
      <h2>제목 { props.title[props.selectTitle] }</h2> 
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}