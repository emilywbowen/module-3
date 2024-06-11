
import React, { useState } from "react";

export default function InputForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phoneNumber: "",
        favFood: "",
        aboutUser: ""
    });

    const [savedData, setSavedData] = useState([]);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newEntry = { ...formData };
        setSavedData([...savedData, newEntry]);
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phoneNumber: "",
            favFood: "",
            aboutUser: ""
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="input-text"
                    type="text"
                    placeholder ="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />

                <input
                    className="input-text"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />

                <input
                    className="input-text"
                    type="text"
                    placeholder="Email Address"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />

                <input                    
                    className="input-text"
                    type="text"
                    placeholder="Place of Birth"
                    onChange={handleChange}
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                />

                <input
                    className="input-text"
                    type="text"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    name="phoneNumber"
                    value={formData.phoneNumber}
                />

                <input
                    className="input-text"
                    type="text"
                    placeholder="Favorite Food"
                    onChange={handleChange}
                    name="favFood"
                    value={formData.favFood}
                />

                <textarea
                    className="input-text"
                    placeholder="Tell us about yourself, please."
                    onChange={handleChange}
                    name="aboutUser"
                    value={formData.aboutUser}
                />

                <button type="submit">Submit</button>
            </form>

            <div className="saved-data-container">
                <h2>Member Info:</h2>
                <div className="grid-container">
                {savedData.map((entry, index) => (
                    <div key={index} className="saved-entry">
                        <p>First Name: {entry.firstName}</p>
                        <p>Last Name: {entry.lastName}</p>
                        <p>Email: {entry.email}</p>
                        <p>Place of Birth: {entry.placeOfBirth}</p>
                        <p>Phone Number: {entry.phoneNumber}</p>
                        <p>Favorite Food: {entry.favFood}</p>
                        <p>About User: {entry.aboutUser}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}
