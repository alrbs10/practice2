import { useState } from "react";
import "./App.css"; //불러오는 거. 외부 파일
import Counter from "./Counter";
let mode = "light";
const headerStyle = {
  border: "1px solid orange",
  backgroundColor: mode === "light" ? "tomato" : "gray",
  textAlign: "left",
  color: mode === "light" ? "white" : "black",
  display: "flex",
  justifyContent: "space-between",
};

// {조건문} ? {참일때 시행될 거} : {거짓일 때 시행될거}
const Header = () => {
  console.log("Header");
  return (
    <div style={headerStyle}>
      <div className="left" style={{ display: "flex" }}>
        <div className="logo">🤣</div>
        <div className="name">React</div>
      </div>
      {/* <div className="modechange">모드 변경하기</div> */}
      <div className="right" style={{ display: "flex" }}>
        <div className="link">
          <a href="https://create-react-app.dev/docs/getting-started">링크1</a>
        </div>
        <div className="link">
          <a href="https://ko.reactjs.org/tutorial/tutorial.html">링크2</a>
        </div>
        <div className="link">
          <a href="https://seb.oopy.io/sebfe/curriculum?_gl=1*1gs35q*_ga*MTkwMTY5MzMxNy4xNjcxNzUyMTQ4*_ga_SMZR7SG3VX*MTY3MzI3MTMyOS4xMTUuMC4xNjczMjcxMzM2LjUzLjAuMA">
            링크3
          </a>
        </div>
      </div>
    </div>
  );
};
const Banner = () => {
  const array = [
    {
      name: "윤석열",
      age: 62,
      src: "http://www.m-economynews.com/data/photos/20220414/art_16491403584875_2ee796.png",
      gender: "boy",
    },
    {
      name: "김건희",
      gender: "girl",
      age: 50,
      src: "https://w.namu.la/s/ac40b96c1ec41e78d36372f7f0e5a1149b31011deab70776f9e3775b52b29b655fe8de1497566bb99908d8ffbbb6f61dc948489b67828e924dfaa991bcfbc51b2b9f0424655d7175f37c15cb14790534cad44ea2c50ffcbf5a3f4d9b9260489f3f5498bf7e9a4b6bc9e76b19c07be2ad",
    },
    {
      name: "문재인",
      gender: "boy",
      age: 69,
      src: "https://w.namu.la/s/ffc2db2e5b743f2aaa3a8b0d271984a06ad5f361d6ff9eb8df03b1aab656cb3695072e9be662abb403dda99cc53e2a89b3c89103bb7f345e43317f790d628f35369d0b374c888df215c924868ef52ea8dc605c5321867a667962c0aa302128db21a150ef5c135564c94f880f06128037",
    },
  ];
  return (
    <div className="banner" style={{ border: "1px solid black" }}>
      <div className="hello">2023 새해 복 많이 받으세요~</div>
      <div className="peopleBox">
        {array.map((person) => {
          return (
            <div className="box" key={person.name}>
              <div className="pName">{person.name}</div>
              <div className="age">{person.age}세</div>
              <img className="pImage" src={person.src} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
