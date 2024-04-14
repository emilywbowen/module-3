import React from 'react'
// import friendData from "./friendData"
// import FriendList from './FriendList'

export default function Friend(props) {
    return (
        <div>
            <h1>{props.name} {props.age}</h1>
            {/* <h2>{props.age}</h2> */}
            <h2>{props.pet}</h2>
        </div>
    )
}