import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
