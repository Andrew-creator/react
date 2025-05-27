import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function NaviBar() {
    const currentUser = authService.getCurrentUser();

    const navigate = useNavigate()

    const logOut = () => {
        authService.logout()
        navigate("/")
        location.reload()
    }

    const goToHome = () => {
        navigate("/")
        location.reload()
    }
    const goToMainPage = () => {
        navigate("/main")
    }
    const goToLogin = () => {
        navigate("/login")
    }
    const goToRegister = () => {
        navigate("/register")
    }

    return (
        <>
        <div>
            <nav>
                <Button onClick={goToHome}>Chat</Button>
                { currentUser && <Button onClick={goToMainPage}>MainPage</Button>}
                { currentUser && <Button onClick={logOut}>Logout</Button> }
                { !currentUser && <Button onClick={goToLogin}>Login</Button> }
                { !currentUser && <Button onClick={goToRegister}>Sign Up</Button> }
            </nav>
        </div>
        </>
    )
}

export default NaviBar