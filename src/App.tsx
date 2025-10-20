import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TimerAi from "./pages/OhWowTimerAi";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AhThisIsAi" element={<TimerAi />} />
      </Routes>
    </Router>
  );
}

export default App;
