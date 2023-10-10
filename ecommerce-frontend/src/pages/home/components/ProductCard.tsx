import { IProduct } from "../../../core/interfaces/Product.interface";
import { Link } from "react-router-dom";
import { BsCartPlus } from 'react-icons/bs';

interface ProductCardProps {
    product: IProduct,
    click: (product: IProduct) => void
} 
export default function ProductCard({product, click}: ProductCardProps ) {
    return (
        <section key={product._id} className="w-full">
                <Link to={`/product/${product._id}`}>
                    <div className="w-30 h-40">
                        <img
                            className="w-full rounded-lg max-h-70 mb-2"
                            src={product.cover}
                            alt={product.title}
                        />

                    </div>
                        <p className="font-medium mt-1 mb-2">{product.title}</p>
                </Link>
  
                <div className="flex gap-3 items-center">
                    <strong className="text-zinc-700/90">
                        {product?.price?.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "USD"
                        })}
                    </strong>
                    <button className="bg-zinc-900 p-1 rounded" onClick={ () => click(product) }>
                        <BsCartPlus size={20} color="#FFF"/>
                    </button>
                </div>
  
            </section>
    )
}