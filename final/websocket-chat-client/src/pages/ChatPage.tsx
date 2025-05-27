import useChat from '../hooks/useChat'
import MessageInput from '../components/MessageInput'
import MessageList from '../components/MessageList'
import messagesStore from '../stores/messagesStore'
import usersStore from '../stores/usersStore'
import UserList from '../components/UserList'


function ChatPage () {
    const { getUsers } = usersStore()
    const users = getUsers()
    const { getMessages } = messagesStore()
    const messages = getMessages()
    const { log, sendMessage, removeMessage } = useChat()

  return (
    <div className='w-full h-full'>
      <div className='h-9/10 overflow-x-hidden overflow-y-auto'>
        <MessageList
          log={log}
          messages={messages}
          removeMessage={removeMessage}
        />
      </div>
      <div className='h-[50px] pt-[10px]'>
        <MessageInput sendMessage={sendMessage} />
      </div>
      
    </div>
  )
  /* <UserList users={users} /> */
}

export default ChatPage