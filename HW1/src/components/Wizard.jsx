import React from "react";
import "./../assets/css/Wizard.css";

export const Wizard = () => {
  return (
    <div className="Wizard">
      <h2 id="title">Wizard</h2>
      <p id="intro">
        The Wizard is the iconic arcane spellcaster, capable of doing all manner
        of fantastic tricks, and generally limited only by their spellbook and
        their spell slots. A Wizard with a comprehensive spellbook can do
        essentially anything in the game, often as well as or better than a
        non-magical character who is built to do that thing. A Wizard with
        Invisibility is as stealthy as a Rogue. A Wizard with a summoned pet can
        replace a fighter (at least temporarily). A clever Wizard could even
        find a way to heal their allies and replace a Cleric.
      </p>
      <h3 id="title">Subclasses</h3>
      <div className="subclasses">
        <ul>
          <li id="subclass1">Bladesinger</li>
          <li id="subclass2">Illusion</li>
          <li id="subclass3">Conjuration</li>
          <li id="subclass4">Divination</li>
          <li id="subclass5">Evocation</li>
          <li id="subclass6">Necromancy</li>
        </ul>
      </div>
    </div>
  );
};
