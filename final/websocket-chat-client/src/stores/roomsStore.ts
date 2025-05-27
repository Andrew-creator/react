import { create } from "zustand";

const roomsStore = create((set, get) => ({
    rooms: null,
    getRooms: () => { 
        console.log("get rooms " + get().rooms)
        return get().rooms 
    },
    setRooms: (value) => {
        console.log("set rooms " + value)
        set((state) => ({ rooms: value }))
        console.log("setted rooms " + get().rooms)
    },
    getRoom: (roomID) => { 
        const room = get().rooms.find((room) => room.id === roomID);
        return room
    },
}));

export default roomsStore;
