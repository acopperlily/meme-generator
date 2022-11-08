import memesData from '../memesData.js';
import React from 'react';

const Meme = () => {

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getImage() {
    const memesArray = allMemeImages.data.memes;
    const num = Math.floor(Math.random() * memesArray.length);
    const newImage = memesArray[num].url;

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
          name="top"
          id="top"
          placeholder="Shut up"
        />
        <input
          type="text"
          name="bottom"
          id="bottom"
          placeholder="and take my money"
        />
        <button onClick={getImage} type="submit">Get a new meme image 🖼️</button>
      </div>
      <div className="meme--img">
        <img className='meme--image' src={meme.randomImage} alt="" />
      </div>
    </main>
  );
};

export default Meme;