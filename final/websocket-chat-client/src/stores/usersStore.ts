import { create } from "zustand";

const usersStore = create((set, get) => ({
    users: null,
    getUsers: () => { 
        console.log("get users " + get().rooms)
        return get().users 
    },
    setUsers: (value) => {
        console.log("set users " + value)
        set((state) => ({ users: value }))
        console.log("setted users " + get().users)
    },
    getUser: (userID) => { 
        const user = get().users.find((user) => user.id === userID);
        return user
    },
}));

export default usersStore;
