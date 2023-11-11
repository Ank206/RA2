import React from "react";
import HTML from "../assets/html(1).png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-4">// Check out some of my recent work</p>
        </div>

        {/* Container for all of all of the projects */}
        <div className="grid sm:grid-col-2 md:grid-cols-3 gap-4">
          {/* Work 1 */}
          <div
            style={{ backgroundImage: `url(${HTML})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            a{/* Hover effects */}
            <div>
              <span></span>
              <div>
                <a href="">
                  <button>A</button>
                </a>
                <a href="">
                  <button></button>
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
