import ProductPage from "../../componets/Templates/ProductPage";

function products({Allproducts}) {
  
  return (
    <>
      <ProductPage Allproducts={Allproducts}/>
    </>
  );
}

export default products;

export async function getServerSideProps(){
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    return{
        props:{Allproducts:data}
    }
}
