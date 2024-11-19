import {
    Route,
    createBrowserRouter,
    createRoutesFromElements
} from 'react-router-dom';
import IndexPage from './pages/index.jsx';
import ErrorPage from './pages/404.jsx';
import Layout from './layout.jsx';

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
);

export default Router;