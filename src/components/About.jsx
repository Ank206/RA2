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
            <div>
              <p className="text-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                autem cumque velit odio obcaecati similique expedita fugiat rem
                minus magnam veritatis eligendi quae ratione iusto incidunt
                eaque et, ea nesciunt dicta nisi tenetur provident fuga totam
                vel! Eligendi, quaerat magnam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
