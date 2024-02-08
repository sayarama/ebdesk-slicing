import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/about/about';
import Login from './pages/login/login';
import PageNotFound from "./components/404/404Page"
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, Routes,RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<App/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-in' element={<Login/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
