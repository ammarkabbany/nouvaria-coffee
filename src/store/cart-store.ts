import { toast } from 'sonner';
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  id: string;
  name: string;
  price: number;
  variation_name: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getTax: () => number;
  getTotal: () => number;
  getTotalItems: () => number;
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (newItem) => set((state) => {
        toast.success('Item Added')
        const existingItem = state.items.find(item => item.id === newItem.id);
        if (existingItem) {
          return {
            items: state.items.map(item =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        }
        return { items: [...state.items, { ...newItem, quantity: 1 }] };
      }),

      removeItem: (id) => set((state) => ({
        items: state.items.filter(item => item.id !== id)
      })),

      updateQuantity: (id, quantity) => set((state) => ({
        items: state.items.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      })),

      clearCart: () => set({ items: [] }),

      getSubtotal: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },

      getTax: () => {
        const subtotal = get().getSubtotal();
        return subtotal >= 50 ? 0 : 5.99;
      },

      getTotal: () => {
        const subtotal = get().getSubtotal();
        const shipping = get().getTax();
        return subtotal + shipping;
      },

      getTotalItems: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.quantity, 0)
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);

export default useCartStore;