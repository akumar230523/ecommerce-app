import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import ACH from './pages/ACH.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import ProductList from './pages/ProductList.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import NotFound from './pages/NotFound.jsx';

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <> <Home /> <ProductList /> </> },
            { path: 'ach', element: <ACH /> },
            { path: 'sign-in', element: <SignIn /> },
            { path: 'sign-up', element: <SignUp /> },
            { path: 'product-list', element: <ProductList /> },
            { path: 'product-detail/:id', element: <ProductDetail /> },
            { path: 'cart', element: <Cart /> },
            { path: 'checkout', element: <Checkout /> },
        ],
        errorElement: <NotFound />,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={appRouter} />
    </StrictMode>
);