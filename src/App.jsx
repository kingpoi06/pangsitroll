import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import Login from "./views/loginpage/index";

import Dashboard from"./admin/dashboard";



function App() {
  return (
    <Router>
      <Routes>
        {/* Fitur */}
        <Route path="/" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
