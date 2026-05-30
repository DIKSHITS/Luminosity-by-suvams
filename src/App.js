import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import CollectionSection from "./components/CollectionSection";



function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<CollectionSection />} />
        
      </Routes>

    </Router>
  );
}

export default App;