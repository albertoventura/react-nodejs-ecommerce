import { createContext, ReactNode, useState  } from 'react'
import { IProduct } from '../interfaces/Product.interface';
interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: IProduct) => void;
  removeItemCart: (product: CartProps) => void;
  total: string;
}

interface CartProps{
  _id: string;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartProviderProps{
  children: ReactNode;
}

export const Context = createContext({} as CartContextData)

function ContextProvider({ children }: CartProviderProps){
  const [cart, setCart] = useState<CartProps[]>([])
  const [total, setTotal] = useState("");

  function addItemCart(newItem: IProduct){
    const indexItem = cart.findIndex(item => item._id === newItem._id)

    if(indexItem !== -1){
      const cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList)
      totalResultCart(cartList);
      return;
    }


    const data = {
      ...newItem,
      amount: 1,
      total: newItem.price
    }


    setCart(products => [...products, data])
    totalResultCart([...cart, data])

  }


  function removeItemCart(product: CartProps){
    const indexItem = cart.findIndex(item => item._id === product._id)

    if(cart[indexItem]?.amount > 1){
      const cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount -1;
      cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;
      
      setCart(cartList);
      totalResultCart(cartList)
      return;
    }

    const removeItem = cart.filter(item => item._id !== product._id)
    setCart(removeItem);
    totalResultCart(removeItem)

  }


  function totalResultCart(items: CartProps[]){
    const myCart = items;
    const result = myCart.reduce((acc, obj) => { return acc + obj.total}, 0)
    const resultFormated = result.toLocaleString("pt-BR", { style: "currency", currency: "USD" })
    setTotal(resultFormated);
  }


  return(
    <Context.Provider 
      value={{ 
        cart,
        cartAmount: cart.length,
        addItemCart,
        removeItemCart,
        total
       }}
    >
      {children} 
    </Context.Provider>
  )
}

export default ContextProvider;