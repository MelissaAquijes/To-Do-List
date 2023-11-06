import profileImg from '../assets/profile.jpg';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <img
        className='profileImg'
        src={profileImg}
        alt='User profile' />

      <div className='welcomeContainer'>
        <p className='welcome'>
          Welcome!
        </p>

        <h2 className='userName'>
          Melissa Aquijes
        </h2>
      </div>
    </header>
  );
}

export { Header };