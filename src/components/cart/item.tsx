import { Cart } from "@/types/cart";
import { CartQuantity } from "./itemQuantity";

type Props = {
    item: Cart;
}
export const CartItem = ({ item }: Props) => {
    return (
        <div className="flex items-center gap-5">
            <div className="w-16 overflow-hidden">
                <img className="rounded-md w-full h-auto object-cover" src={item.product.image} alt={item.product.name} />
            </div>
            <div className="flex-1">
                <p className="text-md">{item.product.name}</p>
                <p className="text-xs opacity-50">{item.product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                })}</p>
            </div>
            <div className="">
                <CartQuantity cartItem={item} />
            </div>
        </div>
    );
}