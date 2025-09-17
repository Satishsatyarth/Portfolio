import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from './Component/About'
import Contact from './Component/Contact';
import ProjectSection from './Component/ProjectSection';
import Service from './Component/Service';
import Hero from './Component/Hero';
import App from './App'


const myRoute = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children :[
        {
            index:true,
            element:<Hero/>
        },
        {
            path :"/about",
            element:<About/>
        },
        {
            path :"/home",
            element:<Hero/>
        },
        {
            path :"/contact",
            element:<Contact/>
        },
        {
            path :"/projects",
            element:<ProjectSection/>
        },
        {
            path:'/Services',
            element:<Service/>
        }
    ]
  }
])
export default myRoute;
