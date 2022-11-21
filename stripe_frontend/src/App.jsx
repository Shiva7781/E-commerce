import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pay from "./components/Pay";
import Success from "./components/Success";

function App() {
  return (
    <div className=" ">
      <Router>
        <Routes>
          <Route path="/pay" element={<Pay />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
