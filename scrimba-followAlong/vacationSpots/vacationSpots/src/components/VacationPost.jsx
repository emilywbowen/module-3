import React from "react"

export default function VacationPost(props){
    return (
        <div>
            <h2>{props.place}</h2>
            <h3>${props.price}</h3>
            <h4>{props.timeToGo}</h4>
        </div>
    )
}