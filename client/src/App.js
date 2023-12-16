import React, { useState } from 'react';
import './App.css';
import Snowfall from 'react-snowfall'
// import Snowfall from './components/Snowfall';

function App() {
  const [randomName, setRandomName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getRandomName = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/participant');
      const data = await response.json();
      setRandomName(data.name);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        setIsLoggedIn(true);
        // alert('Login successful!');
      } else {
        // alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      
      <div className="w-full max-w-lg bg-white p-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
    <div className="flex justify-end px-4 pt-4"></div>
      <h1 className="dark:text-white text-5xl font-extrabold tracking-tight">Secret Santa</h1>
      {isLoggedIn ? (
        <>
          {/* <div> */}
            {/* Your Secret Santa content goes here */}
            {randomName && <p class="max-w-lg text-3xl font-semibold leading-relaxed text-gray-900 dark:text-white">Selected Participant: {randomName}</p>}
            <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={getRandomName}>Start Now!</button>
          {/* </div> */}
        </>
      ) : (
        <div class="grid gap-3 mb-6 p-3 w-full">
          <div class="mb-2">
            {/* Login form */}
            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username:</label>
            <input
              type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password:</label>
            <input
              type="password" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='mt-6'>
          <button className='w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2' onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
      </div>
    </div>
    
  );
}

export default App;
