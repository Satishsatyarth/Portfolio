
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import myRoute from './Routing.jsx'

createRoot(document.getElementById('root')).render(
 <RouterProvider router={myRoute}/>
)
