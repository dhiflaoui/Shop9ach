import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";
const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductList
        products={latestProducts}
        limit={LATEST_PRODUCTS_LIMIT}
        title="Latest Products"
      />
    </>
  );
};

export default HomePage;
