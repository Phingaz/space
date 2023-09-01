import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";

import { Landing } from "./pages/Landing";

import { Destination } from "./pages/Destination/Destination";
import { Moon } from "./pages/Destination/Moon";
import { Mars } from "./pages/Destination/Mars";
import { Europa } from "./pages/Destination/Europa";
import { Titan } from "./pages/Destination/Titan";

import { Crew } from "./pages/Crew/Crew";
import { Doug } from "./pages/Crew/Doug";
// import { Mark } from "./pages/Crew/Mark";
// import { Vic } from "./pages/Crew/Vic";
// import { Ans } from "./pages/Crew/Ans";
import { Vehicle } from "./pages/Tech/Vehicle";
import { Tech } from "./pages/Tech/Tech";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    {
      path: "/destination",
      element: <Destination />,
      children: [
        { path: "moon", element: <Moon /> },
        { path: "mars", element: <Mars /> },
        { path: "europa", element: <Europa /> },
        { path: "titan", element: <Titan /> },
        { path: "moon", element: <Moon /> },
      ],
    },
    {
      path: "/crew",
      element: <Crew />,
      children: [{ path: "doug", element: <Doug /> }],
    },
    {
      path: "/tech",
      element: <Tech />,
      children: [{ path: "vehicle", element: <Vehicle /> }],
    },
  ]);
  useEffect(() => {}, []);
  return <RouterProvider router={router} />;
}

export default App;
