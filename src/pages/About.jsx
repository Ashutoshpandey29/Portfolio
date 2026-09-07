import React from "react";
import { skillGroups, experiences } from "../constants";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from "../components/CTA";
const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Ashutosh
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Senior Software Engineer building search, ranking, and GenAI
          systems &mdash; hybrid retrieval over embeddings and BM25,
          learning-to-rank models, and the applications on top of them.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-10 flex flex-col gap-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-500">
                {group.title}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm text-black-500 shadow-card"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I'm currently a{" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              Senior Software Engineer at InfoEdge
            </span>
            , building candidate recommendation, ranking, and GenAI systems
            used across iimjobs and hirist.
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
                <VerticalTimelineElement
                  key = {experience.company_name}
                  date = {experience.date}
                  icon = {
                    <div className = "flex justify-center items-center w-full h-full">
                      <img
                        src = {experience.icon}
                        alt = {experience.company_name}
                        className = "w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  contentStyle = {
                    {
                      borderBottom: '8px',
                      borderStyle: 'solid',
                      borderBottomColor: experience.iconBg,
                      borderShadow: 'none'
                    }
                  }
                  iconStyle = {
                    {
                      background: experience.iconBg,
                      boxShadow: 'none'
                    }
                  }
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">{experience.title}</h3>
                    <p className ="text-black-500 font-medium font-base" style = {{margin:0}}>{experience.company_name}</p>
                    <ul>
                      {experience.points.map((point, index) => (
                        <li className="text-black-500/50 font-normal pl-1 text-sm">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </VerticalTimelineElement>
              ))}
          </VerticalTimeline>  
        </div>
      </div>
      <hr className = " border-slate-300 " />
      <CTA /> 
    </section>
  );
};

export default About;
//react vertical timeline component