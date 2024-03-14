import React from "react";
import "./../assets/css/Fighter.css";

export const Fighter = () => {
  return (
    <div className="Fighter">
      <h2 id="title">Fighter</h2>
      <p id="intro">
        The Fighter, DnD’s iconic warrior, is a fantastic addition to any party.
        While their skill and tool proficiencies are extremely limited, Fighters
        excel in combat. They are durable, have great armor, and provide plenty
        of damage output. Fighters get more Ability Score Increases than any
        other class, allowing them to easily explore feats without sacrificing
        crucial ability scores. They also notably get more attacks than any
        other class, which can be a lot of fun.
      </p>
      <h3 id="title">Subclasses</h3>
      <div className="subclasses">
        <ul>
          <li id="subclass1">Archer</li>
          <li id="subclass2">Battle Master</li>
          <li id="subclass3">Cavalier</li>
          <li id="subclass4">Echo Knight</li>
          <li id="subclass5">Eldrich Knight</li>
          <li id="subclass6">Rune Knight</li>
        </ul>
      </div>
    </div>
  );
};
