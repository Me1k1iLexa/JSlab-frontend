import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import MainPage from './pages/MainPage/Main.tsx'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
            </Route>
        </Routes>
    )
}
 export default App