// src/data.js

export const personalData = {
  // Ladning Page Information
  name: "Riad Rakan",
  title: "Computer Engineering Student | Embedded Systems & Software Developer",
  email: "rakanrriad@gmail.com",
  github: "https://github.com/Riad-Rakan",
  linkedin: "https://www.linkedin.com/in/riad-rakan/",
  about: "Computer engineering student focused on software, systems, and embedded development. Experience spans low-level C/C++, Linux, hardware-software integration, and game/simulation projects using Unity, Unreal, and Godot. Strong interest in building reliable systems end-to-end, from hardware and firmware to applications and infrastructure.",
  skills: ["React", "JavaScript", "CSS3", "Node.js", "Game Design", "UI/UX", "C, C++, Java, Python", "VHDL, Verilog"
            , "Linux (Debian), Bash", "Embedded systems", "Low-level programming", "Godot 4.x, Unity, Unreal Engine 5"
            , "MATLAB / Simulink"
  ],
  // Data Inserted into the Experience Sub-Section
  experience: [
    {
      id: 1,
      role: "Freelance Web Developer",
      company: "Self-Employed",
      date: "2025 - Present",
      desc: [
            "Design and develop responsive websites for small businesses in Montreal and the Greater Montreal Area. ",
            "Implement frontend using HTML, CSS, and JavaScript. ",
            "Develop backend features using Node.js and basic SQL. ",
            "Deploy and maintain sites on Linux servers, including domain and hosting setup. "
            ]
    },
    {
      id: 2,
      role: "Lead Hardware Engineer",
      company: "Early-Stage Technology Startup",
      date: "2025 - Present",
      desc: [
            "Lead hardware and firmware development for a wearable embedded system. ",
            "Design and implement firmware for low-power microcontrollers. ",
            "Develop and test sensor interfaces and data acquisition pipelines. ",
            "Work with Arduino-based prototypes and Nordic nRF platforms using nRF Connect SDK. ",
            "Focus on power management, reliability, and real-time data processing. "
            ]
    },
    {
      id: 3,
      role: "Co-Owner and Lead Technician",
      company: "Réparation Ordinateurs Laval",
      date: "2024 - Present",
      desc: [
            "Co-founded and operated a computer repair business in Laval. ",
            "Diagnose hardware failures and OS-level issues on desktops and laptops. ",
            "Perform component replacement, custom PC builds, and system upgrades. ",
            "Install and configure Windows and Linux systems, including drivers and firmware. ",
            "Resolve performance, boot, and stability issues. "
            ]

    },
    {
      id: 4,
      role: "Manager's Assistant",
      company: "UPS Store",
      date: "2023 - Present",
      desc: [
            "Handle shipping, receiving, and package processing operations. ",
            "Prepare domestic and international shipments and documentation. ",
            "Operate POS systems and manage customer transactions. ",
            "Assist with printing, scanning, and mailbox services. "
            ]
    },

  ],
  // Data Inserted into the Projects Sub-Section
  projects: [
    {
      id: 1,
      title: "Personal Protfolio",
      tech: "React & Three.js",
      desc: "A 3D interactive portfolio experience.",
      link: "https://github.com/Riad-Rakan/My-Portfolio"
    },
    {
      id: 2,
      title: "Beyond the Singularity",
      tech: "GoDot, C, Phython",
      desc: "A 2D space shooter game in development.",
      link: "https://github.com/Riad-Rakan"
    },
    {
      id: 3,
      title: "Kineplus Mesotherapy",
      tech: "React & CSS",
      desc: "A professional business website designed for a mesotherapy clinic to showcase services and patient information.",
      link: "https://github.com/Riad-Rakan/ck-kineplus"
    },
    {
      id: 4,
      title: "Autonomous Drone Firmware",
      tech: "C, Python & MATLAB",
      desc: "Developed custom flight controller firmware from the ground up, featuring autonomous navigation using GPS/IMU sensors and Unreal Engine simulations.",
      link: "https://github.com/Riad-Rakan/DroneProject" 
    },
    {
      id: 5,
      title: "Study Space Web App",
      tech: "React, Node.js & Firebase",
      desc: "A full-stack student platform featuring real-time chat, note sharing, and secure authentication using Firebase and Firestore.",
      link: "https://github.com/KaileeSantucci/SOEN341" 
    }
  ]
};