import React, { useState, useEffect} from "react";
import axios from "axios";


export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        axios.get("https://api.imgflip.com/get_memes")
        .then((response) => {
        // console.log(response.data.data.memes)
        setAllMemes(response.data.data.memes)
        })
        .catch((error)=> {
        console.log(error);
        })
    }, []);

    console.log(allMemes)

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <main>
            <div className="form">
                <input 
                    type = "text"
                    placeholder="Top Text"
                    className="form--input"
                    name= "topText"
                    value={meme.topText}
                    onChange={handleChange}
                />

                <input
                    type = "text"
                    placeholder="Bottom Text"
                    className="form--input"
                    name= "bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                    >
                    Get a New Meme Image 🖼
                </button>

            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
