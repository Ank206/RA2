import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div>
          <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 mt-8 py-1">
            <div>
              <p className="sm:text-right text-4xl font-bold ">
                Hi, I'm Anush, nice to meet you, Please take a look around.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[18px]">A Full Stack Developer proficient in the MERN Stack and Next.js, complemented by strong skills in C++ and DSA. I am passionate about crafting beautiful websites and have a knack for understanding technology at a deeper level.
              </p>
                {/* <div className="name">
                  B.Tech ( 2nd Year )
                </div>
                <div>
                  Computer Engineering
                </div>
                <div>
                  TIET, Patiala.
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
