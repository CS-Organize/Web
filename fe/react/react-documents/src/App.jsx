import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Data from "./components/Data";
import List from "./components/List";
import MyBtn from "./components/Event";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/data">Data</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/btn">MyBtn</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/data" element={<Data />} />
          <Route path="/list" element={<List />} />
          <Route path="/btn" element={<MyBtn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
