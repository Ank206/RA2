import React from "react";
import CF from "../assets/code-forces.svg";
import CSS from "../assets/css(1).png";
import JS from "../assets/javascript(1).png";
import NODE from "../assets/node.png";
import ReACT from "../assets/react(1).png";
import TAILWIND from "../assets/tailwind.png";
import Github from "../assets/github(1).png";
import CPP from "../assets/CPP.png"
import NEXT from "../assets/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6c696768745f6261636b67726f756e642e706e67.png"
import FIREBASE from "../assets/Firebase.png"
import MONGO from "../assets/MongoDB.png"

const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-[#0a192f] text-gray-300 text-[015x] h-screen  w-full"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold  text-gray-300 border-b-4 inline border-pink-600 ">
            Skills
          </p>
          <p className="py-4 text-xl">
            // These are the technologies I've worked with
          </p>
        </div>
        {/* The Below DIV tag is going to be the container for all the icons. */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div
            name="icon"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img src={ReACT} alt="ReACT icon" className="w-20 mx-auto" />
            <p className="my-4">React</p>
          </div>      
          <div
            name="icon"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img src={NEXT} alt="NextJS icon" className="w-20 mx-auto" />
            <p className="my-4">NextJS</p>
          </div>    
          <div
            name="icon"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img src={MONGO} alt="MongoDB icon" className="w-20 mx-auto" />
            <p className="my-4">MongoDB</p>
          </div>
          <div
            name="icon"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img src={FIREBASE} alt="CSS icon" className="w-20 mx-auto" />
            <p className="my-4">Firebase</p>
          </div>
          <div
            name="icon"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img src={JS} alt="JS icon" className="w-20 mx-auto" />
            <p className="my-4">JavaScript</p>
          </div>
          <div
            name="icon"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img src={NODE} alt="NODE icon" className="w-20 mx-auto" />
            <p className="my-4">Node</p>
          </div>
          <div
            name="icon"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img src={Github} alt="Github icon" className="w-20 mx-auto" />
            <p className="my-4">Github</p>
          </div>
          <div
            name="icon"
            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
          >
            <img src={CPP} alt="C++ icon" className="w-20 mx-auto" />
            <p className="my-4">C++</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
