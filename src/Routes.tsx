import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Perfil from './pages/Perfil/index.tsx'

const AppRoutes = () => {
    return (
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/perfil" element={<Perfil />}></Route>  
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes