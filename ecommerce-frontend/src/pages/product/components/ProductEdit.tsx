
import { useNavigate, useLocation } from "react-router-dom";
import formConfig from "../../../core/constants/Config";
import { IProduct } from "../../../core/interfaces/Product.interface"
import { FormEvent,  useState } from "react";
import { ProductService } from "../services/ProductService";
import { CurrencyInput } from 'react-currency-mask';
import RequiredField from "../../../shared/components/form/RequiredField";
import { ToastService } from "../../../shared/services/ToastService";
import ErroInputMessage from "../../../shared/components/form/ErroInputMessage";
import { BsFillImageFill } from 'react-icons/bs'

export default function ProductEdit(){
    const navigate = useNavigate();
    const {state} = useLocation();

    const [product, setProduct] = useState<IProduct>(state);
    const [isValidTitle, setIsValidTitle] = useState<boolean>(true);
    const [isValidPrice, setIsValidPrice] = useState<boolean>(true);
    const [isValidCover, setIsValidCover] = useState<boolean>(true);

    

    function validateForm(){
        return ((isValidTitle && isValidPrice && isValidCover));
    }
    function validateObject(){
        return ((!!product?.title && !!product?.price && !!product?.cover));
    }
    function handleChange({name, value}: HTMLInputElement | HTMLTextAreaElement){
        setProduct({...product, [name]: value});
        
    }

    function validateTitle(){
        const title = product?.title || "";
        
        if(title.length <= formConfig.titleMinLength) {
            setIsValidTitle(false);
            return;
        }

        setIsValidTitle(true);        
        return;
    }
    function validatePrice(){
        const price = product?.price || -1;
        
        if(price < formConfig.priceMinValue ) {
            setIsValidPrice(false)
            return;
        }
        
        setIsValidPrice(true);
        return;
    }

    function validateCover(){        
        
        if(!product?.cover) {
            setIsValidCover(false)
            return;
        }
        
        setIsValidCover(true);
        return;
    }

    async function handleSubmit(e: FormEvent){
        e.preventDefault();
    
        validateTitle();
        validatePrice();
        validateCover();

        if(validateForm() && validateObject()){
            let response: IProduct | ApiException;  
            const action: string = product._id ? "update" : "create";          
            try {
                if(product._id){
                    response = await ProductService.update(product);
                }else{
                    response = await ProductService.create(product);
                }
                ToastService.ShowSuccess(`Product successfully ${action}d.`);                 
            } catch (error) {
                ToastService.ShowError(`Erro on ${action}`)
                console.error(`Erro on ${action}`, e);
            }
            
            navigate(`/product/${response._id}`);
        }
    }
    async function handleDelete(id: string){
        await ProductService.del(id).then(()=>{
            ToastService.ShowSuccess("Product successfully deleted.");
            navigate('/');
        }).catch(e => {
            ToastService.ShowError("Error on delete")
            console.error("Error on delete", e);
                     
        });
        
    }
    function handleImageChange(event) {
        const selectedFile = event.target.files;
        //const selectedFile = event.target.files[0];
        const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];        
        
        if (selectedFile && selectedFile[0]) {
            if(!allowedTypes.includes(selectedFile[0]?.type)){
                const message = "Invalid image format, please choose a valid format!"
                ToastService.ShowError(message);
                console.log(message);   
                setProduct({...product, cover: ""});
                setIsValidCover(false);
                return;
            }else{
                const reader = new FileReader();
                reader.readAsDataURL(selectedFile[0]);
                reader.onload = (e) => {
                    setProduct({...product, cover: e.target.result})
                    setIsValidCover(true);
                };
                reader.onerror = (error) => {
                    ToastService.ShowError("Read image error");
                    console.log("read image error:", error);
                    
                }
            }
            
        }
    }

    return (
        <main className="w-full max-w-7xl px-4 mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                    

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="title" title="Required field" className="block text-sm font-medium leading-6 text-gray-900">
                                    Product name <RequiredField />
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            value={product?.title}
                                            className={(!isValidTitle ?? ("border-red-500 border "))+"pl-3 block flex-1 rounded-md bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"}
                                            placeholder="Dell Notebook Inspiron 15r"
                                            onChange={(e) => handleChange(e.target)}                                            
                                        />
                                    </div>
                                    { !isValidTitle ? <ErroInputMessage message={`Invalid title field! Min number of ${formConfig.titleMinLength} to able.`}/> : <></> }
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                    Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={3}
                                        maxLength={1000}
                                        value={product?.description}
                                        className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e) => handleChange(e.target)}
                                    />
                                </div>                        
                            </div>

                            <div className="flex flex-col col-span-full">
                                <label htmlFor="price" title="Required field" className="block text-sm font-medium leading-6 text-gray-900">
                                    Price <RequiredField />
                                </label>
                                <div className="mt-2 flex flex-row">
                                    <CurrencyInput
                                        onChangeValue={(event, originalValue) => handleChange({name: event.target.name, value: originalValue})}                                        
                                        currency="USD"
                                        id="price"
                                        name="price" 
                                        value={product?.price}
                                        className={(!isValidPrice ?? ("border-red-500 border "))+ " rounded-md px-3 bg-grey-lighter text-grey-darker py-1.5 font-normal text-grey-darkest border border-grey-lighter font-bold"}
                                    />
                                        
                                </div>
                                {!isValidPrice ? <ErroInputMessage message={`Invalid price! Min value of US$ ${formConfig.priceMinValue} to able.`}/> : <></> }
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="cover-photo" title="Required field" className="block text-sm font-medium leading-6 text-gray-900">
                                    Cover product photo <RequiredField />
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">                                    
                                    { 
                                        product?.cover ? 
                                        <div className="w-80 max-w-2xl px-4 mx-auto">
                                            <img alt="preview image" src={product?.cover}/>
                                        </div> : 
                                        <BsFillImageFill className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                    }
                                    <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">                                        
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                        <span>Upload a file</span>
                                        <input 
                                            id="file-upload" 
                                            name="file-upload" 
                                            type="file" 
                                            className="sr-only" 
                                            accept="image/png, image/jpeg, image/jpg"
                                            onChange={(e) => handleImageChange(e)}
                                        />
                                        </label>                                
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, JPEG</p>
                                    { !isValidCover ? <ErroInputMessage message={"Invalid image format, please choose a valid format!"}/> : <></> }
                                    </div>                                    
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-x-6 mb-20">
                    { product?._id && 
                        (
                            <button 
                                type="button" 
                                className="rounded-md bg-red-600 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-900"
                                onClick={() => handleDelete(product._id!)}
                            >
                                Delete
                            </button>
                        )
                    }
                    <button
                        type="submit"
                        className={" rounded-md bg-green-600 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"}
                        
                    >
                        { product?._id ? "Update" : "Create"}
                    </button>
                </div>
            </form>
        </main>
    )
}