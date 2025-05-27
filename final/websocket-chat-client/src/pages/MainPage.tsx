import roomsStore from "../stores/roomsStore";
import authService from "../services/auth.service";
import { Navigate } from "react-router-dom";
import { RoomList } from "../components/RoomList";
import useChat from "../hooks/useChat";

function MainPage() {
    const { connectToServer } = useChat()
    const { getRooms } = roomsStore()
    const rooms = getRooms()
    const currentUser = authService.getCurrentUser();

    if (currentUser != null) {
        connectToServer()
        if (rooms!=null) {
            return <RoomList />
        } else {
            return(
                <>
                    <div>MainPage</div>
                </>
            );
        }
    } else {
        return(
            <Navigate to="/login" />
        )
    }
}

export default MainPage
