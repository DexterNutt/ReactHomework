import React from "react";
import "./../assets/css/Bard.css";

export const Bard = () => {
  return (
    <div className="Bard">
      <h2 id="title">Bard</h2>
      <p id="intro">
        The Bard is fantastically versatile. With access to every skill,
        expertise, full casting, and a decent set of proficiencies, the Bard can
        fill essentially every role in the party. Subclasses like College of
        Lore are more of the classic support Bard, with improved magical options
        and support abilities, while College of Swords and College of Valor can
        serve as front-line melee characters who can bring their spellcasting
        and support capabilities into the heat of battle.
      </p>
      <h3 id="title">Subclasses</h3>
      <div className="subclasses">
        <ul>
          <li id="subclass1">College of Creation</li>
          <li id="subclass2">College of Eloquence</li>
          <li id="subclass3">College of Lore</li>
          <li id="subclass4">College of Spirits</li>
          <li id="subclass5">College of Swords</li>
          <li id="subclass6">College of Whispers</li>
        </ul>
      </div>
    </div>
  );
};
