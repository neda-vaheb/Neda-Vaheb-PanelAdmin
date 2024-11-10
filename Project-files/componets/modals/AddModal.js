import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import styles from "./Modal.module.css";
import { postProduct } from "../services/products";

function AddModal({ setIsADD }) {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    quantity: "",
    price: "",
  });

  const { mutate } = useMutation({ mutationFn: postProduct });
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const addProduct = (event) => {
    event.preventDefault();

    if (!product.name || !product.price) {
      toast.error("لطفا همه ی فیلد ها را پر کنید");
      return;
    }

    mutate(product, {
      onSuccess: (data) => {
        toast.success("محصول با موفقیت اصافه شد");
      },
      onError: (error) => {
        toast.error("مشکلی پیش آمده");
      },
    });
    setIsADD(false);
  };
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h3>ایجاد محصول جدید </h3>
        <div>
          <label htmlFor="name">نام کالا</label>
          <input
            type="text"
            onChange={changeHandler}
            name="name"
            id="name"
            value={product.name}
          />
        </div>
        <div>
          <label htmlFor="quantity">تعداد موجودی</label>
          <input
            type="number"
            onChange={changeHandler}
            name="quantity"
            id="quantity"
            value={product.quantity}
          />
        </div>
        <div>
          <label htmlFor="price">قیمت </label>
          <input
            type="number"
            onChange={changeHandler}
            name="price"
            id="price"
            value={product.price}
          />
        </div>
        <div className={styles.editButtons}>
          <button onClick={addProduct}> ایجاد </button>
          <button onClick={() => setIsADD(false)}> انصراف </button>
        </div>
      </form>
    </div>
  );
}

export default AddModal;
