import {Route, Routes} from 'react-router-dom'
import Error from './Components/Error';
import Login from './Components/HomePage/Login';
import List from './Components/ListPage/List';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/list" element={<List/>}/>
      <Route path="*" element={<Error />}/>
    </Routes>
    </>
  );
}

export default App;
