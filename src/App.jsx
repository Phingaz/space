import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Landing } from "./pages/Landing";
import { Destination } from "./pages/Destination";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </>
  );
}

export default App;
