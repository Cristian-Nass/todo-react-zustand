import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools((set) => ({
    todo: [],
    addTodo: (data) => {
      set((state) => {
        return {
          todo: [...state.todo, data],
        };
      });
    },
    removeTodo: (id) => {
      set((state) => {
        return {
          todo: state.todo.filter((item) => item.id !== id),
        };
      });
    },
    updateTodo: (id) => {
      set((state) => {
        return {
          todo: [
            ...state.todo.map((obj) => {
              if (obj.id === id) {
                return {
                  ...obj,
                  done: !obj.done,
                };
              }
              return obj;
            }),
          ],
        };
      });
    },
  }))
);
