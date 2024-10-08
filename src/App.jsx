import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Rootlayout from "./layout/Rootlayout";
import Home from "./pages/Home";
import About from "./pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
