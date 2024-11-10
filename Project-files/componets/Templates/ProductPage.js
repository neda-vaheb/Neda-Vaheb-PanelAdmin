
import { useEffect, useState } from "react";

import styles from "./ProductPage.module.css";
import SearchBox from "./SearchBox";
import { useRouter } from "next/router";
import Link from "next/link";



function ProductPage({Allproducts}) {
  const router = useRouter();
   
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (Allproducts.data) {
      setProducts(Allproducts.data);
    }
  }, [Allproducts.data]);
const loginHandler = ()=>{
router.push("/login")
}
const registerHandler = ()=>{
    router.push("/register")
}
  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.header}>
            <div>
               <h3> Bootostart</h3>
            </div>
            <div className={styles.headerButtons}>
            <button onClick={loginHandler} className={styles.login}>ورود</button>
            <button onClick={registerHandler} className={styles.register}>ثبت نام</button>
            </div>
           
        </div>
        <SearchBox data={products} setProducts={setProducts} />

        
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
                  <Link href={`products/${product.id}`}> <tr key={product.id}>
                    <td>
                      <div className={styles.cell}>{product.name}</div>
                    </td>
                    <td>
                      <div className={styles.cell}>{product.quantity}</div>
                    </td>
                    <td>
                      <div className={styles.cell}>
                        {product.price} تومان
                      </div>
                    </td>
                    <td>
                      <div className={styles.cell}>{product.id}</div>
                    </td>
                    <td>
                   
                    </td>
                  </tr>
                  </Link> 
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
    </>
  );
}

export default ProductPage;

