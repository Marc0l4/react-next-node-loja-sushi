"use client"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RocketIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/stores/cartStore";
import { CartItem } from "./item";
import { useState } from "react";
import { CheckoutDialog } from "../ckeckout/dialog";


export const CartSidebar = () => {
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const { cart } = useCartStore(state => state);

    let subtotal = 0;
    for (let item of cart) {
        subtotal += item.quantity * item.product.price
    }

    return (
        <div className="">
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="relative">
                        <RocketIcon className="mr-2" />
                        <p className="">Carrinho</p>
                        {cart.length > 0 &&
                            <div className="absolute size-5 bg-red-600 rounded-full text-white -right-1 -top-1">{cart.length}</div>
                        }
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Carrinho</SheetTitle>
                    </SheetHeader>

                    <div className="flex flex-col gap-5 my-5">
                        {cart.length <= 0 ? 'O carrinho esta vazio no momento' : cart.map(item => (
                            <CartItem key={item.product.id} item={item} />
                        ))}
                    </div>

                    <Separator className="my-4" />
                    <div className="flex justify-between items-center text-xs">
                        <div className="">SubTotal: </div>
                        <div className="">{subtotal.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        })}</div>
                    </div>
                    <Separator className="my-4" />

                    <div className="text-center">
                        <Button
                            onClick={() => setCheckoutOpen(true)}
                            disabled={cart.length === 0}
                        >Finalizar Compra</Button>
                    </div>

                    <CheckoutDialog
                        open={checkoutOpen}
                        onOpenChange={setCheckoutOpen}
                    />
                </SheetContent>
            </Sheet>
        </div>

    );
}