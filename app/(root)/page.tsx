import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

const HomePage = async () => {
  const latestProducts = (await getLatestProducts()) || [];

  const formattedProducts = latestProducts.map((product) => ({
    ...product,
    price: product.price ? parseFloat(product.price) : 0,
    rating: product.rating ? parseFloat(product.rating) : 0,
  }));

  return (
    <ProductList
      products={formattedProducts}
      limit={LATEST_PRODUCTS_LIMIT}
      title="Latest Products"
    />
  );
};

export default HomePage;
