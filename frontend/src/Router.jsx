import {
     Route,
     createBrowserRouter,
     createRoutesFromElements
} from 'react-router-dom'
import IndexPage from './pages/index.jsx'
import ErrorPage from "./pages/404.jsx"
const Router = createBrowserRouter(
    createRoutesFromElements(<>
    <Route path="/" element={<IndexPage/>}/>
    <Route path="*" element={<ErrorPage/>} />
</>
))

export default Router
