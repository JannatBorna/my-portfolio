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
import Details from './components/Pages/Details/Details';
import AboutMe from './components/Pages/AboutMe/AboutMe';
import Profile from './components/Pages/Profile/Profile';
import Blogs from './components/Pages/Blogs/Blogs/Blogs';
import RecentProjects from './components/Pages/RecentProjects/RecentProjects/RecentProjects';




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

          <Route exact path="/aboutMe" element={<AboutMe />}>
          </Route>

          <Route exact path="/blogs" element={<Blogs />}>
          </Route>

          <Route exact path="/recentProject" element={<RecentProjects />}>
          </Route>

          <Route path="/profile" element={<Profile />}>
          </Route>

          <Route exact path="/contact" element={<Contact />}>
          </Route>

        

          <Route exact path="/details/:projectsId" element={<Details />}>
          </Route>  

          </Routes>
      </BrowserRouter> 

   </div >   
    
  );
}

export default App;   
       
          
          
         
              
       
    
   
     
    

     
        
    
    
  
 
        
    
      