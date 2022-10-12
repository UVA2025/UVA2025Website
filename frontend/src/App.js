import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld';
import ToDoList from './Components/ToDoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const pi = 3.14;
  let x = "Maryland";
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HelloWorld/>}></Route>
          <Route path="/hello" element={<ToDoList/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
