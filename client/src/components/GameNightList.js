const GameNightList = ({ gamenights }) => {
  return (
      <div className="card game">
        <div className="card-body">
          <h3 className="card-title">{gamenights.title}</h3>
          <p className="card-text">{gamenights.description}</p>
          <p className="card-text">{gamenights.games.length} games started.</p>
          <a href="#" className="btn btn-primary">
            Open Game Night!
          </a>
        </div>
      </div>
  );  
};
export default GameNightList;
