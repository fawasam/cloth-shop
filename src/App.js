import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/header";
import Auth from "./pages/auth/Auth";
import { auth } from "./firebase/firebase.utils.js";
import { useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser({ currentUser: user });
      }
      console.log(user);
      console.log(currentUser);
    });
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Header currentUser={currentUser} />
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
