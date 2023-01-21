import React from "react";
import { Link } from "@reach/router";

const GameMenu = (props) => {
  return (
    <div>
      <h1>Game Menu</h1>
      <h1>
        <Link to="/singleplayer"> Single Player </Link>
        <Link to="/multiplayer"> Multi Player </Link>
      </h1>
    </div>
  );
};

export default GameMenu;
