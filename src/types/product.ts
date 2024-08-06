export type Product = {
    id: number;
    category: 'sushi' | 'temaki' | 'drinks' | 'pack';
    name: string;
    image: string;
    price: number;
}