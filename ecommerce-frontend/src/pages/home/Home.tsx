import { useEffect, useState, useContext } from 'react'
import { BsCartPlus } from 'react-icons/bs'

import { productsDB } from "../../core/services/api";
import { Context } from "../../core/context/context";
//import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

export interface ProductProps{
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export default function Home(){
  const { addItemCart } = useContext(Context)
  const [products, setProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    async function getProducts(){
      //const response = await api.get("/products")
      const response = productsDB;
      console.log("@", response);
      
      setProducts(response)
      console.log("@@", products);
      
    }

    getProducts();
  }, [])

  function handleAddCartItem(product: ProductProps){
    addItemCart(product);
  }


  return(
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.map( (product) => (
            <section key={product.id} className="w-full">
                <Link to={`/product/${product.id}`}>
                    <img
                        className="w-full rounded-lg max-h-70 mb-2"
                        src={product.cover}
                        alt={product.title}
                    />
                    <p className="font-medium mt-1 mb-2">{product.title}</p>
                </Link>
  
                <div className="flex gap-3 items-center">
                    <strong className="text-zinc-700/90">
                        {product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                        })}
                    </strong>
                    <button className="bg-zinc-900 p-1 rounded" onClick={ () => handleAddCartItem(product) }>
                        <BsCartPlus size={20} color="#FFF"/>
                    </button>
                </div>
  
            </section>
          ))}

        </div>

      </main>
    </div>
  )
}