import './Card.css';

function Card(props) {
  return (
    <div className="card">
        <div class="logo-btn-container">
            <img class="card-logo" src={props.imgsrc} alt={props.alttxt}/>
            <button>Connect</button>
        </div>
        <h6 class="card-name">{props.cardName}</h6>
        <p class="card-description">{props.cardDescription}</p>
    </div>
  );
}

export default Card;
