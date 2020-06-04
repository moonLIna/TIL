import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  let [postsText, changePostText] = useState(['고기좋아 최고는 소고기 그 다음은 생으로 먹을 수 있는 고기 그 다음은 돼지고기이다', '사실상 봉은사역 근처 맛집은 전무한 실정이다. 그럼에도 불구하고 점심을 먹어야 하는 직장인들은 다음을 따르자.', '드디어 봉은사에도 스타벅스가 생겼다. 스세권이된 봉은사에 대해 알아보자.']);
  let [postName, changePostName] = useState(['맛있는 고기집 고르는 법', '봉은사역 맛집 리스트','봉은사에서 일어나는 카페 붐']);
  let [postDate, changePostDate] = useState(['2020.03.21','2020.03.15','2020.03.01']);
  let [likeNum, changeLike] = useState(0);
  let [modal, changeModal] = useState(false);

  // function changeText(){
  //   let newArray = [...postName];
  //   newArray[0] = '맛집의 기준은 고기의 질과 종류이다';
  //   changePostName( newArray );
  // }

  return (
    <div className="App">
      <div className="blog-nav">
        <h1>블로그</h1>
      </div>
      {/* <button onClick = { changeText }>버튼이야</button> */}
      <div>
        <ul className="posts-container">
          <li className="post-list">
            <div className="post-header">
              <h3>
                { postName[0] } 
              </h3>
              <span className="posts-date">{ postDate[0] }</span>
              <span className="like-icon" onClick={ ()=>{ changeLike(likeNum + 1) } }>💖{ likeNum }</span>
            </div>
            <p>{ postsText[0] }</p>
          </li>
          <li className="post-list">
            <div className="post-header">
              <h3>{ postName[1] }</h3>
              <span className="posts-date">{ postDate[1] }</span>
            </div>
            <p>{ postsText[1] }</p>
          </li>
          <li className="post-list">
            <div className="post-header">
              <h3 onClick={ () => { changeModal(!modal) } }>{ postName[2] }</h3>
              <span className="posts-date">{ postDate[2] }</span>
            </div>
            <p>{ postsText[2] }</p>
            {
              modal === true 
              ? <Modal /> 
              : null
            }
          </li>
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
