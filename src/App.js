
import './App.css';
import Home from './pages/index'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SigninPage from './pages/signin'

function App() {
  return (
    <Router>



<Routes>
    <Route path='/' element={<Home/>}/>
      
   
    <Route path='/signin' element={<SigninPage/>}/>

   
    
      
    </Routes>

      {/* <Routes>
        <Route path="/" component={} exact/>
        </Routes>
        <Routes>
        <Route path="/signin" component={SigninPage} exact/>
        
        </Routes> */}
    {/* <Home/> */}
    </Router>
  );
}

export default App;
