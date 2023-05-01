// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Guillaume",
  middleName: "",
  lastName: "Neirinckx",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/guiste10",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/guillaume.neirinckx",
    },
    {
      image: "fa-linkedin",
      url: " https://www.linkedin.com/in/guillaume-neirinckx/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../assets/img/moi.jpg"),
  imageSize: 375,
  message:
    "My name is Guillaume Neirinckx. I’m a graduate of 2020 from UCLouvain with a degree in Computer Sciences. I'm most passionate about solving problems, and my goal is to pursue this passion within the field of software engineering. In my free time I like running outside, playing tennis and working on personal IT projects.",
  resume: require("../assets/CV.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "guiste10", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["chessAi", "hera"],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "Typescript/Angular", value: 90 },
    { name: "Python", value: 80 },
    { name: "SQL", value: 80 },
    { name: "C", value: 70 },
    { name: "Erlang", value: 70 },
    { name: "HTML/CSS", value: 55 },
    { name: "Bash", value: 50 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you want to reach me, please feel free to email me at",
  email: "guiste10@gmail.com",
};

const experiences = {
  show: true,
  heading: "Work experience",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/centran.png'),
      date: 'November 2020 – September 2022',
    },
    {
      role: 'Professor',// Here Add Company Name
      companylogo: require('../assets/img/ephec.png'),
      date: 'September 2022 – Present',
    },  
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/arhs.png'),
      date: 'September 2022 – Present',
    },  
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
