import { NAVBAR_FLOW_STAGES } from "src/constants/flow-stages";
import { create, StateCreator } from "zustand";

type ValueOf<T> = T[keyof T];

interface IState {
  navbarState: ValueOf<typeof NAVBAR_FLOW_STAGES> | null;
}

interface IMethods {
  setNavbarStage: (navbarState: IState["navbarState"]) => void;
  reset: () => void;
}

const STORE_NAME = "saaslo-flow-store";

const initialState: IState = {
  navbarState: null,
};

type TStore = IState & IMethods;

const store: StateCreator<TStore> = (set) => ({
  ...initialState,
  setNavbarStage: (navbarState) => set({ navbarState }),
  reset: () => set(initialState),
});

const useFlowStore = create(store);

export default useFlowStore;
