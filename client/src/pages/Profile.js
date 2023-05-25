import React from "react";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import GameNightList from "../components/GameNightList";
import GameNightForm from "../components/gameNightForm";
import GameNight from "./GameNight";
import { QUERY_GAME_NIGHTS } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_GAME_NIGHTS);
  console.log("Auth.getProfile().data", Auth.getProfile().data);

  const user = Auth.getProfile().data || {};
  if (loading) {
    return <div>Loading...</div>;
  }

  const gameNights = data || [];
  if (gameNights) {
    console.log("data from useQuery(QUERY_GAME_NIGHTS)", data);
  }
  return (
    <div>
      {data && (
        <div className="flex-row justify-center mb-3">
          <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5 welcomeMessage">
            Viewing {user.username}'s GameNights
          </h2>
          <button
            type="button"
            className="btn btn-light text-dark"
            onClick={createGameNight}
          >
            Create a new Game Night!
          </button>
          <div className="col-10 gameList">
            {data.gameNights.map((gameNight) => (
              <GameNightList gamenights={gameNight} />
            ))}
          </div>
          <div>
            {modalState === "gameNightForm" && (
              <GameNightForm close={() => setModalState("")} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
