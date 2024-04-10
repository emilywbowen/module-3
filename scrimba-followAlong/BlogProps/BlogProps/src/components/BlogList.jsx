import React from 'react'
import listData from "./listData"
import BlogPost from './BlogPost';


export default function BlogList() {
    console.log(listData);
    const entries = listData.map((data, index) => (
        <BlogPost 
        key={index} 
        data = {data}
        title = {data.title}
        subTitle = {data.subTitle}
        author = {data.author}
        date = {data.date}
        
        />
    ));

        return (
            <div>
                {entries}
                
            </div>
        );
}
    
