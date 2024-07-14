"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
  FaAndroid,
  FaJava,
  FaFigma,
  FaFirebase,
  FaGit,
  FaJira,
} from "react-icons/fa";
import {
  SiKotlin,
  SiKtor,
  SiFlutter,
  SiDart,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

//about data
const about = {
  title: "About Me",
  description:
    "I'm a passionate software developer dedicated to continuous learning and innovation. With a strong educational background and practical experience, I thrive in dynamic environments, always aiming to deliver exceptional solutions and drive technological advancement.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Prathamesh Kumbhar",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 9082379158",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "prathameshkumbhar291113@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Marathi",
    },
    {
      fieldName: "Hobbies",
      fieldValue: "Singing, Guitar",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "With over 2 years of hands-on experience in software development, I've mastered the art of crafting full-stack mobile applications. I've successfully delivered high-quality solutions and collaborated seamlessly with cross-functional teams, contributing significantly to every phase of the development process.",
  items: [
    {
      company: "General Diagnostics International Pvt. Ltd.",
      position: "Software Developer",
      duration: "Nov 2023 - Present",
    },
    {
      company: "Spare8 Platforms Pvt. Ltd.",
      position: "Android Engineer",
      duration: "Mar 2023 - Nov 2023",
    },
    {
      company: "Byasa Tech Solutions Pvt. Ltd.",
      position: "Jr. Mobile Application Developer",
      duration: "Oct 2022 - Mar 2023",
    },
    {
      company: "Invizio Solutions LLP.",
      position: "Mobile Application Developer Intern",
      duration: "Mar 2022 - Sep 2022",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I earned my Bachelor of Engineering in IT from Mumbai University, where I developed a solid foundation in computer science and software engineering. My education has equipped me with the skills and knowledge to excel in the tech industry.",
  items: [
    {
      institution: "University Of Mumbai",
      degree: "Bachelor of Engineering in IT",
      result: "8.425 CGPA",
      duration: "Jan 2021 - July 2024",
    },
    {
      institution: "Amrita Vidyalayam School.",
      degree: "11th & 12th Science PCM.",
      result: "65.2%",
      duration: "Jun 2018 - Jun 2020",
    },
    {
      institution: "MGM School.",
      degree: "1st - 10th Standard.",
      result: "80.0%",
      duration: "Jun 2008 - Jun 2018",
    },
  ],
};

//skills data
const skills = {
  title: "My Skills",
  description:
   "My core expertise lies in building full-stack mobile applications, encompassing both front-end and back-end development. I'm adept at using modern programming languages and frameworks, and my quick learning attitude ensures I stay ahead in the ever-evolving tech landscape.",
  skillList: [
    {
      icon: <FaAndroid />,
      name: "Android",
    },
    {
      icon: <SiKotlin />,
      name: "Kotlin",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiKtor />,
      name: "Ktor",
    },
    {
      icon: <SiDart />,
      name: "Dart",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next Js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiMongodb />,
      name: "Mongo Db",
    },
    {
      icon: <SiMysql />,
      name: "My Sql",
    },
    {
      icon: <SiPostgresql />,
      name: "Postgre Sql",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <FaJira />,
      name: "Jira",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="aboutme">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[8px] h-[8px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
                <div className="mb-8 xl:mb-16"></div>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.result}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
                <div className="mb-8 xl:mb-16"></div>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul
                  className="grid grid-cols-2 sm:grid-cols-3 
                md:grid-cols-4 gap-4 xl:gap-[30px]"
                >
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className="w-full h-[150px]
                             bg-[#232329] rounded-xl flex 
                             justify-center items-center group"
                            >
                              <div
                                className="text-6xl
                               group-hover:text-accent 
                               transition-all duration-300"
                              >
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
                <div className="mb-8 xl:mb-16"></div>
              </div>
            </TabsContent>

            <TabsContent
              value="aboutme"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 xl:gap-x-6 max-w-[750px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-col sm:flex-row items-start sm:items-start gap-4 break-all"
                      >
                        <span className="text-white/60 min-w-[100px] text-left">
                          {item.fieldName}
                        </span>
                        <span className="text-xl text-left">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
