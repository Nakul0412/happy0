
import './App.css';
import FirstPage from './FirstPage';
import MainPage from './MainPage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HBD from './HBD';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>

   <Route exact path="/" element={<FirstPage/>}></Route>
   
   <Route exact path="/HappyBirthday" element={<MainPage/>}></Route>
   <Route exact path="/HappyBirthdaydudee" element={<HBD/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
