import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Factory from "./components/factory/factory";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/Factory" Component={Factory} />
      </Routes>
    </Router>
  );
}

export default App;
