import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Earth } from "./pages/Destination/Earth";
import { Mars } from "./pages/Destination/Mars";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/destination/earth", element: <Earth /> },
    { path: "/destination/mars", element: <Mars /> },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
