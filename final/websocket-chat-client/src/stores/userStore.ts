import { create } from "zustand";

const userStore = create((set, get) => ({
  userName: "",
  password: "",
  getUserName: () => { return get().userName },
  setUserName: (value) => set((state) => ({ userName: value })),
  getPassword: () => { return get().password },
  setPassword: (value) => set((state) => ({ password: value })),
}));

export default userStore;
