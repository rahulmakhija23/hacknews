import React from "react"

export const Pagination=({postPerPage,totalPost,paginate})=>{
    var pageNumber=[]
    for(var i=1;i<=Math.ceil(totalPost/postPerPage);i++)
    {
        pageNumber.push(i);
    }
    return(
        <nav>
            <ul  style ={{display:"flex",flexDirection:"row"}}>
                {pageNumber.map(number=>(
                    <ul key={number}><a   href="!#" onClick={()=>{paginate(number)}}>{number}</a></ul>
                ))}
                </ul>
            </nav>
    )
}