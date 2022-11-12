import React from 'react';

const Meme = () => {

  const [meme, setMeme] = React.useState({
    topText: 'One does not simply',
    bottomText: 'walk into Mordor',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(function() {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }));
  }


  function getImage() {
    const num = Math.floor(Math.random() * allMemes.length);
    const newImage = allMemes[num].url;

    setMeme(meme => {
      return {
        ...meme,
        randomImage: newImage
      }
    });
  }

  return (
    <main>
      <div className="meme--form">
        <input
          type="text"
          name="topText"
          id="top"
          placeholder="One does not simply"
          className='form--input'
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          id="bottom"
          placeholder="walk into Mordor"
          className='form--input'
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button
          onClick={getImage} 
          type="submit"
          className='form--button'
        >
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme--img">
        <img className='meme--image' src={meme.randomImage} alt="" />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;