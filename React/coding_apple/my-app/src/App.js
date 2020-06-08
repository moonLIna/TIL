import React, { useState, Profiler } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  let [postsText, changePostText] = useState(['고기좋아 최고는 소고기 그 다음은 생으로 먹을 수 있는 고기 그 다음은 돼지고기이다', '사실상 봉은사역 근처 맛집은 전무한 실정이다. 그럼에도 불구하고 점심을 먹어야 하는 직장인들은 다음을 따르자.', '드디어 봉은사에도 스타벅스가 생겼다. 스세권이된 봉은사에 대해 알아보자.']);
  let [postName, changePostName] = useState(['맛있는 고기집 고르는 법', '봉은사역 맛집 리스트','봉은사에서 일어나는 카페 붐']);
  let [postDate, changePostDate] = useState(['2020.03.21','2020.03.15','2020.03.01']);
  let [likeNum, changeLike] = useState(0);
  let [modal, changeModal] = useState([false, false, false]);
  let [list, showList] = useState(true);
  let [listIdx, changelistIdx] = useState(['0','1','2']);
  let [inputText, changeInput] = useState('');

  return (
    <div className="App">
      <div className="blog-nav">
        <h1>블로그</h1>
      </div>
      <div className="new-posting">
        <input className="test-input" onChange={ (e)=>{ changeInput(e.target.value) } }/>
        <button className="button" onClick={ () => {
          let newArray = [...postName];
          newArray.push(inputText);
          changePostName(newArray);

          let newIndex = [...listIdx];
          newIndex.push(listIdx.length);
          changelistIdx(newIndex);

          let newLikeNum = [...likeNum];
          newLikeNum.push(0);
          changeLike(newLikeNum);

        }}>저장</button>
      </div>
      <div>
        <ul className="posts-container">
        {
          listIdx.map(function(i){
            return(
            <li className="post-list" key={postDate[i]}>
              <div className="post-header">
                <h3 
                onClick={ () => { changeModal(!modal) } }>
                  { postName[i] }
                </h3>
                <span className="posts-date">{ postDate[i] }</span>
                <span className="like-icon" onClick={ () => { changeLike( likeNum + 1) } }>💖{ likeNum }</span>
              </div>
              <p>{ postsText[i] }</p>
              {
                modal === true 
                ? <Modal 
                    postsText={ postsText } 
                    postName={ postName } 
                    postDate={ postDate } 
                    listIdx={ listIdx[i] }
                  /> 
                : null
              }
            </li>
            )
          })
        }
        </ul>
      </div>
    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
      {/* <h3>{ props.postName[props.listIdx] }</h3>
      <span>{ props.postDate[props.listIdx] }</span> */}
      <p>{ props.postsText[props.listIdx] }</p>
    </div>
  );
}

export default App;