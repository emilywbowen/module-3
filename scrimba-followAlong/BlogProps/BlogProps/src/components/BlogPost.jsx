import React from 'react'
// import BLogList from "./BlogList"
// import BlogPost from './BlogList'
import listData from './listData'

export default function BlogPost(props) {
    
    return (
        <div>
            <h1>testy McTesterson</h1>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <h2>{props.author}</h2>
            <h2>{props.date}</h2>
        </div>
    )

    
    // const listElements = BlogList.map (props=> {
    //     return <BlogList title ={props.title} subTitle ={props.subTitle} author={props.author} date={props.date}/>
    // })
    // // console.log(BlogList)
    // return(
    //     <div>
    //         {listElements}
    //     </div>
    // )
}