import authService from "../services/auth.service";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";

function HomePage() {
    console.log("draw home page")

    const currentUser = authService.getCurrentUser();

    console.log("current user is " + currentUser)

    return(
        <>
            {currentUser ? ( <MainPage /> ) : ( <LoginPage /> )}
        </>
    );
}

export default HomePage
