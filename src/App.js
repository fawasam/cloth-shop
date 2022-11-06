import "./App.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/header";

const TopicsList = () => (
  <div>
    <h1>TOPIC LIST PAGE</h1>
  </div>
);
const TopicsDetail = () => {
  const { topicId } = useParams();
  console.log(topicId);
  return (
    <div>
      <h1>TOPIC DETAILS PAGE :{topicId}</h1>
    </div>
  );
};
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />

          <Route path="/topics" element={<TopicsList />} />
          <Route path="/topics/:topicId" element={<TopicsDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
