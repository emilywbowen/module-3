import React from "react"

export default function Color() {
    const [colorData, setColorData] = React.useState({
      randomColor: "https://random-color.onrender.com/colors/random"
    })

    const randomColor = "https://random-color.onrender.com/colors/random"

    const [color, setColor] = React.useState([])
    console.log("Component Rendered")
    
  
    React.useEffect( ()=>{
      fetch(randomColor)
      .then(res => res.json())
      .then(data => setColor(data))
    }, [])

    function getNewColor(){
        // const randomNumber = Math.floor(Math.random() * color.length)
        // const url = color[randomNumber].url
        fetch(randomColor)
        .then(res => res.json())
        .then(data => setColor(data))
        // setColorData(prevColor => ({
        //     ...prevColor,
        //     randomColor: url
        // }))
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setColor(prevColor => ({
            ... prevColor,
            [name]: value
        }))
    }

    return (
      <div style={{backgroundColor: `${color.hex}`}}>
        <img src={getNewColor.randomColor}/>
        <h2>Your color is</h2>
        <button onClick = {getNewColor}>Get New Color</button>
        <pre>{JSON.stringify(color.name, null, 2)}</pre>
        <background src = {color}/>
        {/* <pre>{JSON.stringify(color.name, null, 2)</pre> */}
      </div>
    )
  }
  
  