import reactLogo from "./assets/react.svg";
import "./App.css";
import Test from "./jsx/Test";
function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Employee management portal</h1>
      <Test/>
    </>
  );
}

export default App;
