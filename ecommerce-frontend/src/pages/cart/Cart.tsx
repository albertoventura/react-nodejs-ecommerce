import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../core/context/context';

export default function Cart(){
  const { cart, total, addItemCart, removeItemCart } = useContext(Context);

  return(
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">My cart:</h1>

      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium">Oops your cart is empty...</p>
          <Link 
            to="/"
            className="bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded"
          >
            Go shop!
          </Link>
        </div>
      )}

      {cart.map( (item) => (
        <section key={item._id} className="flex items-center justify-between border-b-2 border-gray-300">
          <img
            src={item.cover}
            alt={item.title} 
            className="w-28 m-1"
          />
  
          <strong>Price: {item?.price?.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "USD"
                        })}</strong>
  
          <div className="flex items-center justify-center gap-3">
            <button
            onClick={ () => removeItemCart(item) }
            className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
            >
              -
            </button>
  
            {item.amount}
  
            <button
            onClick={ () => addItemCart(item) }
            className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
            >
              +
            </button>
          </div>
  
  
          <strong className="float-right">
            Subtotal: {item.total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "USD"
            })}
          </strong>  
        </section>
      ))}

      {cart.length !== 0 && <p className="font-bold mt-4 justify-center flex">Total: {total}</p> }
    </div>
  )
}