export default function UserList({ users }) {
    if (users==null) users=[]
    
    return (
        <div className='container user'>
            <h2>Users</h2>
            <ul className='list user'>
                {users.map(({ userId, userName }) => (
                    <li key={userId} className='item user'>
                        {userName}
                    </li>
                ))}
            </ul>
        </div>
    )
}
