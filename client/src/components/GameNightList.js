import { Link } from "react-router-dom";

const GameNightList = ({ gamenights }) => {
  const gameURL = `/gamenight/${gamenights._id}`;
  return (
    <div className="card game">
      <div className="card-body">
        <h3 className="card-title">{gamenights.title}</h3>
        <p className="card-text">{gamenights.description}</p>
        <p className="card-text">{gamenights.games.length} games started.</p>
        <Link className="btn btn-outline-light" to={gameURL}>
          Open Game Night!
        </Link>
        {/* <a>Open Game Night</a> */}
      </div>
    </div>
  );
};
export default GameNightList;
