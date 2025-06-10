const projects = [
  {
    name: "FileFlow Organizer",
    description: "Next.js/TypeScript web app for cloud file management and sharing, offering secure Firebase cloud storage:contentReference[oaicite:3]{index=3}.",
    repoUrl: "https://github.com/lokeshkavisth/FileFlow",
    demoUrl: "https://fileflow.vercel.app",
    image: "/projects/fileflow_demo.webp",
    imgUrl: "public/main_assets/Projects/Demo.png",
    tags: ["Next.js", "TypeScript", "React", "Firebase", "Tailwind CSS"],
    wip: false
  },
  {
    name: "FitNest",
    description: "Web app tracking student athletes' health and fitness data and relaying results to coaches for tailored training regimens:contentReference[oaicite:4]{index=4}.",
    repoUrl: "https://github.com/hp01674/FitNest",
    demoUrl: "#",
    image: "/projects/fitnest_demo.webp",
    imgUrl: "public/main_assets/Projects/Demo.png",
    tags: ["JavaScript", "HTML", "CSS"],
    wip: false
  },
  {
    name: "EasySpeak",
    description: "Full-stack language-learning platform with a .NET/C# backend and Angular frontend, enabling real-time chat, lesson scheduling, and interactive calls.",
    repoUrl: "https://github.com/BinaryStudioAcademy/bsa-winter-2022-2023-easyspeak",
    demoUrl: "https://bsa-easyspeak.westeurope.cloudapp.azure.com",
    image: "/projects/easyspeak_demo.webp",
    imgUrl: "public/main_assets/Projects/Demo.png",
    tags: [".NET", "C#", "Angular", "SignalR", "RabbitMQ", "MS SQL", "Azure", "Docker"],
    wip: false
  },
  {
    name: "SmartLocal",
    description: "Community skill-exchange platform connecting local users for service and resource sharing via geolocation and real-time messaging.",
    repoUrl: "#",
    demoUrl: "#",
    image: "/projects/smartlocal_demo.webp",
    imgUrl: "public/main_assets/Projects/Demo.png",
    tags: ["React", "Node.js", "MongoDB", "Firebase"],
    wip: true
  },
  {
    name: "Work3",
    description: "Online publication on the future of work and AI trends, with weekly articles and guides for career development.",
    repoUrl: "#",
    demoUrl: "https://wrk3.beehiiv.com",
    image: "/projects/work3_demo.webp",
    imgUrl: "public/main_assets/Projects/Demo.png",
    tags: ["Next.js", "Tailwind CSS", "Markdown"],
    wip: false
  },
  {
    name: "MindEase",
    description: "Personal mental health assistant web app providing instant support and coping strategies, built with Django and React:contentReference[oaicite:5]{index=5}.",
    repoUrl: "https://github.com/puneetmpatil/SNLP-Project",
    demoUrl: "#",
    image: "/projects/mindease_demo.webp",
    imgUrl: "public/main_assets/Projects/Demo.png",
    tags: ["Django", "React", "Python", "JavaScript"],
    wip: false
  }
];

export const getProjects = async () => {
  return projects;
};
