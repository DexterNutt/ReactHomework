import React from "react";
import "./../assets/css/Welcome.css";

export const Welcome = () => {
  return (
    <div className="welcomeTag">
      <h1 id="title">RPG Classes Listing</h1>
      <p id="intro">
        The current version of Dungeons and Dragons 5th Edition is a throwback
        to the best parts of Advanced DnD (2nd Edition) as well as 3rd Edition.
        It also includes many of the best parts of 4th Edition, but with
        simplified, streamlined mechanics. This makes DnD 5e easy to learn for
        new players, while still feeling familiar to veterans of the game. It is
        enjoyable for players of all experience levels. I began playing DnD 5e
        when it was released in 2014, and find this edition to be my favorite of
        the several that I’ve played. The rules are sensible, accessible, and
        consistent, while still being mechanically satisfying. I have taught
        dozens of new players in-person and found that they picked the rules up
        much faster than I’d seen with previous editions. Based on the
        incredible size of the 5e community, my experience is not unique.
      </p>
    </div>
  );
};
