import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// if profile pic clicked, user can enter an image address to swap the profile pic
function changeProfilePic() {
  const imageUrl = prompt("Enter Profile Picture URL:");

  if (imageUrl !== null && imageUrl !== "") {
    // makes sure url is https:// or http:// with no spaces
    const urlPattern = /^(http|https):\/\/\S+$/;
    
    if (urlPattern.test(imageUrl)) {
      document.getElementById('profile-pic').src = imageUrl;
    } else {
      alert("Invalid URL. Please enter a valid URL.");
    }
  }
}


root.render(
  <React.StrictMode>
    <div id="header">
        <p>hive</p>
        <img 
          id="profile-pic" 
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' 
          alt='profile pic'
          onClick={changeProfilePic}
        />
      </div>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
