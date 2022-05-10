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
import Particles from "react-tsparticles";




function App() {
  const particlesInit = (main) => {
    console.log(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  
  return ( 
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{


          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#0ED7A8",
            },
            links: {
              color: "#00000",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 15,
            },
            opacity: {
              value: 2,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 1.5,
            },
          },
          detectRetina: true,
        }}
      />  
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
       
          
          
         
              
       
    
   
     
    

     
        
    
    
  
 
        
    
      