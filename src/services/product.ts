import { Product } from "@/types/product";
import { products } from '@/data/products';
import { resolve } from "path";

export const getAllProducts = async (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(products);
        }, 1000);
    });
}