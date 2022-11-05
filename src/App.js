import Homepage from "./pages/homepage/homepage";
import "./App.css";

import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats page</h1>
    </div>
  );
};
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
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/hats" element={<HatsPage />} />
          <Route path="/topics" element={<TopicsList />} />
          <Route path="/topics/:topicId" element={<TopicsDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
