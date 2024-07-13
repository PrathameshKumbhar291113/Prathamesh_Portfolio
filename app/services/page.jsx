"use client";

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link";
import { motion } from "framer-motion";


const services = [
  { num: "01", title: "Android Development", description: "Harness the power of Android with cutting-edge development tailored to your unique vision. I specialize in creating intuitive, high-performance applications that engage users and drive business growth. From initial concept to final deployment, I ensure a seamless, user-friendly experience optimized for the latest Android devices.", href: "https://play.google.com/store/apps/details?id=com.prathameshkumbhar.bfit&hl=en_US" },
  { num: "02", title: "UI/UX Design", description: "Design is more than just aesthetics; it's about creating experiences that delight and retain users. I specialize in UI/UX design that prioritizes usability, accessibility, and user satisfaction. Through meticulous research, wireframing, prototyping, and testing, I create interfaces that are both beautiful and functional, ensuring your users enjoy a seamless interaction with your product.", href: "https://www.figma.com/design/SsD0V1GOPwqYcO6iQHD3eL/fitverse?node-id=0-1&t=m4uuejHJOyO9sOsE-1" },
  { num: "03", title: "Web Development", description: "Empower your online presence with responsive, scalable, and visually appealing websites. My expertise in web development spans front-end and back-end solutions, utilizing modern frameworks and technologies. Whether you need an e-commerce platform, a corporate site, or a personal blog, I deliver websites that are fast, secure, and easy to navigate.", href: "https://github.com/PrathameshKumbhar291113" },
  { num: "04", title: "Poster Design", description: "Make a statement with professionally designed posters that capture attention and communicate your message effectively. Whether for events, promotions, or informational purposes, my poster designs combine striking visuals with clear, compelling content. I ensure each design is tailored to your brand and purpose, helping you stand out and engage your audience.", href: "https://www.canva.com/design/DAGFwGLw-YU/qtkocuKuTjzZVE-c10Hn1A/view?utm_content=DAGFwGLw-YU&utm_campaign=designshare&utm_medium=link&utm_source=editor" },
];

const Services = () => {
    return (
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {service.num}
                    </div>
                    <Link
                      href={service.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-90"
                    >
                      <BsArrowDownRight className="text-primary text-3xl"/>
                    </Link>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                  <p className="text-white/60">{service.description}</p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
          </motion.div>
          <div className="mb-8 xl:mb-16"></div>
        </div>
      </section>
    );
}

export default Services;