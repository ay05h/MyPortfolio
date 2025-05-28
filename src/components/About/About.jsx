import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../../assets/profile.png";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
      id="about"
    >
      {/*Main Container */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12 lg:gap-16">
        {/*Left Container */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Ayush Kumar Rai
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>{" "}
            <Typewriter
              words={[
                "Fullstack Developer",
                "Machine Learning Engineer",
                "Data Scientist",
                "Programmer",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={75}
              delaySpeed={2000}
              cursorColor="#8245ec"
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-base lg:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am an undergraduate in Computer Science and Engineering at Amrita
            Vishwa Vidyapeetham with a major in Artificial Intelligence and Data
            Science. I am passionate about creating innovative and practical
            tech solutions, especially in Full-Stack Web Development, Machine
            Learning, and Blockchain. With hands-on experience, I’ve worked on
            building interactive web applications using the MERN stack, applying
            deep learning techniques to solve real-world problems, and exploring
            blockchain technologies through smart contract development and
            decentralized application design. I enjoy working on complex
            problems that marry code, data, and user interface. I learn every
            day and wish to be a developer who writes scalable code but also
            delivers real-world outcomes through technology.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/*Right Container */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[30rem] lg:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Ayush Kumar Rai"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
