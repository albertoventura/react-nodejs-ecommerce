import { IProduct } from "../../../core/interfaces/Product.interface";
import {Api} from "../../../core/services/ApiConfig";
import { ApiException } from "../../../core/services/ApiException";

const getAll = async (): Promise<IProduct[] | ApiException>  => {
    try {
        const {data} = await Api().get("/product");
        return data.products;
    } catch (error: any) {
        return new ApiException(error.message || "Error when querying api");
    }
}
const getById = async (id: string): Promise<IProduct | ApiException>  => {
    try {
        const {data} = await Api().get(`/product/${id}`);
        return data.product;
    } catch (error: any) {
        return new ApiException(error.message || "Error when querying api");
    }
}

const create = async (product: IProduct): Promise<IProduct | ApiException>  => {
    try {
        const {data} = await Api().post(`/product/create`, product);
        return data.product;
    } catch (error: any) {
        return new ApiException(error.message || "Error when querying api");
    }
}
const update = async (product: IProduct): Promise<IProduct | ApiException>  => {
    try {
        const {data} = await Api().put(`/product/${product._id}`, product);
        return data.product;
    } catch (error: any) {
        return new ApiException(error.message || "Error when querying api");
    }
}
const del = async (id: string): Promise<IProduct | ApiException>  => {
    try {
        const {data} = await Api().delete(`/product/${id}`);
        return data.product;
    } catch (error: any) {
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