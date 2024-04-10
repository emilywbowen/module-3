import React from 'react'
// import BLogList from "./BlogList"
// import BlogPost from './BlogList'

export default function BlogPost(props) {
    
    return (

        <div>
            <h2>{props.title}</h2>
            <h3>{props.subTitle}</h3>

            <p>Posted by {props.author} on {props.date}</p>
            {/* <h2>{data.title}</h2> */}
            
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