import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import Product from "./pages/product";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./components/CityList";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<p>List of Lands</p>} />
            <Route path="cities" element={<CityList />} />
            <Route path="countries" element={<p>List of countries</p>} />
          </Route>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
