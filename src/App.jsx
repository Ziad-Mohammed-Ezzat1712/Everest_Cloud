import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';











// eslint-disable-next-line no-unused-vars
let x = createBrowserRouter([
  {path : "" , element:<Layout/>,children:[
   {index:true , element:<Home/>}
  ]
  }


  ])
  

function App() {


  return(
  
  <>

      <RouterProvider router={x}></RouterProvider>

  </>
  )
}

export default App;
