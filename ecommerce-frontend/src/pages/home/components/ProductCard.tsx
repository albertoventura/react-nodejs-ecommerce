import { IProduct } from "../../../core/interfaces/Product.interface";
import { Link, useNavigate } from "react-router-dom";
import { BsCartPlus } from 'react-icons/bs';
interface ProductCardProps {
    product: IProduct,
    click: (product: IProduct) => void
} 
export default function ProductCard({product, click}: ProductCardProps ) {
    const navigate = useNavigate();
    function handleClick(){
        navigate(`/product/${product._id}`);
    }
    return (
        <section 
            key={product._id} 
            className="w-full flex flex-col justify-between cursor-pointer rounded-lg p-5 border hover:shadow-lg"
            onClick={handleClick}
        >
            <img
                className="w-full rounded-lg max-h-70 mb-2"
                src={product.cover}
                alt={product.title}
            />                        
            <div className="flex flex-col justify-end">
                <p className="font-medium mt-1 mb-2">{product.title}</p>
                <div className="flex gap-3 items-center">
                    <strong className="text-zinc-700/90">
                        {product?.price?.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "USD"
                        })}
                    </strong>
                    {/* <button className="bg-zinc-900 p-1 rounded" onClick={ () => click(product) }>
                        <BsCartPlus size={20} color="#FFF"/>
                    </button> */}
                </div>
            </div>

        </section>
    )
}