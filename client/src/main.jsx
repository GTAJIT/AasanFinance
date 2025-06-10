import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing, About, Contact, Chatbot, Courses, GovtSrc, Mentors } from './pages/pages.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "about", 
        element: <About />,
      },
      {
        path: "features/courses",
        element: <Courses />,
      },
      {
        path: "features/govt-scheme", 
        element: <GovtSrc />,
      },
      {
        path: "features/mentors", 
        element: <Mentors />,
      },
      {
        path: "chatbot",
        element: <Chatbot />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
