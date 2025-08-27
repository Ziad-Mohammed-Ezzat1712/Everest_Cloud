import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import OurTeam from './Components/OurTeam/OurTeam';
import ContactUs from './Components/ContactUs/ContactUs';
import Shop from './Components/Shop/Shop';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Login from './Components/Login/Login';
import Blog from './Components/Blog/Blog';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import { DarkModeContext, DarkModeProvider } from './Context/DarkModeContext';
import { useContext } from 'react';











// eslint-disable-next-line no-unused-vars
let x = createBrowserRouter([
  {path : "" , element:<Layout/>,children:[
   {index:true , element:<Home/>},
   {path:"about" , element:<About/>},
   {path:"team" , element:<OurTeam/>},
   {path:"contact" , element:<ContactUs/>},
   {path:"/shop/shop" , element:<Shop/>},
   {path:"/product/:id" , element:<ProductDetails/>},
   {path:"/shop/login" , element:<Login/>},
   {path:"blog" , element:<Blog/>},
   {path:"/blog/:id" , element:<BlogDetails/>},
   
  ]
  }


  ])
  

function App() {
 const { darkMode } = useContext(DarkModeContext);


  return(
  
  <>
   <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
<DarkModeProvider>
      <RouterProvider router={x}></RouterProvider>
      </DarkModeProvider>
</div>
  </>
  )
}

export default App;
