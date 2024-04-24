import { Navigate, Routes, Route } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';

export const AuthRoutes = () => {
    return (
      <Routes>
          <Route path="Login" element={<LoginPage/>}/>
          <Route path="register" element={<RegisterPage/>}/>
          <Route path="/*" element={<Navigate to="/auth/login"/> } /> // Sí la ruta es diferente a las otras lo redireccionamos al login
      </Routes>
    )
}
