import { Product } from "@/types/index";
import ProductCard from "./product-card";
interface Props {
  products: Product[];
  title?: string;
  limit?: number;
}

const ProductList = async ({ products, limit, title }: Props) => {
  if (!products || !Array.isArray(products)) {
    return (
      <div className="my-10">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p>No products available.</p>
      </div>
    );
  }

  const limitData = limit ? products.slice(0, limit) : products;

  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitData.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
