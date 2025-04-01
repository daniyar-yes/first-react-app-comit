import ContextPage from "./components/ContextPage/ContextPage";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Counter from "./components/Counter/Counter";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(666.6);

  return (
    <Provider store={store}>
      <Router>
        <nav style={{ marginBottom: "5vh" }}>
          <Link to="/">Home</Link> |
          <Link to="/context-page">Context Example</Link> |
          <Link to="/redux-counter">Redux Counter</Link> |
        </nav>

        <Routes>
          <Route
            path="/"
            element={<HomePage number={number} setNumber={setNumber} />}
          />
          <Route path="/context-page" element={<ContextPage />} />
          <Route
            path="/redux-counter"
            element={<Counter number={number} setNumber={setNumber} />}
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
