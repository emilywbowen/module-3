import React from "react";
// import InputData from "./InputData";

export default function InputForm() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phoneNumber: "",
        favFood: "",
        aboutUser: ""
    });

    function handleChange(event){
        const { name , value} = event.target;
        setFormData(prevFormData => ({
            ... prevFormData,
            [name]:value
        }));
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            />

            <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            />  
            <input
            type="text"
            placeholder="Email Address"
            onChange={handleChange}
            name="email"
            value={formData.email}
            />
             <input
            type="text"
            placeholder="Place of Birth"
            onChange={handleChange}
            name="placeOfBirth"
            value={formData.placeOfBirth}
            />
             <input
            type="text"
            placeholder="Phone Number"
            onChange={handleChange}
            name="phoneNumber"
            value={formData.phoneNumber}
            />
             <input
            type="text"
            placeholder="Favorite Food"
            onChange={handleChange}
            name="favFood"
            value={formData.favFood}
            />
             <textarea
            type="text"
            placeholder="Tell us about yourself, please."
            onChange={handleChange}
            name="aboutUser"
            value={formData.aboutUser}
            />
            <button type="submit">Submit</button>
        </form>
    )
    
    // <div>
    //     <h1>{formData}</h1>
    //     </div>
}