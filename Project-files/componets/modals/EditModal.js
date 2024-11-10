import styles from "./Modal.module.css";
function EditModal({ editProduct, setEditProduct, setIsEdit, submitHandler }) {
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEditProduct((product) => ({ ...product, [name]: value }));
  };
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h3>ویرایش اطلاعات</h3>
        <div>
          <label htmlFor="name">نام کالا</label>
          <input
            onChange={changeHandler}
            name="name"
            id="name"
            value={editProduct.name}
          />
        </div>
        <div>
          <label htmlFor="quantity">تعداد موجودی</label>
          <input
            type="number"
            onChange={changeHandler}
            name="quantity"
            id="quantity"
            value={editProduct.quantity}
          />
        </div>
        <div>
          <label htmlFor="price">قیمت </label>
          <input
            type="number"
            onChange={changeHandler}
            name="price"
            id="price"
            value={editProduct.price}
          />
        </div>
        <div className={styles.editButtons}>
          <button onClick={submitHandler}>ثبت اطلاعات جدید</button>
          <button onClick={() => setIsEdit(false)}> انصراف </button>
        </div>
      </form>
    </div>
  );
}

export default EditModal;
