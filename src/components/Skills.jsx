import React from "react";
import HTML from "../assets/html(1).png";
import CSS from "../assets/css(1).png";
import JS from "../assets/javascript(1).png";
import NODE from "../assets/node.png";
import ReACT from "../assets/react(1).png";
import TAILWIND from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills">
      {/* Container */}
      <div>
        <div>
          <p>Experience</p>
          <p>// These are the technologies I've worked with</p>
        </div>
        <div>
          <div>
            <img src={HTML} alt="HTML icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
