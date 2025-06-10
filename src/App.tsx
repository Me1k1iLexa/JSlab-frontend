import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadUserRequest} from "./store/user/userSlice.ts";

import Layout from './Layout'
import MainPage from './pages/Main/Main.tsx'
import LoginPage from "./pages/LoginAuth/Login.tsx";
import RegisterPage from "./pages/LoginAuth/Register.tsx";

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUserRequest())
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
            </Route>

            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
    )
}
 export default App