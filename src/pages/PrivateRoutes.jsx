import { Navigate, Outlet } from 'react-router-dom';
import AuthStatus from '../service/AuthService';

function PrivateRoutes() {
    const authToken = AuthStatus.isAuthenticated();
    return (
        authToken ? <Navigate to="/" /> : <Outlet />

    );
};

export default PrivateRoutes;