import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom';
import Layout from './layout.jsx';

import IndexPage from './pages/index.jsx';
import ErrorPage from './pages/404.jsx';
import ContactPage from './pages/contact.jsx';
import AboutPage from "./pages/about.jsx"


const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
);

export default Router;
