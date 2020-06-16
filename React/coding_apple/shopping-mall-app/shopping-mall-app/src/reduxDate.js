import { createStore, combineReducers } from 'redux';

let cartDate = [
  { id : 'ryan1', 
    title : '고속무선충전 마우스패드 리틀라이언', 
    content : '귀여움이 빼꼼, 무선충전 마우스패드',
    price : '39.00 USD',
    src : 'https://t1.daumcdn.net/friends/prod/product/20200326151033622_8809681707831_AW_00.jpg',
    alt : '고속무선충전 마우스패드 리틀라이언',
    detailSrc : 'https://t1.kakaocdn.net/friends/prod/product/20200326150410835_8809681707831_BW_00.jpg',
    friendsName : 'Ryan',
    quan : 1,
    option: ''
  },
  {
    id : 'appeach1', 
    title : '글리터링튜브_어피치', 
    content : '블링블링 러블리한 어피치 링튜브',
    price : '27.00 USD',
    src : 'https://t1.daumcdn.net/friends/prod/product/20200602155700243_8809681709859_AW_00.jpg',
    alt : '블링블링 러블리한 어피치 링튜브',
    detailSrc : 'https://t1.kakaocdn.net/friends/prod/product/20200603170042182_8809681709859_BW_09.jpg',
    friendsName : 'appeach',
    quan : 2,
    option: ''
  }
]
function reducer( state = cartDate, action ){
  if( action.type === 'addCart' ){
    let found = state.find(ele => ele.id === action.payload.id) || { id : '' };
    let tempState = [...state];
    let foundIdx = tempState.indexOf(found);
    
    console.log(foundIdx);
    
    if( action.payload.id === found.id && foundIdx !== -1 ){
      tempState[foundIdx].quan++;

      return tempState;
    } else {
      let tempState = [...state];
      tempState.push( action.payload );

      return tempState;
    }
  } else if( action.type === 'addNum' ){
    let tempState = [...state];
    tempState[action.idx].quan++;
    
    return tempState;
  } else if( action.type === 'minusNum' && state[action.idx].quan > 0) {
    let tempState = [...state];
    tempState[action.idx].quan--;
    
    return tempState;
  } else {
    return state;
  }
}

function reducer2( state = true, action ){
  if( action.type === false ){
    state = false;
    return state;
  } else {
    return state;
  }
}

export let store = createStore(combineReducers({reducer, reducer2}));