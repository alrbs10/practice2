import { useState } from "react";
import "./App.css"; //불러오는 거. 외부 파일

function Counter() {
  // js처럼 생긴 부분

  // let counter = 0;
  const [counter, setCounter] = useState(0);
  // const [변수명, 변수를 바꿀 함수] = useState(초깃값)

  // 변수 종류
  // let, const, var
  // readonly.. 맘대로 바꾸지 못하게.
  // let, var는 맘대로 바꾸게

  function plus() {
    // const newCounter = counter + 1;
    setCounter(counter + 1); //counter의 값을 1 증가시켜라
    // setCounter(counter++);  이거는 counter 자체를 바꾸기 때문에 안됨
    console.log(counter);
  }
  function minus() {
    setCounter(counter - 1);
    console.log(counter);
  }

  return (
    // html 처럼 생긴 부분
    <div className="App">
      <button className="plus" onClick={() => setCounter(counter + 1)}>
        +
      </button>
      <div className="counter" style={{ color: "red" }}>
        {counter}
      </div>
      <button className="minus" onClick={() => setCounter(counter - 1)}>
        -
      </button>
    </div>
  );
}

export default Counter;
