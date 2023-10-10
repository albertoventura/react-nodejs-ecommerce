import { IProduct } from "../../../core/interfaces/Product.interface";
import {Api} from "../../../core/services/ApiConfig";
import { ApiException } from "../../../core/services/ApiException";

const getAll = async (): Promise<IProduct[] | ApiException>  => {
    try {
        const {data} = await Api().get("/product");
        console.log("get all", data);
        return data.products;
    } catch (error: any) {
        /* if(error?.response?.data){
            const response = {...error?.response?.data, hasError: true}
            return response
        }
        return error; */
        return new ApiException(error.message || "Error when querying api");
    }
}
const getById = async (id: string): Promise<IProduct | ApiException>  => {
    try {
        const {data} = await Api().get(`/product/${id}`);
        console.log("get id", data);
        return data.product;
    } catch (error: any) {
        /* if(error?.response?.data){
            const response = {...error?.response?.data, hasError: true}
            return response
        }
        return error; */
        return new ApiException(error.message || "Error when querying api");
    }
}

const create = async (product: IProduct): Promise<IProduct | ApiException>  => {
    try {
        const {data} = await Api().post(`/product/create`, product);
        console.log("create", data);
        return data.product;
    } catch (error: any) {
        /* if(error?.response?.data){
            const response = {...error?.response?.data, hasError: true}
            return response
        }
        return error; */
        return new ApiException(error.message || "Error when querying api");
    }
}
const update = async (product: IProduct): Promise<IProduct | ApiException>  => {
    try {
        const {data} = await Api().put(`/product/${product._id}`, product);
        console.log("update", data);
        return data.product;
    } catch (error: any) {
        /* if(error?.response?.data){
            const response = {...error?.response?.data, hasError: true}
            return response
        }
        return error; */
        return new ApiException(error.message || "Error when querying api");
    }
}
const del = async (id: string): Promise<IProduct | ApiException>  => {
    try {
        const {data} = await Api().delete(`/product/${id}`);
        console.log("delete", data);
        return data.product;
    } catch (error: any) {
        /* if(error?.response?.data){
            const response = {...error?.response?.data, hasError: true}
            return response
        }
        return error; */
        return new ApiException(error.message || "Error when querying api");
    }
}



export const ProductService = {
    getAll,
    getById,
    create,
    update,
    del
};