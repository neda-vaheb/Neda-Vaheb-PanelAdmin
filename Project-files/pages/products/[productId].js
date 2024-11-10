

function ProductDetail({product}) {
  return (
    <div>

     <p>نام کالا : {product.name}</p>
     <p> موجودی : {product.quantity}</p>
    
    <p> قیمت : {product.price}</p>
    </div>
  )
}

export default ProductDetail

export async function getServerSideProps(context){
const {params} =context;
const res = await fetch(`http://localhost:3000/products/${params.productId}`);
const data = await res.json();
return{
    props:{product:data}
}
}