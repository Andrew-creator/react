import authService from '../services/auth.service';

export default function MessageItem({ message, removeMessage }) {
    const user = authService.getCurrentUser();

    let element=<p>{message.text}</p>

    const isMyMessage = user.id === message.userID

    if (isMyMessage) {
        return (
            <div className='w-full flow-root p-[10px]'>
                <div className="float-right p-[20px] bg-orange-500 rounded-xl">{element}</div>
            </div>
        )
    } else {
        return (
            <div className='w-full flow-root p-[10px]'>
                <div className="float-left p-[20px] bg-green-500 rounded-xl">{element}</div>
            </div>
        )
    }
}
