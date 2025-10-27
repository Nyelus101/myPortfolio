import React, { useRef, ReactNode } from "react";
import { useInView } from "framer-motion";
import { Tooltip } from "@mui/material";
import { data } from "../lib/allProjectsData";
import "../styles/About.css";
import me from "/images/passport1.png";

interface DivProps {
    children: ReactNode;
  }

//FRAMER MOTION
function Div({ children }: DivProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(0px)",
          opacity: isInView ? 1 : 0,
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const About = () => {
  const { skills, liveProjects } = data;

  return (
    <Div>
      <h1 className="text-3xl text-lightGrey font-bold mb-2">
        <span className="text-lightGreen text-xl mr-2">01.</span>About Me
      </h1>

      <div className="flex lg:flex-row flex-col items-center gap-4 md:gap-8 justify-between">
        <article className="text-left text-deepGrey text-lg mt-3 font-medium flex-1">
          <p>
            Hello once more&#128075;, I am Chinedu, and I love creating things that work and look great on the web.
          </p>

          <p className="my-2">
            In 2022, I became really interested in web development, so I decided to start learning through
            {" "}
            <a
              className="underline-style"
              href="https://www.freecodecamp.org/"
              target="_blank"
              rel="noreferrer"
            >
              FreeCodeCamp
            </a>
            .{" "}
          </p>

          <p className="my-2">
            Fast-forward to today, I&apos;ve had the priviledge of building
            software for a software development company.
          </p>
          <br/>

          <div className="flex flex-col gap-1 w-full">
            <p>Projects I&apos;ve worked on include:</p>
            <ol className="list-none">
              {liveProjects.map((project) => (
                <li key={project.url}>
                  <Tooltip title={project.description} placement="top">
                    <a
                      className="underline-style"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.title}
                    </a>
                  </Tooltip>
                </li>
              ))}
            </ol>
          </div>

          <div className="skill-set">
            <p className="my-2">
              Technologies I&apos;m proficient with include:
            </p>
            <div className="flex flex-row flex-wrap gap-2 items-start justify-between w-full max-w-sm text-base mx-auto md:mx-0">
              <ol className="list-none">
                {skills.slice(0, 3).map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ol>
              <ol className="list-none">
                {skills.slice(3, 6).map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ol>
              <ol className="list-none">
                {skills.slice(6, skills.length).map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ol>
            </div>
          </div>
        </article>

        <div className="flex-[0.5] flex items-stretch min-h-[15rem] object-contain bg-white rounded-md pt-10">
          <img src={me} alt="Me" className="rounded-xl" />
        </div>
      </div>
    </Div>
  );
};

export default About;
