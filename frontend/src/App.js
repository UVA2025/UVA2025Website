import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld';

function App() {
  const pi = 3.14;
  let x = "Maryland";
  return (
    <div>
      <h1>UVA 2025</h1>
      <HelloWorld display={x}/>
      <HelloWorld display={pi}/>
      <HelloWorld display={"2025"}/>
      <HelloWorld display={"Go Hoos"}/>
    </div>
  );
}

export default App;
