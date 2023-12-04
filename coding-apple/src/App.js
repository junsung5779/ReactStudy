import "./App.css";

function App() {
  var data = "red";
  return (
    <div className="App">
      <div className="black-nav">
        <div>블로그</div>
      </div>
      <div className={data}>안녕하세요</div>
      <div style={{ color: "blue", fontSize: "30px" }}> 글씨 </div>
    </div>
  );
}

export default App;
