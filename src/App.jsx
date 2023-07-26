import React from 'react';
import Posts from './Components/Posts';
import NavBar from './Components/NavBar';
import UserProfile from './Components/UserProfile';
import Contacts from './Components/Contacts';
import './index.css';

function App() {
	return (
		<>
			<div className='nav'>
				<NavBar />
				<UserProfile />
				<Posts />
			</div>
			<div className="contacts">
				<Contacts />
			</div>
		</>
	);
}

export default App;
