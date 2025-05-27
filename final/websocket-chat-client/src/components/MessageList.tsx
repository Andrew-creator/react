import { useEffect, useRef } from 'react'
import MessageItem from './MessageItem'


export default function MessageList({ log, messages, removeMessage }) {
  const logRef = useRef(log)
  const bottomRef = useRef(null)

  if (messages==null) messages=[]

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [messages])

  useEffect(() => {
    if (log) {
      logRef.current.style.opacity = 0.8
      logRef.current.style.zIndex = 1

      const timerId = setTimeout(() => {
        logRef.current.style.opacity = 0
        logRef.current.style.zIndex = -1

        clearTimeout(timerId)
      }, 1500)
    }
  }, [log])

  return (
    <div className='w-full h-full'>
      <h2>Messages</h2>
      <div>
        {messages.map((message) => (
          <MessageItem
            key={message.messageId}
            message={message}
            removeMessage={removeMessage}
          />
        ))}

        <p ref={bottomRef}></p>
      </div>
    </div>
  )
}
