import { Navigate, Outlet } from "react-router-dom"



const Auth = () => {
    const authenticator = JSON.parse(localStorage.getItem('my-wallet'));
    return authenticator
}

const ProtectedSignIn = () => {
    const isAuth = Auth()

    if (isAuth && isAuth.membership) {
        return <Navigate to="/home" replace />

    } else {
        return <Outlet />
    }

}

export default ProtectedSignIn;