//import { nanoid } from 'nanoid'
import { useRef, useState } from 'react'
import authService from '../services/auth.service';
import variablesStore from '../stores/variablesStore';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

export default function MessageInput({ sendMessage }) {
    const user = authService.getCurrentUser();
    const [text, setText] = useState('')
    const inputRef = useRef(null)
    const { getCurrentRoomID } = variablesStore()
    const roomId = getCurrentRoomID()

    const onSubmit = async (e) => {
        e.preventDefault()

        const message = {
//            messageId: nanoid(),
            userID: user.id,
            userName: user.name,
            roomId: roomId,
            messageType: 'text',
            text: text
        }

        sendMessage(message)

        setText('')
    }

  return (
    <form onSubmit={onSubmit}>
      <div className='flex flex-row'>
        <div className='w-full'>
          <TextField autoFocus fullWidth variant="standard" placeholder='Message...' onChange={(e) => setText(e.target.value)} value={text} ref={inputRef} />
        </div>
        <div className='pl-[10px]'>
          <Button type='submit' variant="contained">Send</Button>
        </div>
      </div>
    </form>
  )
}
