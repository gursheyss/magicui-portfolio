import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { YoutubeIcon } from "lucide-react";

export const RESUME_DATA = {
  about: "Full Stack Developer",
  summary:
    "Full stack developer with a knack for problem-solving and a passion for building scalable applications.",
  avatarUrl:
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
  contact: {
    name: "John Doe",
    email: "hello@example.com",
    tel: "+123456789",
    location: "San Francisco, CA",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/",
        icon: GitHubLogoIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <title>LinkedIn</title>
            <path
              fill="currentColor"
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        ),
      },
      {
        name: "X",
        url: "https://x.com/",
        icon: (props: React.SVGProps<SVGSVGElement>) => (
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
          >
            <title>X</title>
            <path
              fill="currentColor"
              d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
            />
          </svg>
        ),
      },
      {
        name: "Youtube",
        url: "https://youtube.com/",
        icon: YoutubeIcon,
      },
    ],
  },
  projects: [
    {
      title: "Chat Collect",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <GlobeIcon className="h-4 w-4" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <GlobeIcon className="h-4 w-4" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <GlobeIcon className="h-4 w-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <GitHubLogoIcon className="h-4 w-4" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      dates: "April 2023 - Present",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <GlobeIcon className="h-4 w-4" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  experience: [
    {
      company: "Google",
      role: "Senior Software Engineer",
      description:
        "Led a team of developers in building scalable web applications. Implemented microservices architecture and improved application performance by 30%.",
      startDate: "March 2021",
      location: "Mountain View, CA",
    },
    {
      company: "Netflix",
      role: "Full Stack Developer",
      description:
        "Developed and maintained full stack web applications. Enhanced user experience and increased engagement through interactive UI components.",
      startDate: "July 2018",
      location: "Los Gatos, CA",
    },
    {
      company: "Apple",
      role: "Software Engineer Intern",
      description:
        "Assisted in the development of web applications and automated testing processes. Contributed to the design and implementation of new features.",
      startDate: "Jan 2017",
      location: "Cupertino, CA",
    },
  ],
} as const;
