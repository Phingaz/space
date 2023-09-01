import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Destination } from "./pages/Destination/Destination";
import { Moon } from "./pages/Destination/Moon";
import { Mars } from "./pages/Destination/Mars";
import { Europa } from "./pages/Destination/Europa";
import { Titan } from "./pages/Destination/Titan";
import { useEffect } from "react";
// import { Doug } from "./pages/Crew/Doug";
// import { Mark } from "./pages/Crew/Mark";
// import { Vic } from "./pages/Crew/Vic";
// import { Ans } from "./pages/Crew/Ans";
// import { Vehicle } from "./pages/Tech/Vehicle";

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
    // {
    //   path: "/crew",
    //   element: <Doug />,
    //   children: [
    //     { path: "doug", element: <Doug /> },
    //     { path: "mark", element: <Mark /> },
    //     { path: "vic", element: <Vic /> },
    //     { path: "ans", element: <Ans /> },
    //   ],
    // },
    // { path: "/tech", element: <Vehicle /> },
  ]);  
  useEffect(() => {

  }, [])
  return <RouterProvider router={router} />;
}

export default App;
