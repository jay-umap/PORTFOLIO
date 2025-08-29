// components/ExperienceWithGallery.jsx
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import profile from "/assets/profile.png";
import A from "/assets/scroll/A.jpg";
import B from "/assets/scroll/B.jpg";
import C from "/assets/scroll/C.jpg";
import D from "/assets/scroll/D.jpg";
import E from "/assets/scroll/E.jpg";
import F from "/assets/scroll/F.jpg";
import G from "/assets/scroll/G.jpg";
import H from "/assets/scroll/H.jpg";
import I from "/assets/scroll/I.jpg";

const experiences = [
  {
    title: "UI/UX Intern",
    date: "June 2025 - July 2025",
    role: "Revat Network · Internship",
    project: "Poject: Design LMS for Admin/Student.",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    date: "June 2025 - July 2025",
    role: "Edunet Foundation · Internship",
    project: "Poject: Employee Salary Prediction.",
  },
  {
    title: "Artificial Intelligence & Data Analytics",
    date: "Apr 2025 - Apr 2025",
    role: "Edunet Foundation · Internship",
    project: "Poject: Forest Fire Detection Using Deep Learning.",
  },

  {
    title: "Artificial Intelligence & Data Analytics",
    date: "Feb 2025 - March 2025",
    role: "Edunet Foundation · Internship",
    project: "Poject: Chatbot Using NLP.",
  },

  {
    title: "Modern Web Application with MERN Stack",
    date: "Feb 2025 - March 2025",
    role: "Edunet Foundation · Internship",
    project: "Poject: Project Management Tool.",
  },

  {
    title: "Cyber Security",
    date: "Jan 2025 - Feb 2025",
    role: "Edunet Foundation · Internship",
    project:
      "Poject: Stegomedia- Secure data hiding in images using steganography.",
  },

  {
    title: "Creators of metaverse",
    date: "Sep 2023 - Mar 2024",
    role: "Metaverse · Student Program",
    project: "Project: AR filter for instagram",
  },
  {
    title: "Python & DJango",
    date: "June 2023 - July 2023",
    role: "Anishree Technologies LLP · Internship",
  },
  {
    title: "Programming Language (Python)",
    date: "Apr 2023 - June 2023",
    role: "PHN Technology Pvt Ltd · Internship",
  },
];

// Replace with your real images
const galleryImages = [profile, A, B, C, D, E, F, G, H, I];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 bg-black text-white">
      <h2 className="text-2xl font-bold mb-6 text-white">
        {" "}
        Experience {/* <span className="text-gray-400">03 Years</span> */}{" "}
      </h2>
      {/* Make left smaller, right bigger */}
      {/* GRID LAYOUT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
        {/* LEFT COLUMN - Experience Timeline (scroll clipped) */}
        <div className="h-[600px] overflow-hidden">
          {" "}
          {/* 👈 wrapper fixes the clip */}
          <motion.div
            className="w-full"
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 50, // adjust speed here
              ease: "linear",
            }}
          >
            {/* Duplicate experiences for seamless loop */}
            {[...experiences, ...experiences].map((exp, index) => (
              <div
                key={index}
                className="mb-8 relative group pl-8 border-l border-gray-700"
              >
                {/* Timeline Dot */}
                <span
                  className="absolute left-0 top-5 -translate-x-1/2 w-4 h-4 
                     bg-gray-700 rounded-full border-2 border-gray-900 
                     group-hover:border-green-400 transition"
                ></span>

                {/* Card */}
                <Card className="bg-gradient-to-r from-[#111] to-gray-900 border border-gray-800 shadow-md flex transition group-hover:border-green-400">
                  <CardContent className="p-4 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-400">{exp.date}</p>
                    <p className="text-sm text-gray-500">{exp.role}</p>
                    <p className="text-sm text-gray-500">{exp.project}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN - Infinite Vertical Galleries */}
        <div className="grid grid-cols-3 gap-4 overflow-hidden rounded-2xl h-[600px]">
          {[0, 1, 2].map((col) => (
            <motion.div
              key={col}
              className="flex flex-col gap-4"
              animate={{
                y: col === 1 ? ["-50%", "0%"] : ["0%", "-50%"], // middle column downward, others upward
              }}
              transition={{
                repeat: Infinity,
                duration: col % 2 === 0 ? 25 : 35, // alternate speeds
                ease: "linear",
              }}
            >
              {[...galleryImages, ...galleryImages].map((src, i) => {
                let imgHeight;
                if (col === 0) imgHeight = i % 2 === 0 ? "h-80" : "h-56";
                else if (col === 1) imgHeight = i % 2 === 0 ? "h-72" : "h-60";
                else imgHeight = i % 2 === 0 ? "h-48" : "h-64";

                return (
                  <img
                    key={`${col}-${i}`}
                    src={src}
                    alt={`gallery-${col}-${i}`}
                    className={`w-full object-cover rounded-xl ${imgHeight}`}
                  />
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
