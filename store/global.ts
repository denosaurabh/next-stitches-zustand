import create from 'zustand';
import produce from 'immer';

interface GlobalState {
  count: number;
  increaseCount: () => void;
}

const useGlobalState = create<GlobalState>((set) => {
  return {
    count: 0,
    increaseCount: () => {
      set(
        produce((state) => {
          state.count++;
        })
      );
    },
  };
});

export default useGlobalState;
