import ContextPage from "./components/ContextPage/ContextPage";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: '5vh'}}>
        <Link to="/">Home</Link> | <Link to="/context-page">Context Example</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/context-page" element={<ContextPage />}/>
      
      </Routes>
    </Router>
  );
}

export default App;
