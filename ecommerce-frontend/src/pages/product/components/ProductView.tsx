
import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { IProduct } from '../../../core/interfaces/Product.interface';
import { BsCartPlus } from 'react-icons/bs'
import { Context } from "../../../core/context/context";
import { ProductService } from '../services/ProductService';
import { ApiException } from '../../../core/services/ApiException';
import { ToastService } from '../../../shared/services/ToastService';

export default function ProductView(){
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>()
  const { addItemCart } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct(){
        const response: IProduct | ApiException = await ProductService.getById(id!);  
        setProduct(response);
    }
    getProduct();
  }, [id]);

  function handleEditProduct(){
    navigate("/product/edit", {state: product});
  }
  function handleAddItem(product: IProduct){
    ToastService.ShowSuccess("Product added to cart.");
    addItemCart(product);
    navigate("/cart");
  }


  return(
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto my-6">
        {product && (
          <section className="w-full">
            <div className="flex flex-col lg:flex-row border-b border-gray-900/10 pb-12">
              <img
                className="flex-1 w-full max-h-72 object-contain"
                src={product?.cover}
                alt={product?.title}
              />

              <div className="flex-1 ml-5">
                <div className='flex flex-col justify-between'>

                    <div className='flex flex-col'>
                      <p className="font-bold text-2xl mb-2">{product?.title}</p>
                      <p className="my-4">{product?.description}</p>
                    </div>
                    <div className='flex flex-row'>
                      <strong className="text-zinc-700/90 text-xl">
                        {product?.price?.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "USD"
                        })}
                      </strong>
                      <button className="bg-zinc-900 p-1 rounded ml-3" onClick={ () => handleAddItem(product) }>
                        <BsCartPlus size={20} color="#FFF" />
                      </button>
                    </div>
                  </div>

                </div>

            </div>

            <div className="mt-6 flex items-center justify-center gap-x-6">
                    <button
                        onClick={handleEditProduct}
                        className={" rounded-md bg-indigo-600 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                    >
                      Edit
                    </button>
                </div>
          </section>
        )}
      </main>
    </div>
  )
}