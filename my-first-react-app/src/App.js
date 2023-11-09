//import logo from './logo.svg';
import { ReactComponent as Logo } from "./logo.svg";
import './App.css';
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo style={{ height: 300 }} />
        <h1> Hello World!!! </h1>
      </header>
      <Posts />
    </div>
  );
}

export default App;
