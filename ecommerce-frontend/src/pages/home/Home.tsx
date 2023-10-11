import { useEffect, useState, useContext } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { Context } from "../../core/context/context";

import { Link } from 'react-router-dom'
import { ProductService } from '../product/services/ProductService';
import { IProduct } from '../../core/interfaces/Product.interface';
import { ApiException } from '../../core/services/ApiException';
import ProductCard from './components/ProductCard';
import { ToastService } from "../../shared/services/ToastService"

export default function Home(){
  const { addItemCart } = useContext(Context)
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    async function getProducts(){
      const response: IProduct[] | ApiException = await ProductService.getAll();
      setProducts(response);
    }

    getProducts();
  }, [])

  function handleAddCartItem(product: IProduct){
    ToastService.ShowSuccess("Product added to cart.");
    addItemCart(product);
  }


  return(
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <div className="flex flex-row justify-center mt-10">
          <h1 className="font-bold text-2xl mb-4  text-center">Produtos</h1>
          <Link to={"/product/edit"}>
            <button className="bg-purple-600 p-1 mt-1 rounded-full h-7 ml-3" >
              <BsPlusCircle size={20} color="#FFF"/>
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.map( (product) => (            
              <ProductCard product={product} click={handleAddCartItem}/>
          ))}

        </div>

      </main>
    </div>
  )
}