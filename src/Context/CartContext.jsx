import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // لتجنب تكرار التوست
  const [lastAddedItem, setLastAddedItem] = useState(null);
  const [lastRemovedItem, setLastRemovedItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // مراقبة آخر إضافة للكارت
  useEffect(() => {
    if (lastAddedItem) {
      const exist = cartItems.find(item => item.id === lastAddedItem.id && item.quantity > 1);
      if (exist && exist.quantity > 1) {
        toast.info(`✔ تم زيادة كمية ${lastAddedItem.name} في السلة`, { autoClose: 2000 });
      } else {
        toast.success(`✅ تم إضافة ${lastAddedItem.name} إلى السلة`, { autoClose: 2000 });
      }
      setLastAddedItem(null);
    }
  }, [lastAddedItem, cartItems]);

  // مراقبة آخر حذف للكارت
  useEffect(() => {
    if (lastRemovedItem) {
      toast.error(`🗑️ تم حذف ${lastRemovedItem.name} من السلة`, { autoClose: 2000 });
      setLastRemovedItem(null);
    }
  }, [lastRemovedItem]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    setLastAddedItem(product);
  };

  const removeFromCart = (id) => {
    const removedItem = cartItems.find((item) => item.id === id);
    if (removedItem) setLastRemovedItem(removedItem);

    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
