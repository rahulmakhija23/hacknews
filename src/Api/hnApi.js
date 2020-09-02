import axios from 'axios'
export const baseUrl='https://hacker-news.firebaseio.com/v0/';
export  const newStoryUrl=`${baseUrl}newstories.json`;
export  const storyUrl=`${baseUrl}item/`;

export const getStoryMetaData= async(storyId)=>{
    const result= await axios.get(`${storyUrl+storyId}.json`).then(result=>result)
    return result.data
}
export const getStoryIds= async()=>{
    const result=await axios.get(newStoryUrl).then(result=>result)
    return result.data;
}