import useChat from '../hooks/useChat'
import { useNavigate } from "react-router-dom";
import variablesStore from '../stores/variablesStore'
import { Button } from '@mui/material';

export const Room = (props) => {
    const { connectToRoom } = useChat()
    const roomId = props.id
    const roomName = props.name
    const navigate = useNavigate()
    const { setCurrentRoomID } = variablesStore()

    const selectRoom = () => {
        setCurrentRoomID(roomId)
        connectToRoom(roomId)
        navigate("/chat")
    }

    return (
        <div className='w-full flex justify-center'>
            <Button size='large' onClick={selectRoom}>{roomName}</Button>
        </div>
    )
}
