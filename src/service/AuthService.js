class AuthService {
    setToken(token) {
        localStorage.setItem('token', token);
    }
    removeToken() {
        localStorage.removeItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    isAuthenticated() {
        return !!localStorage.getItem('token');
    }
}
const AuthStatus = new AuthService();
export default AuthStatus;