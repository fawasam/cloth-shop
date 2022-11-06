import "./App.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/header";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="signin" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
