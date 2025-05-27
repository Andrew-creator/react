import { create } from "zustand";

const variablesStore = create((set, get) => ({
    currentRoomID: -1,
    getCurrentRoomID: () => { 
        console.log("get currentRoomID " + get().currentRoomID)
        return get().currentRoomID 
    },
    setCurrentRoomID: (value) => {
        console.log("set currentRoomID " + value)
        set((state) => ({ currentRoomID: value }))
        console.log("setted currentRoomID " + get().currentRoomID)
    },
}));

export default variablesStore;
