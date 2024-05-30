import React from "react"
import InputForm from "./InputForm"

export default function InputData() {
    const entries = formData.map((data,index) => (
        <InputForm
        key={index}
        data = {data}
        firstName={data.firstName}
        lastName = {data.lastName}
        email = {data.email}
        placeOfBirth = {data.placeOfBirth}
        phoneNumber = {data.phoneNumber}
        favFood = {data.favFood}
        aboutUser = {data.aboutUser}
        />
    ));

   return (
    <div>
        <h1>{entries}</h1>
        </div>
   );
}


[
    {
        // save the array here?
    },
]