
import Home from "./components/Homepage";
import Resutlpage from "./components/Resutlpage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return(
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resultpage" element={<Resutlpage />} />
    </Routes>
  </Router>
  );
}

export default App;
