import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Shared/Header/Header';
import Home from './components/Pages/Home/Home';
import Projects from './components/Pages/Projects/Projects/Projects';
import Contact from './components/Pages/Contact/Contact';

function App() {
  return ( 
  
    <div className="App">
     
       <BrowserRouter>
             <Header></Header>
           <Routes>
             <Route exact path="/" element={<Home />}>
             </Route>
            <Route exact path="/home" element={<Home />}>
            </Route>

          <Route exact path="/projects" element={<Projects />}>
          </Route>

          <Route exact path="/contact" element={<Contact />}>
          </Route>

         
              
        </Routes>
      </BrowserRouter>
    </div >   
    

     
        
    
    
  );
}

export default App;
 
        
    
      