import React from "react";
import NODE from "../assets/node.png";
import MyHerupa2 from "../assets/MyHerupa2.png"
import KADB from "../assets/KADB.png"
import Portfolio from "../assets/KhushiyonKiKheti.jpeg"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f] pt-8">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-4 text-xl">// Check out some of my recent work</p>
        </div>

        {/* Container for all of all of the projects */}
        <div className="grid sm:grid-col-2 md:grid-cols-2 gap-4">
          {/* Work 1 */}
          <div
            className="shadow-md  shadow-[#6fa3f6]  group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{
              backgroundSize: "auto",
              backgroundImage: `url(${KADB})`,
            }}
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span
                className="text-3xl p-4 font-bold text-center text-white tracking-wider"
                style={{ display: "block" }}
              >
                KADatabase
              </span>
              <div className="pt-8 text-center ">
                <a href="https://github.com/Ank206/KADatabase">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Ank206/KADatabase">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Work 2 */}
          <div
            className="shadow-md  shadow-[#6fa3f6] group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{
              backgroundImage: `url(${Portfolio})`,
            }}
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span
                className="text-3xl p-4 font-bold text-center text-white tracking-wider"
                style={{ display: "block" }}
              >
                Khushiyon Ki Kheti
              </span>
              <div className="pt-8 text-center ">
                <a href="https://kissan-a96e9.web.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/aryan-panja/KhushiyonKiKheti">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
           {/* Work 1 */}
          <div
            className="shadow-md  shadow-[#6fa3f6]  group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{
              backgroundImage: `url(${MyHerupa2})`,
            }}
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span
                className="text-3xl p-4 font-bold text-center text-white tracking-wider"
                style={{ display: "block" }}
              >
                MyHerupa 2
              </span>
              <div className="pt-8 text-center ">
                <a href="https://myherupa-2.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Akhil-Sharma-26/code-hunters">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
