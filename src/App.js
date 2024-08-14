import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
