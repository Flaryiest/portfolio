import {
     Route,
     createBrowserRouter,
     createRoutesFromElements
} from 'react-router-dom'
import IndexPage from './pages/index.jsx'

const Router = createBrowserRouter(
    createRoutesFromElements(<>
    <Route path="/" element={<IndexPage/>}/>
</>
))

export default Router
