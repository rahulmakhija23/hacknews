import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
 import './Css/Story.css';
import {getStoryIds} from "./Api/hnApi"
import {Story} from "./Component/Story"
import {Pagination}  from "./Component/Pagination"

function App() {

const [storyId,setStoryIds]=useState([])
const[currentPage,setCurrentPage]=useState(1);
const[postPerPage,setPostPerPage]=useState(30);
useEffect(()=>{
getStoryIds().then(result=>setStoryIds(result))

},[]) 

const paginate=(pageNumber)=>{
setCurrentPage(pageNumber)
}
console.log(storyId)
const indexOfLastPost=currentPage*postPerPage;
const indeofFirstPost=indexOfLastPost-postPerPage;
const currentPost=storyId.slice(indeofFirstPost,indexOfLastPost)
  return (
    <>
    <div className="bodyStyle">
    <h1>Hacker News</h1>
    {/* {JSON.stringify(ids)} */}
      {currentPost.map(id=>
      <Story key={id}  storyId={id}/>
      )}
      </div>
      <div className="pagination">
                <Pagination postPerPage={postPerPage} totalPost={storyId.length} paginate={paginate} />
                </div>
               

    
          </>

  );
}

export default App;
