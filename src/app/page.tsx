"use client";

import { RESUME_DATA } from "@/data/resume-data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Globe, MailIcon, PhoneIcon } from "lucide-react";
import { Experience } from "@/components/experience";
import { ProjectCard } from "@/components/project-card";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/light-switch";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <main className="container mx-auto p-8 min-h-screen mx-auto overflow-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col space-y-4"
      >
        <motion.div
          variants={fadeInVariants}
          className="mx-auto w-full max-w-full space-y-8 py-8 print:space-y-4"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 space-y-4 md:space-y-0">
            <div>
              <div className="text-4xl font-bold tracking-tight text-primary flex space-x-4">
                {RESUME_DATA.contact.name}
              </div>
              <div className="mt-2 text-sm md:text-base max-w-md text-muted-foreground">
                {RESUME_DATA.summary}
              </div>
              <div className="flex items-center space-x-2 mt-2 text-muted-foreground">
                <Globe className="inline-block h-4 w-4" />
                <span>{RESUME_DATA.contact.location}</span>
              </div>
              <div className="flex gap-4 justify-start print:hidden pt-4 text-muted-foreground">
                {RESUME_DATA.contact.email && (
                  <Tooltip>
                    <TooltipTrigger>
                      <Button variant="outline" size="icon" asChild>
                        <a href={`mailto:${RESUME_DATA.contact.email}`}>
                          <MailIcon className="w-4 h-4" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Email</p>
                    </TooltipContent>
                  </Tooltip>
                )}
                {RESUME_DATA.contact.tel && (
                  <Tooltip>
                    <TooltipTrigger>
                      <Button variant="outline" size="icon" asChild>
                        <a href={`tel:${RESUME_DATA.contact.tel}`}>
                          <PhoneIcon className="w-4 h-4" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Phone</p>
                    </TooltipContent>
                  </Tooltip>
                )}
                {RESUME_DATA.contact.social.map((social) => (
                  <Tooltip key={social.name}>
                    <TooltipTrigger>
                      <Button variant="outline" size="icon" asChild>
                        <a href={social.url}>
                          <social.icon className="w-4 h-4" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
                <ModeToggle />
              </div>
            </div>
            <div className="flex-shrink-0 hidden md:block">
              <img
                src={RESUME_DATA.avatarUrl}
                alt="Avatar"
                width={128}
                height={128}
                className="rounded-[30%]"
              />
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInVariants} className="max-w-full mx-auto">
          <Experience />
        </motion.div>

        <motion.section
          variants={fadeInVariants}
          className="w-full max-w-full mx-auto py-12"
          id="projects"
        >
          <div className="space-y-6">
            <div className="flex flex-col items-start justify-center space-y-4 text-left">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">
                  My Projects
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mx-auto">
              {RESUME_DATA.projects.map((project, id) => (
                <motion.div key={project.title} variants={fadeInVariants}>
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
