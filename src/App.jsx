import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Moon } from "./pages/Destination/Moon";
import { Mars } from "./pages/Destination/Mars";
import { Europa } from "./pages/Destination/Europa";
import { Titan } from "./pages/Destination/Titan";
import { Doug } from "./pages/Crew/Doug";
import { Mark } from "./pages/Crew/Mark";
import { Vic } from "./pages/Crew/Vic";
import { Ans } from "./pages/Crew/Ans";
import { Vehicle } from "./pages/Tech/Vehicle";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/destination", element: <Moon /> },
    { path: "/destination/moon", element: <Moon /> },
    { path: "/destination/mars", element: <Mars /> },
    { path: "/destination/europa", element: <Europa /> },
    { path: "/destination/titan", element: <Titan /> },
    { path: "/crew", element: <Doug /> },
    { path: "/crew/doug", element: <Doug /> },
    { path: "/crew/mark", element: <Mark /> },
    { path: "/crew/vic", element: <Vic /> },
    { path: "/crew/ans", element: <Ans /> },
    { path: "/tech", element: <Vehicle /> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
