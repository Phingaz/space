import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Moon } from "./pages/Destination/Moon";
import { Mars } from "./pages/Destination/Mars";
import { Europa } from "./pages/Destination/Europa";
import { Titan } from "./pages/Destination/Titan";
import { Doug } from "./pages/Crew/Doug";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/destination/moon", element: <Moon /> },
    { path: "/destination/mars", element: <Mars /> },
    { path: "/destination/europa", element: <Europa /> },
    { path: "/destination/titan", element: <Titan /> },
    { path: "/crew/doug", element: <Doug /> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
