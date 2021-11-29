import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Shared/Header/Header';
import Home from './components/Pages/Home/Home';
import Projects from './components/Pages/Projects/Projects/Projects';

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

              

           </Routes>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
