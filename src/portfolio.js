/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mohamed Dicko",
  title: "Hi all, I'm DICKO Mohamed",
  subTitle: emoji(
    "IT INGENIEUR | Suivi & Évaluateur 🚀. Ingénieur en Ingénierie Systèmes informatiques (Option système d’information) motivé et dynamique, expert en développement Full Stack (MERN) et Solutions Cloud (AWS)."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MohaDicko",
  linkedin: "https://www.linkedin.com/in/mohamed-dicko-4a0885196",
  gmail: "Mohadicko95@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Analyse de données : Expertise en KoBo Collect et ODK Collect pour le suivi et l'évaluation"
    ),
    emoji(
      "⚡ Développer des interfaces utilisateur hautement interactives (React.js, Angular, Vue.js)"
    ),
    emoji(
      "⚡ Création de back-ends évolutifs et API RESTful (Node.js, Express.js, ASP.NET MVC)"
    ),
    emoji(
      "⚡ Solutions Cloud et Déploiement : AWS Certified Cloud Practitioner, Azure"
    ),
    emoji("⚡ Méthodologies Agile (Scrum), DevOps, et Tests Automatisés")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery  */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "ASP.NET",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Xamarin Forms",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SUP-MTI RABAT",
      logo: require("./assets/images/supmti-logo.webp"),
      subHeader: "Master 2 en informatique (Mentions)",
      duration: "2018 - 2023",
      desc: "Ingénierie Systèmes informatiques (Option système d’information).",
      descBullets: []
    },
    {
      schoolName: "IUGP-TALIBI",
      logo: require("./assets/images/talibi.jpg"),
      subHeader: "Licence en Informatique de gestion (Mentions)",
      duration: "2015 - 2018",
      desc: "Bamako, Mali",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Responsable opérations",
      company: "SAHEL FLEET - SAHEL Multi-Services",
      companylogo: require("./assets/images/sahel-multiservices-logo.jpg"),
      date: "27 Juillet 2025 – Actuellement",
      desc: "Bamako, Mali",
      descBullets: [
        "Gestion et suivi des solutions de géolocalisation et tracking GPS.",
        "Installation et paramétrage de dispositifs (Trackers).",
        "Assistance technique et formation des utilisateurs sur les outils de gestion de flotte.",
        "Suivi client et élaboration de rapports de performance (consommation, trajets, sécurité).",
        "Contribution au développement commercial (prospection, partenariats)."
      ]
    },
    {
      role: "Cloud Practitioner Engineer",
      company: "Orange Digital Center Mali",
      companylogo: require("./assets/images/odc-logo.png"),
      date: "27 Janvier – 27 Juillet 2025",
      desc: "Formation Cloud Computing AWS",
      descBullets: [
        "Préparation à la certification AWS Certified Cloud Practitioner (CLF-C02).",
        "Maîtrise des services clés : EC2, S3, RDS, Lambda, IAM, CloudFront.",
        "Bonnes pratiques de sécurité (IAM, chiffrement KMS) et surveillance des coûts (AWS Budgets)."
      ]
    },
    {
      role: "Développeur Web Fullstack Junior",
      company: "GOMYCODE RABAT BOOTCAMP",
      companylogo: require("./assets/images/gomycode-logo.webp"),
      date: "Mars 2024 – Juillet 2024",
      desc: "Maîtrise de la pile MERN",
      descBullets: [
        "Expertise MongoDB (NoSQL) et Express.js pour API RESTful.",
        "Développement d'interfaces dynamiques avec React.js.",
        "Construction de serveurs évolutifs avec Node.js."
      ]
    },
    {
      role: "Suivi et Évaluateur",
      company: "SUSTAINABLE OPPORTUNITY FOR RURAL ORGANISATIONS (SORO)",
      companylogo: require("./assets/images/developerActivity.svg"),
      date: "Juillet 2023 – Février 2024",
      desc: "Gestion de programme et analyse de données",
      descBullets: [
        "Surveillance continue des programmes pour garantir la conformité aux objectifs.",
        "Évaluation périodique des résultats avec méthodologies qualitatives et quantitatives.",
        "Collecte et analyse de données pour identifier les tendances et produire des rapports.",
        "Formation des équipes terrain sur les pratiques de suivi et évaluation."
      ]
    },
    {
      role: "Stage Front-End Developer",
      company: "Algo Consulting Rabat",
      companylogo: require("./assets/images/algo.webp"),
      date: "Mars 2021 – Juillet 2021",
      desc: "Création d'applications web et mobile pour le compte du groupe ALGO CONSULTING."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projets Récents",
  subtitle: "ENTREPRISES ET SOLUTIONS QUE J'AI CO-FONDÉES ET DÉVELOPPÉES",
  projects: [
    {
      image: require("./assets/images/sahel-multiservices-banner.png"),
      projectName: "Sahel MULTISERVICES",
      projectDesc:
        "Une entreprise multiservices offrant des solutions professionnelles variées pour répondre aux besoins du marché sahélien.",
      footerLink: [
        {
          name: "Visiter le site",
          url: "https://sahelmultiservices.com/"
        }
      ]
    },
    {
      image: require("./assets/images/gps-fleet-sahel-banner.png"),
      projectName: "GPS FLEET-SAHEL",
      projectDesc:
        "Solution avancée de géolocalisation et de gestion de flotte par tracking GPS, optimisée pour la sécurité et la performance.",
      footerLink: [
        {
          name: "Visiter le site",
          url: "https://gpsfleetsahel.com/"
        }
      ]
    },
    {
      image: require("./assets/images/rfa-logo.png"),
      projectName: "Assurance Voyage (RFA)",
      projectDesc:
        "Plateforme de souscription d'assurance voyage en ligne, simplifiant les démarches pour les voyageurs.",
      footerLink: [
        {
          name: "Visiter le site",
          url: "https://assurancedevoyage.ma/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "Cloud Computing Bootcamp - Orange Digital Center Mali",
      image: require("./assets/images/aws-practitioner.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "#"
        }
      ]
    },
    {
      title: "Postman API Fundamentals Student Expert",
      subtitle: ".",
      image: require("./assets/images/Postman.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://badgr.com/public/assertions/zlyqlQnqR9yS20RIe4QSOA"
        },
        {
          name: "Award Letter",
          url: "#"
        },
        {
          name: "Postman",
          url: "#"
        }
      ]
    },
    {
      title: "full stack web developer",
      subtitle: "GOMYCODE RABAT BOOTCAMP.",
      image: require("./assets/images/CERTIF gomycode.PNG"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View certificate",
          url: "#"
        }
      ]
    },

    {
      title: "Responsiv Web Design",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/freecodecamp.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/MDICKO/responsive-web-design"
        },
        {
          name: "Freecodecamp",
          url: "https://www.freecodecamp.org/certification/MDICKO/responsive-web-design"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

/* const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
}; */

// Talks Sections

/* const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
}; */

// Podcast Section

/* const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
}; */

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuter d'un projet ou simplement dire bonjour ? Ma boîte de réception est ouverte à tous.",
  number: "+223 74 13 20 32",
  email_address: "Mohadicko95@gmail.com"
};

// Twitter Section

/* const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};
 */
const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  bigProjects,
  achievementSection,
  /* blogSection, */
  /* talkSection, */
  /*  podcastSection, */
  contactInfo,
  /* twitterDetails, */
  isHireable,
  resumeSection
};
