
import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { productsDB } from "../../../core/services/api";
import { IProduct } from '../../../core/interfaces/Product.interface';
import { BsCartPlus } from 'react-icons/bs'
//import toast from 'react-hot-toast'



import { Context } from "../../../core/context/context";
//import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

export default function ProductView(){
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>()
  const { addItemCart } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct(){
      //const response = await api.get(`/products/${id}`)
      const response = productsDB.map(product => {        
        
        if(product.id == Number(id)) {
          setProduct(product);
        }
        
      });
      
      //setProduct(response);
    }

    getProduct();
  }, [id])

  function handleEditProduct(){
    console.log(';/;2');
    
    navigate("/product/edit", {state: product});
  }
  function handleAddItem(product: IProduct){
    /* toast.success("Produto adicionado no carrinho.", {
      style:{
        borderRadius: 10,
        backgroundColor: "#121212",
        color: "#FFF"
      }
    }) */
    addItemCart(product)

    navigate("/cart")
  }


  return(
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto my-6">
        {product && (
          <section className="w-full">
            <div className="flex flex-col lg:flex-row">
              <img
                className="flex-1 w-full max-h-72 object-contain"
                src={product?.cover}
                alt={product?.title}
              />

              <div className="flex-1 ml-5">
                <p className="font-bold text-2xl mt-4 mb-2">{product?.title}</p>
                <p className="my-4">{product?.description}</p>
                <strong className="text-zinc-700/90 text-xl">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  })}
                </strong>
                <button className="bg-zinc-900 p-1 rounded ml-3" onClick={ () => handleAddItem(product) }>
                  <BsCartPlus size={20} color="#FFF" />
                </button>
              </div>

            </div>
            <div className="mt-6 flex items-center justify-center gap-x-6">
                    {/* <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Delete
                    </button> */}
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