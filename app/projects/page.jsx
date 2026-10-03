"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Game",
    title: "UEFA Fantasy SDK",
    description:
      "Built an Android SDK powering Fantasy Football inside the official UEFA Gaming app. Fans pick Champions League squads, manage transfers within budget, and score points from real match performances across UEFA competitions.",
    stack: [
      { name: "Android" },
      { name: "Kotlin" },
      { name: "Jetpack Compose" },
      { name: "SDK" },
    ],
    image: "/assets/work/uefa_fantasy.jpg",
    live: "https://play.google.com/store/apps/details?id=com.uefa.eurofantasy&hl=en_US",
    github: "",
  },
  {
    num: "02",
    category: "Game",
    title: "UEFA More or Less SDK",
    description:
      "Developed the More or Less SDK experience for UEFA Gaming, where players compare footballer stats head-to-head and decide who ranks higher or lower across Champions League and Women's Champions League knowledge challenges.",
    stack: [
      { name: "Android" },
      { name: "Kotlin" },
      { name: "Jetpack Compose" },
      { name: "SDK" },
    ],
    image: "/assets/work/uefa_more_or_less.jpg",
    live: "https://play.google.com/store/apps/details?id=com.uefa.eurofantasy&hl=en_US",
    github: "",
  },
  {
    num: "03",
    category: "Game",
    title: "UEFA Trivia SDK",
    description:
      "Implemented the Trivia SDK game for UEFA Gaming with daily quizzes that test fans on UEFA Champions League knowledge, delivering engaging fan-engagement gameplay within the official UEFA app.",
    stack: [
      { name: "Android" },
      { name: "Kotlin" },
      { name: "Jetpack Compose" },
      { name: "SDK" },
    ],
    image: "/assets/work/uefa_trivia.jpg",
    live: "https://play.google.com/store/apps/details?id=com.uefa.eurofantasy&hl=en_US",
    github: "",
  },
  {
    num: "04",
    category: "Game",
    title: "Women Superleague Fantasy SDK",
    description:
      "Built the Fantasy SDK for Barclays Women's Super League and WSL2, enabling fans to draft squads, manage transfers, use boosters, and compete on leaderboards inside the official WSL Football app.",
    stack: [
      { name: "Android" },
      { name: "Kotlin" },
      { name: "Jetpack Compose" },
      { name: "SDK" },
    ],
    image: "/assets/work/wslf.jpg",
    live: "https://play.google.com/store/apps/details?id=com.wslfootball.app&hl=en_US",
    github: "",
  },
  {
    num: "05",
    category: "Fintech",
    title: "Spare8 App",
    description:
      "Digital gold savings and investment app that lets users buy certified 24K gold from ₹10, automate SIPs, lease gold for returns, and withdraw anytime with instant UPI redemption.",
    stack: [
      { name: "Android" },
      { name: "Kotlin" },
      { name: "Jetpack Compose" },
      { name: "Firebase" },
    ],
    image: "/assets/work/spare8.jpg",
    live: "https://play.google.com/store/apps/details?id=com.spare8&hl=en_US",
    github: "",
  },
  {
    num: "06",
    category: "Healthcare",
    title: "Plutogenix App",
    description:
      "Android app for Plutogenix veterinary diagnostics, helping veterinarians and clinics book breed-specific tests, track samples in real time, manage payments, and access digital reports securely.",
    stack: [
      { name: "Android" },
      { name: "Kotlin" },
      { name: "Jetpack Compose" },
      { name: "Firebase" },
    ],
    image: "/assets/work/plutogenix.jpg",
    live: "https://play.google.com/store/apps/details?id=com.gdlab.pluto_genix_franchise&hl=en_US",
    github: "",
  },
  {
    num: "07",
    category: "Healthcare",
    title: "GD Sales App",
    description:
      "Sales force mobile app for General Diagnostics International, supporting field and partner workflows to grow diagnostics business operations with a streamlined Android experience.",
    stack: [
      { name: "Android" },
      { name: "Kotlin" },
      { name: "Jetpack Compose" },
      { name: "Firebase" },
    ],
    image: "/assets/work/gd_sales.jpg",
    live: "https://play.google.com/store/apps/details?id=com.gd.salsforce&hl=en_US",
    github: "",
  },
  {
    num: "08",
    category: "Healthcare",
    title: "GD Care App",
    description:
      "Consumer healthcare companion for booking diagnostic tests and health check-up packages from home, tracking booking status, and receiving digital reports within hours through General Diagnostics.",
    stack: [
      { name: "Android" },
      { name: "Kotlin" },
      { name: "Jetpack Compose" },
      { name: "Firebase" },
    ],
    image: "/assets/work/gd_care.jpg",
    live: "https://play.google.com/store/apps/details?id=com.gd.gdcare&hl=en_US",
    github: "",
  },
  {
    num: "09",
    category: "Frontend",
    title: "B Fit",
    description:
      "B Fit provides daily workout routines for all your main muscle groups. In just a few minutes a day, you can build muscles and keep fitness at home without having to go to the gym. This application is available on playstore.",
    stack: [
      { name: "Android" },
      { name: "Kotlin" },
      { name: "XML" },
      { name: "Firebase" },
    ],
    image: "/assets/work/bfit.jpg",
    live: "https://play.google.com/store/apps/details?id=com.prathameshkumbhar.bfit&hl=en_US",
    github: "https://github.com/PrathameshKumbhar291113/B-Fit",
  },
  {
    num: "10",
    category: "Android Library",
    title: "Material X",
    description:
      "Created Material X, an Android UI library with customizable dialog boxes and pickers. Integrated Motion Sync for synchronized component movement with phone tilt, enhancing user interaction.",
    stack: [
      { name: "Android" },
      { name: "Kotlin" },
      { name: "Jetpack Compose" },
      { name: "XML" },
    ],
    image: "/assets/work/materialx.jpg",
    live: "https://jitpack.io/#PrathameshKumbhar291113/MaterialX/1.0.4",
    github: "https://github.com/PrathameshKumbhar291113/MaterialX",
  },
  {
    num: "11",
    category: "Fullstack",
    title: "Cradle Care",
    description:
      "Cradle Care, our AI-powered pregnancy app, provides personalized, proactive guidance to ensure the health and well-being of both mother and child. Designed to fill gaps in traditional healthcare, Cradle Care makes expert advice accessible anytime, anywhere.",
    stack: [
      { name: "Android" },
      { name: "Kotlin" },
      { name: "KTOR" },
      { name: "Postgre Sql" },
    ],
    image: "/assets/work/cradlecare.jpg",
    live: "https://github.com/PrathameshKumbhar291113/Cradle-Care",
    github: "https://github.com/PrathameshKumbhar291113/Cradle-Care-Backend",
  },
  {
    num: "12",
    category: "Frontend",
    title: "Crop Bit",
    description:
      "Crop-Bit is an app providing weather forecasts, crop disease detection, and fertilizer recommendations to enhance farming efficiency. With its integrated chatbot, Crop-Bit ensures farmers receive timely advice and support for optimal crop management.",
    stack: [
      { name: "Android" },
      { name: "Kotlin" },
      { name: "Kotlin" },
      { name: "Firebase" },
    ],
    image: "/assets/work/cropbit.jpg",
    live: "https://github.com/PrathameshKumbhar291113/CropBit",
    github: "https://github.com/PrathameshKumbhar291113/CropBit",
  },
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center 
      py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div
          className="flex flex-col xl:flex-row 
        xl:gap-[30px]"
        >
          <div
            className="w-full xl:w-[75%] xl:h-[460px] 
          flex flex-col xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div
                className="text-7xl xl:text-8xl leading-none font-extrabold
               text-transparent text-outline"
              >
                {project.num}
              </div>
              <h2
                className="text-[45px] xl:text-[46px] font-bold leading-none
               text-white group-hover:text-accent 
               transition-all duration-500 capitalize"
              >
                {project.title}
              </h2>

              <h3
                className="text-[32px] xl:text-[38px] font-bold leading-none
               text-white group-hover:text-accent 
               transition-all duration-500 capitalize"
              >
                {project.category}
                {!/(library|sdk game)/i.test(project.category) ? "" : ""}
              </h3>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[25%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center rounded-4xl bg-pink/20 ">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full rounded-xl bg-black/10 z10"></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={`${project.title} project screenshot`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 
              bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 
              w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary 
              text-[22px] w-[44px] h-[44px] rounded-xl flex justify-center 
              items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
        <div className="mb-8 xl:mb-16"></div>
      </div>
    </motion.section>
  );
};

export default Project;
