import { FaRegCircleUser } from "react-icons/fa6";
import { RiSearchLine } from "react-icons/ri";
import { useEffect, useState } from "react";

import styles from "./ProductPage.module.css";

function SearchBox({ data, setProducts }) {
  console.log(data)
  const [search, setSearch] = useState("");
  useEffect(() => {
    if (data) {
      if (search) {
        const filteredProducts = data.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
        );
        setProducts(filteredProducts);
      } else {
        setProducts(data);
      }
    }
  }, [search, data]);
  return (
    <div className={styles.searchBox}>
      <RiSearchLine />
      <input
        placeholder="جستجوی کالا"
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <div>
        <FaRegCircleUser />
        <span>نام و نام خانوادگی کاربر</span>
      </div>
    </div>
  );
}

export default SearchBox;
