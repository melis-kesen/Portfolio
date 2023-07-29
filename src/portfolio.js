import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 
import nimation from "./assets/lottie/codingPerson"; 

const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 
};


const illustration = {
  animated: true 
};

const greeting = {
  username: "Melis Kesen",
  title: "MELIS KESEN",
  subTitle: emoji(
    "Software Developer"
  ),
  animation: nimation,
  resumeLink:
    "hey", 
  displayGreeting: true 
};


const socialMediaLinks = {
  github: "https://github.com/melis-kesen",
  linkedin: "https://www.linkedin.com/in/meliskesen/",
  gmail: "meliskesen@gmail.com",
  display: true 
};

const skillsSection = {
  title: "Skills",
  subTitle: "",
  skills: [
    emoji(
      ""
    ),
    emoji(""),
    emoji(
      ""
    )
  ],

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fas fa-c-plus-plus"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fas fa-c"
    },
  ],
  display: true
};


const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "İstanbul Technical University",
      logo: require("./assets/images/itu.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2021 - April 2022",
      desc: "Took courses about Software Engineering, Algorithm Analysis, Data Structure, Operating Systems, ...",
    },
    {
      schoolName: "Yıldız Technical University",
      logo: require("./assets/images/ytu.png"),
      subHeader: "Bachelor of Science in Mechatronics Engineering",
      duration: "September 2016 - April 2021",
      desc: "Ranked 2nd in the program",
      descBullets: ["TUBITAK 2242", "MEKON"]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "90%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};


const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Software Engineer",
      company: "Turkish Aerospace",
      companylogo: require("./assets/images/tai.jpg"),
      date: "Aug 2021 – Present",
      desc: "Full Stack Development",
      /*descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
      role: "Assistant Engineer",
      company: "Turkish Aerospace",
      companylogo: require("./assets/images/tai.jpg"),
      date: "Apr 2021 – Aug 2021",
      desc: "MGP Program"
    },
    {
      role: "Project Student",
      company: "B/S/H/",
      companylogo: require("./assets/images/bsh.jpg"),
      date: "Sep 2020 – Apr 2021",
      desc: "Data Science Project"
    }
  ]
};

const openSource = {
  showGithubProfile: "true", 
  display: true 
};

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "TÜBİTAK 2242",
      subtitle:
        "TÜBİTAK 2242",
      image: require("./assets/images/tubitak.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        {
          name: "Award Letter",
          url: ""
        },
        {
          name: "Google Code-in Blog",
          url: ""
        }
      ]
    },
    {
      title: "C/C++ Programming Language",
      subtitle:
        "C/C++ Programming Language",
      image: require("./assets/images/tubitak.jpg"),
      imageAlt: "",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: ""
        }
      ]
    },

    {
      title: "Data Science Orientation",
      subtitle: "Data Science Orientation",
      image: require("./assets/images/tubitak.jpg"),
      imageAlt: "",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: true 
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
};


const isHireable = true; 

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  contactInfo,
  isHireable
};
