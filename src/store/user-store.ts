import { create, StateCreator } from "zustand";

interface IUserState {
  name: string | null;
  email: string | null;
  company: string | null;
}

interface IUserMethods {
  setName: (name: string | null) => void;
  setEmail: (email: string | null) => void;
  setCompany: (company: string | null) => void;
  setUser: (user: IUserState) => void;
}

const initialState: IUserState = {
  name: "",
  email: "",
  company: "",
};

type TStore = IUserState & IUserMethods;

const store: StateCreator<TStore> = (set) => ({
  ...initialState,
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setCompany: (company) => set({ company }),
  setUser: (user) => set(user),
});

const useUserStore = create(store);

export default useUserStore;
