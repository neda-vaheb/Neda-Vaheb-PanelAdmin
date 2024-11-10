
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductPage.module.css";
import AddModal from "../modals/AddModal";
import SearchBox from "./SearchBox";
import { useRouter } from "next/router";
import { setCookie } from "../utiles/cookie";

function Dashboard({Allproducts}) {
const router = useRouter()
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
  const exitHandler =()=>{
    router.push("products");
    setCookie("")
  }
  return (
    <>
      <div className={styles.productContainer}>
      <div className={styles.header}>
            <div>
               <h3> Bootostart</h3>
            </div>
            <div className={styles.headerButtons}>
            <button onClick={exitHandler} className={styles.login}>خروج</button>
           
            </div>
           
        </div>
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

export default Dashboard;

