import { useState } from "react"
import Navbar from "./component/Navbar/Navbar";


export default function Home()
{
    // return(

    //     <>
    //     <h1 className="bg-red-700">ahmed</h1>
    //     <i className="fa-solid fa-arrow-up"></i>
    //     </>
    // ) 
    const[product,setproduct]=useState({
        name: "iphone" ,
        price: "5000" ,
        category: "phone" ,
        onsale: false ,
    });
    return(
        <>
        <Navbar/>
       <div className="w-1/4 mx-auto px-5 relative bg-slate-200 rounded-md shadow-lg">
        <h2>name: {product.name}</h2>
        <h2>price: {product.price}</h2>
        <h2>category: {product.category}</h2>
        {product.onsale == true ? <div className="bg-red-600 p-3 absolute top-0 right-0">Sale</div> : ""}
       </div>
       </>
    )



   
}
