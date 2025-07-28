// Skills Section Logo's
import htmlLogo from "./../assets/tech_logo/html.png";
import cssLogo from "./../assets/tech_logo/css.png";
import javascriptLogo from "./../assets/tech_logo/javascript.png";
import reactjsLogo from "./../assets/tech_logo/reactjs.png";
import reduxLogo from "./../assets/tech_logo/redux.png";
import tailwindcssLogo from "./../assets/tech_logo/tailwindcss.png";
import nodejsLogo from "./../assets/tech_logo/nodejs.png";
import expressjsLogo from "./../assets/tech_logo/express.png";
import mysqlLogo from "./../assets/tech_logo/mysql.png";
import mongodbLogo from "./../assets/tech_logo/mongodb.png";
import firebaseLogo from "./../assets/tech_logo/firebase.png";
import cLogo from "./../assets/tech_logo/c.png";
import cppLogo from "./../assets/tech_logo/cpp.png";
import javaLogo from "./../assets/tech_logo/java.png";
import pythonLogo from "./../assets/tech_logo/python.png";
import typescriptLogo from "./../assets/tech_logo/typescript.png";
import gitLogo from "./../assets/tech_logo/git.png";
import githubLogo from "./../assets/tech_logo/github.png";
import vscodeLogo from "./../assets/tech_logo/vscode.png";
import postmanLogo from "./../assets/tech_logo/postman.png";
import mcLogo from "./../assets/tech_logo/mc.png";
import vercelLogo from "./../assets/tech_logo/vercel.png";
import postgreLogo from "./../assets/tech_logo/postgre.png";
import numpyLogo from "./../assets/tech_logo/numpyLogo.png";
import pandasLogo from "./../assets/tech_logo/pandasLogo.png";
import sklearnLogo from "./../assets/tech_logo/scikitLearnLogo.png";
import pytorchLogo from "./../assets/tech_logo/PyTorch.png";
import matplotlibLogo from "./../assets/tech_logo/matplotlib.png";
import seabornLogo from "./../assets/tech_logo/seaborn.png";
import huggingfaceLogo from "./../assets/tech_logo/hf-logo.png";
import opencvLogo from "./../assets/tech_logo/OpenCV.png";
import colabLogo from "./../assets/tech_logo/colab.png";
import fastapiLogo from "./../assets/tech_logo/fastapi.png";
import flaskLogo from "./../assets/tech_logo/flask.png";
import amritaLogo from "./../assets/education_logo/amrita.png";
import apsLogo from "./../assets/education_logo/aps.jpg";
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },

  {
    title: "Machine Learning",
    skills: [
      { name: "NumPy", logo: numpyLogo },
      { name: "Pandas", logo: pandasLogo },
      { name: "Scikit-Learn", logo: sklearnLogo },
      { name: "PyTorch", logo: pytorchLogo },
      { name: "Matplotlib", logo: matplotlibLogo },
      { name: "Seaborn", logo: seabornLogo },
      { name: "Hugging Face", logo: huggingfaceLogo },
      { name: "OpenCV", logo: opencvLogo },
      { name: "Google Colab", logo: colabLogo },
      { name: "FastAPI", logo: fastapiLogo },
      { name: "Flask", logo: flaskLogo },
    ],
  },
];

// Stats Section Data
export const stats = [
  { key: "cgpa", label: "Current CGPA", target: 8.57, suffix: "" },
  { key: "technologies", label: "Technologies", target: 15, suffix: "+" },
  { key: "projects", label: "Projects Built", target: 10, suffix: "+" },
  { key: "certifications", label: "Certifications", target: 3, suffix: "+" },
];

// Projects Section Data
export const projects = [
  {
    id: 0,
    title: "Helpdesk Ticket Manager",
    description:
      "AI-powered ticket system with auto-categorization, priority setting, LLM summaries, and event-driven backend using Inngest.",
    image: "", // Add your image
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Inngest", "Google Gemini"],
    github: "https://github.com/your-username",
    webapp: "https://your-deployment-link",
  },
  {
    id: 1,
    title: "Real-Time Chat App",
    description:
      "A full-featured chat platform supporting DMs, media sharing, online status, and secure JWT authentication.",
    image: "",
    tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "Socket.IO"],
    github: "https://github.com/your-username",
    webapp: "https://your-deployment-link",
  },
  {
    id: 2,
    title: "Decentralized Health Record Sharing",
    description:
      "A blockchain-style system allowing secure, patient-controlled sharing of medical records with hospitals and doctors.",
    image: "",
    tags: ["React", "JavaScript", "Tailwind", "Vite", "Web3"],
    github: "https://github.com/your-username",
    webapp: "https://your-deployment-link",
  },
  {
    id: 3,
    title: "Health Companion App",
    description:
      "An assistive tool for disabled individuals with voice-enabled features, smart alerts, and emergency contacts.",
    image: "",
    tags: ["React", "JavaScript", "Accessibility", "Voice UI"],
    github: "https://github.com/your-username",
    webapp: "https://your-deployment-link",
  },
  {
    id: 8,
    title: "StreamTweet (YouTube + Social Feed)",
    description:
      "Video platform with uploads, subscriptions, and social tweet-style posts. Includes secure JWT auth and media management.",
    image: "",
    tags: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    github: "https://github.com/your-username",
    webapp: "https://your-deployment-link",
  },
  {
    id: 4,
    title: "FinCortex – Financial Causality Detection",
    description:
      "Deep learning system using BiLSTM with attention for cause-effect inference in financial texts, with real-time analysis UI.",
    image: "",
    tags: ["Python", "PyTorch", "Flask", "React", "BiLSTM", "NLP"],
    github: "https://github.com/your-username",
    webapp: "https://your-deployment-link",
  },
  {
    id: 5,
    title: "Smart CCTV Surveillance System",
    description:
      "Motion-triggered surveillance with YOLOv8 for intrusion detection, alerting via NodeMCU and Twilio SMS.",
    image: "",
    tags: ["Python", "OpenCV", "YOLOv8", "Flask", "Twilio", "IoT"],
    github: "https://github.com/your-username",
    webapp: "https://your-deployment-link",
  },
  {
    id: 6,
    title: "EEG-Based IDD Detection",
    description:
      "ChronoNet-based model for diagnosing developmental disorders from EEG signals with 98.33% accuracy.",
    image: "",
    tags: ["Python", "PyTorch", "EEG", "ChronoNet", "Signal Processing"],
    github: "https://github.com/your-username",
    webapp: "https://your-deployment-link",
  },
  {
    id: 7,
    title: "3D Brain Tumor Segmentation",
    description:
      "Used 3D U-Net with FPN to segment brain tumors from MRI scans, handling data imbalance with custom loss function.",
    image: "",
    tags: ["Python", "PyTorch", "FPN", "3D U-Net", "Medical Imaging"],
    github: "https://github.com/your-username",
    webapp: "https://your-deployment-link",
  },
];

export const education = [
  {
    id: 0,
    img: amritaLogo,
    school: "Amrita Vishwa Vidyapeetham, Coimbatore",
    date: "Oct 2022 – Jul 2026",
    grade: "8.57 CGPA",
    desc: "Pursuing B.Tech in Computer Science and Engineering (Artificial Intelligence). Courses include Machine Learning, Deep Learning, Computer Vision, Data Structures, NLP, and Blockchain. Involved in multiple research-level projects and national hackathons.",
    degree:
      "B.Tech in Computer Science and Engineering – Artificial Intelligence",
  },
  {
    id: 1,
    img: apsLogo,
    school: "Army Public School, Lucknow",
    date: "Mar 2021 – Mar 2022",
    grade: "Class 12: 85%",
    desc: "Completed Senior Secondary education under CBSE with PCM and Computer Science. Developed strong fundamentals in mathematics and programming.",
    degree: "CBSE (XII) – PCM with Computer Science",
  },
  {
    id: 2,
    img: apsLogo,
    school: "Army Public School, Lucknow",
    date: "Mar 2019 – Mar 2022",
    grade: "Class 10: 88.4%",
    desc: "Completed Secondary education under CBSE board with focus on Science and Computer Applications.",
    degree: "CBSE (X) – Science with Computer Applications",
  },
];
