import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProducts } from "@/services/product";
import { Product } from "@/types/product";
import { ProductsEmpty } from "./empty";
import { ProductItem } from "./item";


type Tab = {
    title: string;
    value: string;
    products: Product[]
}
export const ProductsTab = async () => {
    const products = await getAllProducts();

    const tabs = [
        {
            title: 'Sushi',
            value: 'sushi',
            products: products.filter(item => item.category === 'sushi')
        },
        {
            title: 'Temaki',
            value: 'temaki',
            products: products.filter(item => item.category === 'temaki')
        },
        {
            title: 'Combo',
            value: 'pack',
            products: products.filter(item => item.category === 'pack')
        },
        {
            title: 'Bebidas',
            value: 'drinks',
            products: products.filter(item => item.category === 'drinks')
        },
    ];

    return (
        <Tabs defaultValue="sushi">
            <TabsList className="flex">
                {tabs.map(item => (
                    <TabsTrigger
                        key={item.value}
                        value={item.value}
                        className="flex-1"
                    >{item.title}</TabsTrigger>
                ))}
            </TabsList>
            {tabs.map(item => (
                <TabsContent key={item.value} value={item.value} className="mt-6">
                    {item.products.length > 0 &&
                        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {item.products.map(product => (
                                <ProductItem key={product.id} item={product} />
                            ))}
                        </div>
                    }
                    {item.products.length === 0 && <ProductsEmpty />}
                </TabsContent>
            ))}
        </Tabs>
    );
}