
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar.js";

function App() {
  return (
    <div className="App">
   {
/**
 * <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        <em>Bold</em>
        </p>
        <h1>You they play</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
 */
   }   
   <Header/>

   <div className = "app__body">
    <Sidebar/>
   </div>


    </div>
  );
}

export default App;
