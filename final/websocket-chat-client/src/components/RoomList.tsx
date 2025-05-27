//import useChat from '../hooks/useChat'
import { List, ListItem } from '@mui/material';
import { Room } from './Room';
import roomsStore from '../stores/roomsStore';


export const RoomList = () => {
//  const { rooms, getRoomsList } = useChat()

//  const { getRoomsList } = useChat()
  const { getRooms } = roomsStore()
  const rooms = getRooms()
  
  if (rooms != null) {
  return (
    <>
    <h1>Выберите комнату чата</h1>
    <List className='w-full'>
        {rooms.map((room) => (
          <ListItem key={room.id}>
            <Room id={room.id} name={room.name} />
          </ListItem>
        ))}
    </List>
    </>
  )
    } else {
        return <></>
    }
}
