import React from 'react'
import friendData from "./friendData"
import Friend from './Friend'
// import FriendList from './FriendList'
import Pet from './Pet'

export default function FriendList() {
    const entries = friendData.map((data, index) => (
        <Friend
        key={index}
        name={data.name}
        age={data.age}
        pet={data.pets.map((data,index) => (
            <Pet
            key = {index}
            petName={data.petName}
            breed={data.breed}/>
        ))
            // return <span key={index}>{type}</span>
        }
        />
        // need to map over to get pet data and append it to friend data so that it gives the data for the pets for each friend
    ))
    return(
        <div>
            {entries}
        </div>
    )
}
