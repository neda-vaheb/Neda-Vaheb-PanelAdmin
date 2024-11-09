import styles from "./Modal.module.css";
function DeleteModal({ setIsDelete, finalDeleteHandler, product }) {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.closeImage}>
          <img src="/Close.png" />
        </div>
        <div>
          <p>آیا از حذف این محصول مطمئن هستید؟</p>
        </div>

        <div className={styles.deleteButtons}>
          <button onClick={() => finalDeleteHandler(product.id)}>حذف</button>
          <button onClick={() => setIsDelete(false)}> لغو </button>
        </div>
      </form>
    </div>
  );
}

export default DeleteModal;
