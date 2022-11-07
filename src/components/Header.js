import logo from '../images/troll-face.png'

const Header = () => {
  return (
    <header>
      <img className='logo' src={logo} alt="" />
      <h2 className='header--title'>Meme Generator</h2>
      <h3 className='header--course'>React Course - Project 3</h3>
    </header>
  );
};

export default Header;