"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import {
  FaAndroid,
  FaJava,
  FaFigma,
  FaFirebase,
  FaGit,
  FaJira
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
    SiFirebase
} from "react-icons/si";

  //about data
  const about = {
    title: "About Me",
    description:
      "Quick learner and Self taught Android Developer with over 2+ years of experience in Android Development using Java, Kotlin and adept at writing high quality code for mobile application development with user-friendly user interfaces for users. Efficient with Agile development methodology for module testing and proficient in debugging and fixing errors.",
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
        fieldValue: "English, Marathi, Hindi",
      },
      {
        fieldName: "Hobbies",
        fieldValue: "Singing, Guitar, Football",
      },
    ]
  };

  //experience data
  const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description:"Quick learner and Self taught Android Developer with over 2+ years of experience in Android Development using Java, Kotlin and adept at writing high quality code for mobile application development with user-friendly user interfaces for users. Efficient with Agile development methodology for module testing and proficient in debugging and fixing errors.",
    items: [
      {
        company: "General Diagnostics International Pvt. Ltd.",
        position: "Software Developer",
        duration: "Nov 2023 - Present"
      },
      {
        company: "Spare8 Platforms Pvt. Ltd.",
        position: "Android Engineer",
        duration: "Mar 2023 - Nov 2023"
      },
      {
        company: "Byasa Tech Solutions Pvt. Ltd.",
        position: "Jr. Mobile Application Developer",
        duration: "Oct 2022 - Mar 2023"
      },
      {
        company: "Invizio Solutions LLP.",
        position: "Mobile Application Developer Intern",
        duration: "Mar 2022 - Sep 2022"
      }
    ]

  };

  //education data
  const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description:"Quick learner and Self taught Android Developer with over 2+ years of experience in Android Development using Java, Kotlin and adept at writing high quality code for mobile application development with user-friendly user interfaces for users. Efficient with Agile development methodology for module testing and proficient in debugging and fixing errors.",
    items: [
      {
        institution: "University Of Mumbai",
        degree: "Bachelor of Engineering in IT",
        result: "8.425 CGPA",
        duration: "Jan 2021 - July 2024"
      },
      {
        institution:"Amrita Vidyalayam School.",
        degree: "11th & 12th Science PCM.",
        result: "65.2%",
        duration:"Jun 2018 - Jun 2020"
      },
      {
        institution:"MGM School.",
        degree: "1st - 10th Standard.",
        result: "80.0%",
        duration:"Jun 2008 - Jun 2018"
      }
    ]

  };

  //skills data
  const skills = {
    title: "My Skills",
    description:
      "Quick learner and Self taught Android Developer with over 2+ years of experience in Android Development using Java, Kotlin and adept at writing high quality code for mobile application development with user-friendly user interfaces for users. Efficient with Agile development methodology for module testing and proficient in debugging and fixing errors.",
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
        icon: <SiKtor />,
        name: "Ktor",
      },
      {
        icon: <FaJava />,
        name: "Java",
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
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div>
                    <h3></h3>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="aboutme" className="w-full">
                About
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    );
}

export default Resume