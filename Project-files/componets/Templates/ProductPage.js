
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// import { useGetAllProducts } from "../services/products";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import styles from "./ProductPage.module.css";
import AddModal from "../modals/AddModal";
import SearchBox from "./SearchBox";

function ProductPage({Allproducts}) {

  const [products, setProducts] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  // Set products when data is loaded
  useEffect(() => {
    if (Allproducts.data) {
      setProducts(Allproducts.data);
    }
  }, [Allproducts.data]);

  const addHandler = () => {
    setIsAdd(true);
  };
  return (
    <>
      <div className={styles.productContainer}>
        <SearchBox data={products} setProducts={setProducts} />

        <div className={styles.manageProduct}>
          <div>
            <img src="images/setting-3.png" />
            <span>مدیریت محصول</span>
          </div>
          <div>
            <button onClick={addHandler}>افزودن محصول</button>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th>نام کالا</th>
                <th>موجودی</th>
                <th>قیمت</th>
                <th>شناسه کالا</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              { products?.length > 0 ? (
                products?.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    products={products}
                    setProducts={setProducts}
                 
                  />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className={styles.noProduct}>
                    محصولی یافت نشد
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      
      </div>
      {isAdd && <AddModal setIsADD={setIsAdd} setProducts={setProducts} />}
    </>
  );
}

export default ProductPage;

   // products={products}
                    // setProducts={setProducts}