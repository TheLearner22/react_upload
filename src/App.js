
import './App.css';
import{
  BrowserRouter as Router,
  routes,
  route,
  link
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  return (
    
    <Router>
      <Route exact path='/' element={< Home/>)></Route>
      <Route exact path='/about' element={< About/>}></Route>
      <Route exact path='/contact' element={< Contact />}></Route>
    </Router>
      

      
    </div>
  );
}

export default App;
