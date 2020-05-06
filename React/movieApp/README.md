# nomadCoder - ReactJS
[repository](https://github.com/moonLIna/nomadcoders_movie_app)

### 0 .git
  - git init :: 저장소 생성
  - git add *파일명* ( git add * ) :: 변경한 파일 스테이지에 기록
  - git commit -m "message" :: commit하고 msg 입력
  - git push *origin* *master* :: 위의 과정을 거친 코드 git 반영
  
### 1. React 세팅하기
  - git, React 설치   
  - create-react-app 
    싱글 페이지 어플리케이션 개발을 도와주는 React 툴체인
    ```JavaScipt
    npx create-react-app applicaion_name
    cd applicaion_name
    npm start
    
    npm run build
    ```
  
### 2. JSX & Props
  - JSX = javascript + html
  - React component 특징   
    + component -> component, children component로 정보 보내는 것 가능   
    + React component는 유일성이 필요해서 key값 필요
  - React application은 한 번에 하나의 component만 rendering 가능
  - JS mapping    
    array 각 item에서 function을 실행하는 array를 가지는 function
    ```JavaScript
    function App() {
      return (
        <div className="App">
          {foodILike.map(dish => (
            <Food key={dish.id} name={dish.name} pic={dish.image}/>
          ))}
        </div>
      );
    }
    ```
