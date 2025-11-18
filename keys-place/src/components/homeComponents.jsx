//import react items
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { useState, useEffect } from 'react';

//import styles
import '../styles/Home.css'

//import images
import homeIcon from '../assets/home.svg'
import appIcon from '../assets/apps.svg'
import gameIcon from '../assets/game.svg'
import settingsIcon from '../assets/settings.svg'
import reactIcon from '../assets/React-icon.svg'

//navbar (All pages)
export function Navbar() {
  return (
    <nav className='navbar blur'>
      <div className='nav-list'>
        <Link to="/"><img className='nav-icon' id='homeIcon' src={homeIcon} alt='home'></img></Link>
        <Link to="/apps"><img className='nav-icon' src={appIcon} alt='apps'></img></Link>
        <Link to="/games"><img className='nav-icon' src={gameIcon} alt='games'></img></Link>
        <Link to="/settings"><img className='nav-icon' src={settingsIcon} alt='settings'></img></Link>
      </div>
    </nav>
  )
}

//home page
export function Title() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleReleaseNotes = () => {
    console.log('Release Notes clicked!'); //handle later
  };

  const formattedDateTime = currentDate.toLocaleString('en-US', {
    weekday: 'long', //set to short for shorter name. (ex. monday -> mon)
    year: 'numeric',
    month: 'long', //set to short for shorter name. (ex. october -> oct)
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true, //false for military time
  });

  return (
    <>
      <h1 id="titleText">Keys Place</h1>
      <p id="timeText">{formattedDateTime}</p>
      <button id="releaseNotesBtn" onClick={handleReleaseNotes}>Release Notes</button>
    </>
  );
}

//settings page
export function Account() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({ id: "12345", username: "Username" });
  };

  return (
    <div>
      <h4 className='sectionTitle'>Account</h4>
      {user ? (
        <span>
          Logged in as: {user.username} <br></br><span> ID: {user.id} </span>
        </span>
      ) : (
        <button onClick={handleLogin}>Log In</button>
      )}
    </div>
  );
}

export function Preferences() {
  return (
    <div>
      <h4 className='sectionTitle'>Preferences</h4>
    </div>
  )
}

// CONTINUE HEREEE
export function Themes() {
  // https://react-select.com/home

  const options = [
    { value: 'Creator\'s Pick', label: 'Creator\'s Pick' },
    { value: 'Christmas', label: 'Christmas' },
    { value: 'Halloween', label: 'Halloween' },
    { value: 'Dr Pepper', label: 'Dr Pepper' },
    { value: 'Sprite', label: 'Sprite' },
    { value: 'Beach Blue', label: 'Beach Blue' },
    { value: 'Dark Blue', label: 'Dark Blue' },
    { value: 'Mint', label: 'Mint' },
    { value: '3 am latte', label: '3 am latte' },
    { value: 'Im running out of ideas—eyesore', label: 'Im running out of ideas—eyesore' },
    { value: 'Image', label: 'Image' },
    { value: 'Custom', label: 'Custom' }
  ]

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#f0f0f0',
      border: state.isFocused ? '1px solid black' : '1px solid #ccc',
      boxShadow: 'none',
      position: 'relative',      // needed for absolute children
      paddingLeft: 0,            // remove extra left padding
      paddingRight: 0,           // remove extra right padding so we control spacing
    }),

    // Make the area that normally holds the value a simple centered flexbox
    valueContainer: (provided) => ({
      ...provided,
      display: 'flex',
      justifyContent: 'center',  // centers its children horizontally
      alignItems: 'center',
      padding: '8px 40px',       // give room on the right for the chevron (adjust as needed)
      overflow: 'visible',       // allow absolute singleValue to overflow if necessary
    }),

    // Absolutely center the displayed value/placeholder regardless of the chevron
    singleValue: (provided) => ({
      ...provided,
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'max-content',
      color: '#000',
      pointerEvents: 'none',     // so it doesn't block clicks
      whiteSpace: 'nowrap',      // prevents wrapping that breaks centering
    }),

    // Also center the placeholder text exactly the same way
    placeholder: (provided) => ({
      ...provided,
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
    }),

    // Keep the chevron on the right but make sure it doesn't change layout
    indicatorsContainer: (provided) => ({
      ...provided,
      position: 'absolute',
      right: 8,
      top: '50%',
      transform: 'translateY(-50%)',
      height: 'auto',
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      padding: 4,
      cursor: 'pointer',
    }),

    option: (provided, state) => ({
      ...provided,
      textAlign: 'center',
      backgroundColor: state.isFocused
        ? '#c0c0c0'
        : state.isSelected
          ? '#a0a0a0'
          : '#e0e0e0',
      color: '#000',
    }),
  };


  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <h4 className='sectionTitle'>Themes</h4>
      <Select options={options} isSearchable={true} styles={customStyles} onChange={setSelectedOption} />
      {selectedOption?.value === 'Custom' && (
        <div style={{ marginTop: '10px', padding: '10px' }}>
          You selected Custom! Displaying extra content here.
        </div>
      )}
      {selectedOption?.value === 'Image' && (
        <div style={{ marginTop: '10px', padding: '10px' }}>
          You selected Image! Displaying extra content here.
        </div>
      )}
    </div>
  )
}

export function Credits() {
  return (
    <div>
      <h4 className='sectionTitle'>Credits</h4>
      <span>Created by Keys.</span>
      <br></br>
      <span>Made with:</span>
      <span> React<img className='creditsIcon' src={reactIcon}></img></span>
    </div>
  )
}