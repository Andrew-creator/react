import { create } from "zustand";

const messagesStore = create((set, get) => ({
    messages: null,
    getMessages: () => { 
        console.log("get messages " + get().messages)
        return get().messages 
    },
    setMessages: (value) => {
        console.log("set messages " + value)
        set((state) => ({ messages: value }))
        console.log("setted messages " + get().messages)
    },
}));

export default messagesStore;
