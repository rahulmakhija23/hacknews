import React,{useState,useEffect} from "react"
import {getStoryMetaData} from "../Api/hnApi"
import '../Css/Story.css'
import {PostedTime} from "../Utils/PostedTime"

export const  Story=({storyId})=>{
    const[metaData,setMetaData]=useState({})

    useEffect(()=>{
        getStoryMetaData(storyId).then(data=>data && data.url && setMetaData(data))
        
    })
 
    
    return(
       metaData && metaData.url ?(
          
            <div className="body">

                {/* <p><a href={metaData.url}>`${metaData.url}`</a></p> */}
                <div className="data">
       <p className="title">{metaData.title} <br/>
       <span className="By">By:{metaData.by} |UpVotes:{metaData.score}| Posted:{PostedTime(metaData.time)}</span></p>
    </div>

    </div>
   ):null
       
    
    )
}