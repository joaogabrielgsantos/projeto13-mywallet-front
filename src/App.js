import GlobalStyle from "./assets/css/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoutes from "./services/ProtectedRoutes";
import ProtectedSignIn from "./services/ProtectedSignIn";

function App() {

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route element={<ProtectedSignIn />}>
                        <Route path="/" element={<SignInPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                    </Route>
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/home" element={<HomePage />} />
                    </Route>
                </Routes>
        </BrowserRouter>
        </>

    )
}


export default App;