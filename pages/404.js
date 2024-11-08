import Link from "next/link"

function PageNotFound() {
  return (
    <div style={{
 display:"flex",
 justifyContent:"center",
 alignItems:"center",gap:"40px"
    }}>
       
    
<button  style={{
    border: "none",
    background: "#f64749",
    height:" 40px",
    width:" 80px",
    color: "white",
    borderRadius: "16px",    
    }}>
<Link href="/Login">

ثبت نام

  
  </Link>
</button>
<img src='/404.webp' style={{width:"500px"}}/> 
    </div>
  )
}

export default PageNotFound
