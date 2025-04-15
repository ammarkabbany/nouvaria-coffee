import { toast } from 'sonner';
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  catalog_object_id: string,
  uid: string,
  quantity: number,
  name: string,
  base_price_money: {
    amount: number,
    currency: string
  }
  item_type: 'ITEM',
  note: string,
  variation_name: string
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getTotal: () => number;
  getTotalItems: () => number;
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (newItem) => set((state) => {
        toast.success('Item Added')
        const existingItem = state.items.find(item => item.uid === newItem.uid);
        if (existingItem) {
          return {
            items: state.items.map(item =>
              item.uid === newItem.uid
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        }
        return { items: [...state.items, { ...newItem, quantity: 1 }] };
      }),

      removeItem: (id) => set((state) => ({
        items: state.items.filter(item => item.uid !== id)
      })),

      updateQuantity: (id, quantity) => set((state) => ({
        items: state.items.map(item =>
          item.uid === id ? { ...item, quantity } : item
        )
      })),

      clearCart: () => set({ items: [] }),

      getSubtotal: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.base_price_money.amount * item.quantity, 0);
      },

      getTotal: () => {
        const subtotal = get().getSubtotal();
        return subtotal;
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