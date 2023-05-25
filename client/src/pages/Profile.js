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
          <h2 className="col-12 bg-dark text-light border border-light rounded p-3 m-2">
            Viewing {user ? user.username : "Hello"}'s game nights
          </h2>
          <div className="gamesList">
            <GameNightForm userId={data.user && data.user._id} />
            {data.user &&
              data.user.gameNights.map((gameNights) => (
                <GameNight key={gameNights._id} gameNights={gameNights} />
              ))}
          </div>
          <div className="col-10 mb-3">
            {data.gameNights.map((gameNight) => (
              <GameNightList gamenights={gameNight} />
            ))}
          </div>
          {/* <div>
            {modalState === "gameNightForm" && (
              <GameNightForm close={() => setModalState("")} />
            )}
          </div> */}
        </div>
      )}
    </div>
  );
};
export default Profile;
