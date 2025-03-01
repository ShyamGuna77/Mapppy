import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import Product from "./pages/product";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/app" element={<AppLayout />} />
          <Route path="/pricing" element ={<Pricing />} />
          <Route path="/product" element ={<Product />}/>
          <Route path="/login" element ={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
