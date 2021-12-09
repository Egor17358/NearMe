import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import './App.css'

function App() {
  return (
    <>


    <Routes>
      <Route path='/login' element={ <Login />}/>
    </Routes>

    </>

  );
}

export default App;
