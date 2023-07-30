import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;

  return (
    <Headroom className="headroom">
      <header class="headroom" className={isDark ? "dark-menu header" : "header "}>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a className = "btn btn-2" href="#skills">About</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a className = "btn btn-2" href="#opensource">Open Source</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a className = "btn btn-2" href="#achievements">Achievements</a>
            </li>
          )}
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
