"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { fetchGitHubRepos, GitHubRepo } from "@/lib/github";
import { TypographyP, TypographyH3 } from "../ui/typography";
import { Button } from "../ui/button";
import { PinContainer } from "../ui/3d-pin";

const ProjectsSection = () => {
  const [allProjects, setAllProjects] = useState<Project[]>(projects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGitHubProjects = async () => {
      try {
        const repos = await fetchGitHubRepos("abdifatah-com");
        const githubProjects: Project[] = repos.map((repo: GitHubRepo) => ({
          id: repo.name,
          category: repo.language || "Open Source",
          title: repo.name.replace(/-/g, " "),
          src: `https://opengraph.githubassets.com/1/abdifatah-com/${repo.name}`,
          screenshots: [`https://opengraph.githubassets.com/1/abdifatah-com/${repo.name}`],
          skills: {
            frontend: [],
            backend: [],
          },
          live: repo.html_url, // Direct to GitHub as requested
          github: repo.html_url,
          content: (
            <div className="mt-4">
              <TypographyP className="font-mono">
                {repo.description || "A cool project from my GitHub repository."}
              </TypographyP>

              <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
                <Link rel="noopener" target="_blank" href={repo.html_url} className="flex gap-2">
                  <Button
                    size="sm"
                    className="group bg-green-600 hover:bg-green-700 text-white flex items-center">
                    Live Demo
                    <ArrowUpRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </Link>
                <Link rel="noopener" target="_blank" href={repo.html_url} className="flex gap-2">
                  <Button
                    size="sm"
                    className="group bg-gray-800 hover:bg-gray-900 text-white flex items-center">
                    <FaGithub className="mr-2 w-5 h-5" />
                    Source Code
                    <ArrowUpRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <TypographyH3 className="w-full text-left text-sm mb-2">Technologies Used</TypographyH3>
                {repo.topics.map((topic) => (
                  <span key={topic} className="px-2 py-1 bg-neutral-800 text-neutral-400 text-xs rounded-full">
                    #{topic}
                  </span>
                ))}
              </div>
            </div>
          ),
        }));

        // Remove the first local project and combine with github projects, limiting to 6 total
        const localProjectsFiltered = projects.slice(1);
        const combined = [...localProjectsFiltered];
        githubProjects.forEach(gp => {
          if (!combined.find(p => p.id === gp.id)) {
            combined.push(gp);
          }
        });

        setAllProjects(combined.slice(0, 6)); // Ensure maximum of 6 projects
      } catch (error) {
        console.error("Failed to load GitHub projects", error);
        setAllProjects(projects.slice(1, 7)); // Fallback to limited local projects
      } finally {
        setLoading(false);
      }
    };

    loadGitHubProjects();
  }, []);

  return (
    <section id="projects" className="max-w-7xl mx-auto min-h-screen py-20 px-4">
      <Link href={"#projects"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-6",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-4"
          )}
        >
          PROJECTS
        </h2>
        <p className="mx-auto mt-1 mb-16 line-clamp-1 max-w-3xl font-normal text-base text-center text-neutral-300">
          A collection of my recent work and open-source contributions.
        </p>
      </Link>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-10 h-10 animate-spin text-neutral-500" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-8">
          {allProjects.map((project) => (
            <Modall key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
};
const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn p-0">
          <PinContainer
            title={project.github ? "GitHub.com" : "Visit"}
            href={project.github || project.live}
          >
            <div
              className="relative w-[300px] sm:w-[350px] md:w-[320px] lg:w-[350px] flex items-center justify-center overflow-hidden"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                className="absolute w-full h-full top-0 left-0 hover:scale-[1.05] transition-all object-cover rounded-lg"
                src={project.src}
                alt={project.title}
                width={400}
                height={225}
                unoptimized={project.src.includes("githubassets.com")}
              />
              <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none rounded-b-lg">
                <div className="flex flex-col h-full items-start justify-end p-4">
                  <div className="text-base text-left font-bold text-white mb-1 line-clamp-1">{project.title}</div>
                  <div className="text-[10px] bg-white text-black font-bold rounded px-1.5 py-0.5">
                    {project.category}
                  </div>
                </div>
              </div>
            </div>
          </PinContainer>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-4">
            {/* Source Code Button */}
            {project.github && (
              <Link href={project.github} target="_blank" className="no-click-outside">
                <button className="group px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md text-sm flex items-center justify-center gap-2 transition-colors duration-200 border border-neutral-700 no-click-outside">
                  <FaGithub className="w-4 h-4 no-click-outside" />
                  Code
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 no-click-outside" />
                </button>
              </Link>
            )}

            {/* Live Demo Button */}
            <Link href={project.live} target="_blank" className="no-click-outside">
              <button className="group px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm flex items-center justify-center gap-2 transition-colors duration-200 no-click-outside">
                Live Demo
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 no-click-outside" />
              </button>
            </Link>
          </ModalFooter>

        </ModalBody>
      </Modal>
    </div>
  );
};
export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-xl md:text-3xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        {project.skills.frontend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Frontend
            </p>
            <FloatingDock items={project.skills.frontend} />
          </div>
        )}
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Backend
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      {project.content}
    </>
  );
};
