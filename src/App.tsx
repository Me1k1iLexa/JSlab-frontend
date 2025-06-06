import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import MainPage from './pages/Main/Main.tsx'
import LoginPage from "./pages/LoginAuth/Login.tsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
            </Route>

            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    )
}
 export default App