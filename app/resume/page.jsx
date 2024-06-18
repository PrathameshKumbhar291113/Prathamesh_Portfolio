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
        institution: "Vasantdada Patil Pratisthan's College Of Engineering & VA.",
        degree: "Bachelor Of Engineering in Information Technology.",
        result: "8.425 CGPA",
        duration: "Jan 2021 - July 2024"
      },
      {
        institution:"Amrita Vidyalayam High School.",
        degree: "11th & 12th Science PCM.",
        result: "65.2%",
        duration:"Jun 2018 - Jun 2020"
      },
      {
        institution:"Mahatma Gandhi Mission Primary & Secondary School.",
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
    return(
        <motion.div initial = {{opacity: 0}}
        animate = {{
          opacity: 1,
          transition: {delay: 2.4, duration:0.4, ease:"easeIn"},
        }}
        className="min-h-[80vh] flex "
        >Resume</motion.div>
    );
}

export default Resume