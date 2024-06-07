import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemes, setAllMemes] = React.useState([]);
    const [saveMemes, setSaveMemes] = React.useState([]);
    const [isEditing, setIsEditing] = React.useState(false);
    const [editingId, setEditingId] = React.useState(null);

    React.useEffect(() => {
        axios.get("https://api.imgflip.com/get_memes")
            .then((response) => {
                setAllMemes(response.data.data.memes);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    function saveIt() {
        if (isEditing) {
            setSaveMemes(prevSaveMemes => prevSaveMemes.map((savedMeme) => 
                savedMeme.id === editingId ? { ...savedMeme, topText: meme.topText, bottomText: meme.bottomText } : savedMeme
            ));
            setIsEditing(false);
            setEditingId(null);
        } else {
            const newMeme = {
                ...meme,
                id: uuidv4(),
                topText: meme.topText,
                bottomText: meme.bottomText,
                randomImage: meme.randomImage
            };
            setSaveMemes(prevSaveMemes => [...prevSaveMemes, newMeme]);
        }
        
        setMeme(prevMeme => ({
            ...prevMeme,
            topText: "",
            bottomText: "",
        }));
    }

    function editMeme(id) {
        const memeToEdit = saveMemes.find(m => m.id === id);
        setMeme({ topText: memeToEdit.topText, bottomText: memeToEdit.bottomText, randomImage: memeToEdit.randomImage });
        setIsEditing(true);
        setEditingId(id);
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a New Meme Image 🖼
                </button>
                <button
                    className="form--button"
                    onClick={saveIt}
                >
                    {isEditing ? 'Save Changes' : 'Save Meme'}
                </button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

            <div className="savedMemes">
                {saveMemes.map((savedMeme) => (
                    <div key={savedMeme.id} className="meme-item">
                        <img src={savedMeme.randomImage} className="meme--image" alt="Saved Meme" />
                        <h2 className="meme--text top">{savedMeme.topText}</h2>
                        <h2 className="meme--text bottom">{savedMeme.bottomText}</h2>
                        <button onClick={() => editMeme(savedMeme.id)}>Edit</button>
                    </div>
                ))}
            </div>
        </main>
    );
}
