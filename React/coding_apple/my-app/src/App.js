import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  let [postsText, changePostText] = useState(['고기좋아 최고는 소고기 그 다음은 생으로 먹을 수 있는 고기 그 다음은 돼지고기이다', '사실상 봉은사역 근처 맛집은 전무한 실정이다. 그럼에도 불구하고 점심을 먹어야 하는 직장인들은 다음을 따르자.', '드디어 봉은사에도 스타벅스가 생겼다. 스세권이된 봉은사에 대해 알아보자.']);
  let [postName, changePostName] = useState(['맛있는 고기집 고르는 법', '봉은사역 맛집 리스트','봉은사에서 일어나는 카페 붐']);
  let [postDate, changePostDate] = useState(['2020.03.21','2020.03.15','2020.03.01']);
  let [likeNum, changeLike] = useState(['0','0','0']);
  let [modal, changeModal] = useState(false);
  let [list, showList] = useState(true);

  function printFunc(){
    let newArray = [];
    for ( let i = 0; i < postName.length; i++){
      newArray.push(
        <li className="post-list">
          <div className="post-header">
            <h3 onClick={ () => { changeModal(!modal) } }>{ postName[i] }</h3>
            <span className="posts-date">{ postDate[i] }</span>
            <span className="like-icon" onClick={ ()=>{ changeLike(likeNum[i] + 1) } }>💖{ likeNum[i] }</span>
          </div>
          <p>{ postsText[i] }</p>
          {
            modal === true 
            ? <Modal /> 
            : null
          }
        </li>
      )
    }
    return newArray;
  }

  return (
    <div className="App">
      <div className="blog-nav">
        <h1>블로그</h1>
      </div>
      <div>
        <ul className="posts-container">
        {
          list === true
          ? printFunc()
          : null
        }
        </ul>
      </div>
    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h3>제목</h3>
      <span>date</span>
      <p>text</p>
    </div>
  );
}

export default App;