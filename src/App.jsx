import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from './pages/Home'
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import MyAccount from "./pages/MyAccount";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/shop",
          element: <Shop/>,
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contacts",
          element:<Contacts/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/singup",
          element:<Singup/>
        },
        {
          path:"/myaccount",
          element:<MyAccount/>
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:'/checkout',
          element:<Checkout/>
        },
        {
          path:"*",
          element:<Error/>
        },
      ],
    },
  
  ]);

  
  return (
    <>
       <RouterProvider router={router} />

    </>
  );
}

export default App;
