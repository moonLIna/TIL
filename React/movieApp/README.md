# nomadCoder - ReactJS
[repository](https://github.com/moonLIna/nomadcoders_movie_app)

### 1. React 세팅하기
  -  git, React 설치   
  -  create-react-app   
  
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
