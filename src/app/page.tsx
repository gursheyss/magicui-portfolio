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

export default function Home() {
  return (
    <main className="container mx-auto p-8 min-h-screen mx-auto overflow-auto">
      <div className="flex flex-col space-y-4">
        <div className="mx-auto w-full max-w-6xl space-y-8 bg-white py-8 print:space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 space-y-4 md:space-y-0">
            <div>
              <div className="text-4xl font-bold tracking-tight">
                {RESUME_DATA.contact.name}
              </div>
              <div className="mt-2 text-sm text-gray-700 md:text-base max-w-md md:max-w-md">
                {RESUME_DATA.summary}
              </div>
              <div className="flex items-center space-x-2 text-gray-500 mt-2">
                <Globe className="inline-block h-4 w-4" />
                <span>{RESUME_DATA.contact.location}</span>
              </div>
              <div className="flex gap-4 justify-start text-muted-foreground print:hidden pt-4">
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
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <Experience />
      </div>
      <section className="w-full max-w-6xl mx-auto py-12" id="projects">
        <div className="space-y-6">
          <div className="flex flex-col items-start justify-center space-y-4 text-left">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">My Projects</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mx-auto">
            {RESUME_DATA.projects.map((project, id) => (
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
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
