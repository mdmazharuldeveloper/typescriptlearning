type Product = {
    
    id:number,
    name:string,
    price:number,
    stock:number,
    color?: string
}

type ProductSummary = Pick<Product, 'id' | 'name' | 'price'>;

type ProductWithOutStock = Omit<Product, 'stock'>;

type ProductWithColor = Required<Product>;

type ReadOnlyProduct = Readonly<Product>;

type PartialProduct = Partial<Product>;

const emptyProduct: Record<string, unknown> = {};


