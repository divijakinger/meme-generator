import React from "react";

export default function Meme(){
    const [getMeme,setGetMeme] = React.useState({
        topText : "",
        bottomText:"",
        randomImage:""
    });

    const [allMemeImages,setAllMemeImages] = React.useState([]);
    
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data))
    },[])
    
    function getMemeImage(){
        const memes_array = allMemeImages.data.memes;
        const randomNum = Math.floor(Math.random()*memes_array.length);
        const url = memes_array[randomNum].url;
        setGetMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url,
        }));

        console.log(getMeme.randomImage);
    }

    function handleChange(event){
        const {name,value} = event.target;
        setGetMeme(prevMeme => ({
            ...prevMeme,
            [name]:value
        }))
    }

    return (
        <main>
            <div className="form">
                <input className="form-inputs" type="text" placeholder="Enter top text" name="topText" value={getMeme.topText} onChange={handleChange}/>
                <input className="form-inputs" type="text" placeholder="Enter bottom text" name="bottomText" value={getMeme.bottomText} onChange={handleChange}/>
                <button className="form-button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={getMeme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{getMeme.topText}</h2>
                <h2 className="meme--text bottom">{getMeme.bottomText}</h2>
            </div>
        </main>
    )
}