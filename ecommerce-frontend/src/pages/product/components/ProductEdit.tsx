
import formConfig from "../../../core/constants/Config";
import { IProduct } from "../../../core/interfaces/Product.interface"
import { FormEvent,  useState, useRef, useMemo, useCallback} from "react";

export default function ProductEdit(){
    const [product, setProduct] = useState<IProduct>();
    const [isValidTitle, setIsValidTitle] = useState<boolean>(false);
    const [isValidPrice, setIsValidPrice] = useState<boolean>(false);
    const [isValidCover, setIsValidCover] = useState<boolean>(false);

    function validateForm(){
        console.log("valid title?", isValidTitle);
        console.log("valid price?", isValidPrice);
        return (isValidTitle && isValidPrice);
    }

    function handleChange({name, value}: HTMLInputElement){
        //console.log(name, value);
        setProduct({...product, [name]: value});
        //console.log(product);  
        //console.log(validateForm());
        
    }

    function validateTitle(){
        const title = product?.title || "";

        console.log("product", product);  
        console.log("title value", title);
        console.log("is valid title?", isValidTitle);
        
        if(title.length  <= formConfig.titleMinLength) {
            console.log("found error title");
            
            setIsValidTitle(false);
            return;
        }
        if(!isValidTitle){
            setIsValidTitle(true);
        }
        console.log("/////////////");
        
        return;
    }
    function validatePrice(){
        const price = product?.price || -1;
        console.log("product", product);  
        console.log("price value", price);
        console.log("is valid price?", isValidPrice);
        
        if(price < formConfig.priceMinValue ) {
            console.log("found error price");
            setIsValidPrice(false)
            console.log("price", price);
            return;
        }

        if(!isValidPrice){
            setIsValidPrice(true);
        }
        console.log("%%%%%%%%%%");
        return;
    }

    function handleSubmit(e: FormEvent){
        e.preventDefault();
        console.log(product);  
        validateTitle();
        validatePrice();
    }

    function handleImageChange(event) {
        const selectedFile = event.target.files[0];
        //image/png, image/jpeg, image/jpg
        const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
        console.log(selectedFile);
        
        if (event.target.files && event.target.files[0]) {
            if(!allowedTypes.includes(selectedFile?.type)){
                console.log("imagem tipo errado");   
                setProduct({...product, cover: ""});
                setIsValidCover(false);
                return;
            }else{
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = (e) => {
                    setProduct({...product, cover: e.target.result})
                    setIsValidCover(true);
                };
                reader.onerror = (error) => {
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
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                Product name
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className={(!isValidTitle ? " border-red-500 border " : '')+"pl-3 block flex-1 rounded-md bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"}
                                        placeholder="Dell Notebook Inspiron 15r"
                                        onChange={(e) => handleChange(e.target)}
                                    />
                                </div>
                                { !isValidTitle ?
                                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                        Invalid title field! Min number of {formConfig.titleMinLength} to able.
                                    </span> :
                                    <></> }
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
                                className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                                onChange={(e) => handleChange(e.target)}
                            />
                        </div>
                        
                        </div>

                        <div className="flex flex-col col-span-full">
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                Price
                            </label>
                            <div className="mt-2 flex flex-row">
                                <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-grey-darker">US$</span>
                                <input
                                    type="number" 
                                    id="price"
                                    name="price" 
                                    min="0"
                                    className={(!isValidPrice ? " border-red-500 border" : '')+ " rounded-md px-3 bg-grey-lighter text-grey-darker py-1.5 font-normal text-grey-darkest border border-grey-lighter font-bold"}
                                    onChange={(e) => handleChange(e.target)}
                                />
                                    
                            </div>
                            { !isValidPrice ?
                                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                        Invalid price! Min value of US${formConfig.priceMinValue} to able.
                                    </span> :
                                    <></> }
                        </div>

                        <div className="col-span-full">
                        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                            Cover product photo
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                            {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                            { product?.cover ? <div className="w-80 max-w-2xl px-4 mx-auto">
                                <img alt="preview image" src={product?.cover}/>
                            </div> : <></>}
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
                                {/* <p className="pl-1">or drag and drop</p> */}
                            </div>
                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, JPEG</p>
                            { !isValidCover ?
                                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                        Invalid image format, please choose a valid format!
                                    </span> :
                                    <></> }
                            </div>
                            
                        </div>
                        
                        </div>
                    </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Delete
                    </button>
                    <button
                        type="submit"
                        className={/* (!validateForm() ? 'cursor-not-allowed opacity-50': '') + */" rounded-md bg-indigo-600 px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                        /* disabled={!validateForm()} */
                    >
                        {/* if id inexistente, colocar o texto como create */}
                        Save 
                    </button>
                </div>
            </form>
        </main>
    )
}