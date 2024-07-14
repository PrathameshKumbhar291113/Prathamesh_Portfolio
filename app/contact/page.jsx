"use client"; // Add this directive at the top of your component file

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 9082379158",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "prathameshkumbhar291113@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Navi Mumbai, Maharashtra - 400705",
  },
];

const Contact = () => {
  const [state, handleSubmit] = useForm("myzgzjwz");

  if (state.succeeded) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6">
        <div className="container mx-auto flex flex-col items-center">
          <div className="max-w-lg w-full bg-white/10 rounded-xl border border-accent p-6 mb-6 flex items-center space-x-4">
            <div className="text-accent text-3xl">
              <FaCheckCircle />
            </div>
            <p className="text-center text-accent">
              Thanks for contacting me! I will get back to you soon.
            </p>
          </div>

          <div className="flex flex-col xl:flex-col gap-6 mt-5">
            {info.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 xl:w-16 xl:h-16
                 bg-[#27272c] text-accent rounded-xl 
                 flex items-center justify-center">
                  <div className="text-xl xl:text-2xl">{item.icon}</div>
                </div>
                <div className="flex flex-col">
                <p className="text-white/60 text-sm xl:text-xl">
                      {item.title}
                    </p>
                    <p className="text-white text-sm xl:text-xl">
                      {item.description}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-2xl xl:text-4xl text-accent">
              Let&apos;s Work Together
              </h3>
              <p className="text-white/60 text-sm xl:text-md">
                Please complete the form below to get in touch with me.
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                  required
                />
                <Input
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  required
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
              </div>

              {/* Select */}
              <Select name="service" required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Mobile App Development">
                      Mobile App Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Poster Design">Poster Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Textarea */}
              <Textarea
                id="message"
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              {/* Button */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  size="md"
                  className="w-full md:w-1/2 h-12"
                  disabled={state.submitting}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-sm xl:text-xl">
                      {item.title}
                    </p>
                    <p className="text-white text-sm xl:text-xl">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
