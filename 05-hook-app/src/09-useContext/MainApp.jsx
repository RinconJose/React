import {Route,Routes,Navigate} from 'react-router-dom'
import { HomePage,LoginPage,AboutPage,Navbar } from './'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
    return (
        <UserProvider>
            {/* <h1>MainApp</h1> */}
            <Navbar/>
            <hr />

            <Routes>
                <Route 
                    path='/'
                    element={<HomePage />}
                />
                <Route 
                    path='/login'
                    element={<LoginPage />}
                />
                <Route 
                    path='/about'
                    element={<AboutPage />}
                />
                {/* <Route 
                    path='/*'
                    element={<LoginPage />}
                /> */}
                {/* Si una url no existe 404 */}
                <Route 
                    path='/*'
                    element={<Navigate to="/about" />}
                />
            </Routes>
        </UserProvider>
    )
}
