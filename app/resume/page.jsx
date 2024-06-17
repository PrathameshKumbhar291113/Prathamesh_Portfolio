"use client";
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
    SiPostman
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

  const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description:"Quick learner and Self taught Android Developer with over 2+ years of experience in Android Development using Java, Kotlin and adept at writing high quality code for mobile application development with user-friendly user interfaces for users. Efficient with Agile development methodology for module testing and proficient in debugging and fixing errors.",
    items: [
      {
        company: "General Diagnostics International Pvt. Ltd.",
        position: "Software Developer",
        duration: "Nov 2023 - Present"
      }
    ]

  };

const Resume = () => {
    return(
        <div>Resume</div>
    );
}

export default Resume