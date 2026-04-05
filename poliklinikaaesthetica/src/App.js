import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import CommingSoon from './components/CommingSoon';


// Pages
import HomePage from "./pages/HomePage";

// Styles
import "./styles/Global.css"

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommingSoon/>} />        
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    
    
    
    
    
    
    </>
  );
}

export default App;
