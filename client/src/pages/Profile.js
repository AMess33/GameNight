import React from "react";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import GameNightList from "../components/GameNightList";

import { QUERY_GAME_NIGHTS } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const [modalState, setModalState] = useState("");

  const createGameNight = (event) => {
    setModalState("gameNightForm");
  };
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_GAME_NIGHTS);

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        Please return to the login page and sign in or create an account at the
        signup page
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : "your"} Game Nights!
        </h2>
        <button
          type="button"
          className="btn btn-light text-dark"
          onClick={createGameNight}
        >
          Create a new Game Night!
        </button>
        <div className="col-10 mb-3">
          <GameNightList gameNights={user.gameNights} />
        </div>
        <div>
          {modalState === "gameNightForm" && (
            <gameNightForm close={() => setModalState("")} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Profile;
