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
    "../../assets/resume.pdf", 
  displayGreeting: true 
};


const socialMediaLinks = {
  github: "https://github.com/melis-kesen",
  linkedin: "https://www.linkedin.com/in/meliskesen/",
  gmail: "meliskesen@gmail.com",
  display: true 
};

const skillsSection = {
  title: "About",
  subTitle: "A passionate software developer",
  skills: [
    emoji(
      "Skills"
    ),
    emoji(""),
    emoji(
      ""
    )
  ],

  softwareSkills: [
    {
      skillName: "c++",
      fontAwesomeClassname: require("./assets/images/cpp.png")
    },
    {
      skillName: "c",
      fontAwesomeClassname: require("./assets/images/c.png")
    },
    {
      skillName: "python",
      fontAwesomeClassname: require("./assets/images/python.png")
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: require("./assets/images/js.png")
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: require("./assets/images/nodejs.png")
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: require("./assets/images/react.png")
    },
    {
      skillName: "vscode",
      fontAwesomeClassname: require("./assets/images/visual-studio.png")
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: require("./assets/images/gitlab.png")
    },
    {
      skillName: "jira",
      fontAwesomeClassname: require("./assets/images/jira.png")
    },
    {
      skillName: "confluence",
      fontAwesomeClassname: require("./assets/images/confluence.png")
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
    "Achievements and certifications that i have done",

  achievementsCards: [
    {
      title: "TÜBİTAK 2242",
      subtitle:
        "TÜBİTAK 2242 University Students Research Project Competition, 1st place, September 2021 ",
      image: "",
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Analysis, Modeling And Control of Drivers Behaviour In Semi-Self Driving Cars",
          url: ""
        },
        {
          name: "Journal",
          url: ""
        },
        {
          name: "Final Project",
          url: ""
        }
      ]
    },
    {
      title: "C & System Programmers Association",
      subtitle:
        "C/C++ Programming Language",
      image: "",
      imageAlt: "",
      footerLink: [
        {
          name: "C Programming Language Certificate (160 hours)",
          url: ""
        }
      ]
    },

    {
      title: "TOK'2019",
      subtitle: "Publication 21. Automatic Control Turkish National Committee TOK 2019",
      image: "",
      imageAlt: "",
      footerLink: [
        {
          name: "Microrobot Motion Control in Liquid Media",
          url: ""
        },
        {
          name: "Increasing Lateral Forces of Microrobot Using Passive Diamagnetic Levitation",
          url: ""
        },
        {name: "Best oral presentation 2nd prize", url: ""},
       
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
