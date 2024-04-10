import React from 'react'
import vacationData from "./vacationData"
import VacationPost from './VacationPost';

export default function VacationList() {
    console.log(vacationData);
    const spots = vacationData.map((data, index) => (
        <VacationPost
        key = {index}
        data = {data}
        place = {data.place}
        price = {data.price}
        timeToGo = {data.timeToGo}
        />
    ))
    return (
    <div>
        {spots}
    </div>
    );
}