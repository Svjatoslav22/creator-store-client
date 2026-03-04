import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "../types";

type CartItem = Product & { quantity: number };

interface CartState {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addToCart: (product) => {
        set((state) => {
          const existing = state.items.find((item) => item.id === product.id);
          if (!existing) {
            // Якщо товару ще немає — додаємо новий
            return { items: [...state.items, { ...product, quantity: 1 }] };
          }
          if (existing.quantity < product.stock) {
            // Якщо ще не досягли stock — збільшуємо кількість
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            };
          }
          return { items: state.items };
        });
      },
      removeFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      increaseQuantity: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id && item.quantity < item.stock
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        })),
      decreaseQuantity: (id) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0), // Видаляємо, якщо кількість стала 0
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage', 
      storage: createJSONStorage(() => localStorage),
    }
  )
);