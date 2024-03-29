import React, { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {

  const [showCards, setShowCards] = useState('show');

  // alerts user if they are sure to go back (nothing happens other than the alert)
  function handleBackClick() {
    const userConfirmed = window.confirm(
      "Are you sure you want to go back?"
    );
  };

  // clears all cards and thanks user for submission
  function handleFinishClick() {
    const userConfirmed = window.confirm(
      "Are you sure you want to finish? This will hide all cards."
    );

    if (userConfirmed) {
      setShowCards('hide');
      document.querySelector('h1').innerHTML = "Thank you for your submission."
      document.querySelectorAll('.back-finish-btn').forEach((btn) => {
        btn.style.display = 'none';
      });    
      document.querySelector('.App').style.paddingBottom = '500px';
    } 
  };


  return (
    <div className="App">
      <h1>Connect your favorite tools.</h1>

      <Card
        imgsrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png"
        alttxt = "Figma Logo"
        cardName = "Figma"
        cardDescription = "Stay up to date with your team's latest designs."
        showHide = {showCards}
      />
      <Card
        imgsrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png"
        alttxt = "Google Drive Logo"
        cardName = "Google Drive"
        cardDescription = "Access all of your documents and information."
        showHide = {showCards}
      />
      <Card
        imgsrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1024px-Slack_icon_2019.svg.png"
        alttxt = "Slack Logo"
        cardName = "Slack"
        cardDescription = "Communicate seamlessly with your teammates."
        showHide = {showCards}
      />
      <Card
        imgsrc = "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
        alttxt = "Notion Logo"
        cardName = "Notion"
        cardDescription = "Sync all of your notes, team docs, and other important information."
        showHide = {showCards}
      />
      <Card
        imgsrc = "https://asset.brandfetch.io/idAnDTFapY/idYC5f2L1X.png"
        alttxt = "Miro Logo"
        cardName = "Miro"
        cardDescription = "Unlock the power of collaboration to distill insights from data."
        showHide = {showCards}
      />
      <Card
        imgsrc = "https://static-00.iconduck.com/assets.00/airtable-icon-2048x1714-idz9zb6h.png"
        alttxt = "Airtable Logo"
        cardName = "Airtable"
        cardDescription = "Keep your data organized in a spreadsheet-database format."
        showHide = {showCards}
      />
      <Card
        imgsrc = "https://seeklogo.com/images/C/confluence-logo-D9B07137C2-seeklogo.com.png"
        alttxt = "Confluence Logo"
        cardName = "Confluence"
        cardDescription = "Create content, collaborate on work, and organize and share information."
        showHide = {showCards}
      />
      <Card
        imgsrc = "https://dovetail.com/logo.png"
        alttxt = "Dovetail Logo"
        cardName = "Dovetail"
        cardDescription = "Oragnize and tag your research in a collaborative platform."
        showHide = {showCards}
      />

      <br/>

      <button className="back-finish-btn" onClick={() => handleBackClick()}>Back</button>
      <button id="finish-btn" className="back-finish-btn" onClick={() => handleFinishClick()}>Finish</button>


    </div>
  );
}

export default App;