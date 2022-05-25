import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCartItems, selectCartTotal } from "../../redux/cart";

export const useCart = (): {
  cartItems: any[];
  cartTotal: number;
  clearCart: () => void;
} => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  return {
    cartItems,
    cartTotal,
    clearCart: () => dispatch(clearCart()),
  };
};
