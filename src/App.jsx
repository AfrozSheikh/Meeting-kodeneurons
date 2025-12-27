import { Routes, Route } from "react-router-dom";
import Meet from "./pages/Meet";

function App() {
  return (
    <Routes>
      <Route path="/:roomId" element={<Meet />} />
    </Routes>
  );
}

export default App;
