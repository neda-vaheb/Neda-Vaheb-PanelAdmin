import Dashboard from "../../componets/Templates/Dashboard";

function products({ Allproducts }) {
  return (
    <>
      <Dashboard Allproducts={Allproducts} />
    </>
  );
}

export default products;

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/products?limit=50`);
  const data = await res.json();
  return {
    props: { Allproducts: data },
  };
}
