// export default function Child(props)
// {
   
//     return(

//         <div>
//             <h1>
//                 child comp {props.hamada}
//             </h1>
//         </div>

       
//     )
// }
export default function Child({pro,del})
{
   
    return(

        <div className="w-1/4 mx-auto px-5 relative bg-slate-200 rounded-md shadow-lg">
        <h2>name: {pro.name}</h2>
        <h2>price: {pro.price}</h2>
        <h2>category: {pro.category}</h2>
        {pro.onsale == true ? <div className="bg-red-600 p-3 absolute top-0 right-0">Sale</div> : ""}

        <button onClick={()=>{
            del(pro.id)
        }} className="text-red-600 border-red-600 border-2 w-full rounded-md py-2 mt-3">Delete</button>
        </div>
       
    )
    
}
