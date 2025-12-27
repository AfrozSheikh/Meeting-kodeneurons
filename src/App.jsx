import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meet from "./pages/Meet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:roomId" element={<Meet />} />
    </Routes>
  );
}

export default App;
