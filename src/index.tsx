import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from 'react-router-dom'
import Good from './pages/Good';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// root.render(
//   <React.StrictMode>
//    <BrowserRouter basename={process.env.PUBLIC_URL}>
//      <App />
//    </BrowserRouter>
//   </React.StrictMode>
// );
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "good",
        element: <Good />,
        // loader: goodLoader,
      },
    ],
  },
]);
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//     <Route path="/good" element={<Good />} />
//     </Route>
//   )
// );
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register(); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
