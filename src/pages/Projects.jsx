import { useState, Suspense, useEffect, useRef } from "react"; //used for renndering the loading screen
import { Canvas } from "@react-three/fiber";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import Laptop from "../models/Laptop.jsx";

const Projects = () => {
  const {rotating, setRotating} = useState(false);
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Here are some of the projects I have worked on. I am always looking
          for new projects to work on, so feel free to reach out to me if you
          have any ideas. Your collaboration is always welcome.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full key = {project.name}">
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-500 hover:text-blue-700"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
      {/* <div>
        <Canvas camera={{ near: 0.1, far: 1000 }}>
          <ambientLight intensity={10} />
          <spotLight position={[1, 1, 1]} angle={0.15} penumbra={1} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Laptop 
              position={[1, 1, 1]}
              scale={[3, 3, 3]}
              rotating = {rotating}
            />
          </Suspense>
        </Canvas>
      </div> */}
    </section>
  );
};

export default Projects;
