import './App.css';
import HelloWorld from './Components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UVAPage from './Components/UVA2025';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HelloWorld/>}></Route>
          <Route path="/uva" element={<UVAPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
