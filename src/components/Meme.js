import memesData from '../memesData.js';

const Meme = () => {

  function getImage() {
    const memesArray = memesData.data.memes;
    const num = Math.floor(Math.random() * memesArray.length);
    console.log(memesArray[num].url);
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
    </main>
  );
};

export default Meme;