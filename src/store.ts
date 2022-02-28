import create from 'zustand'

type State = {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}

export const useStore = create<State>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

export default useStore
