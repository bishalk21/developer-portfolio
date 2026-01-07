import notToDo1 from "../../assets/img/projects/not-to-do-1.png";
import notToDo2 from "../../assets/img/projects/not-to-do-2.png";
import procrasteNoMore1 from "../../assets/img/projects/procraste-no-more-register.png";
import procrasteNoMore2 from "../../assets/img/projects/procraste-no-more-logged-in.png";
export const projectsData = [
  {
    id: 1,
    image: notToDo1,
    transitionImage: notToDo2,
    title: "Not To Do App",
    description:
      "A full-stack web application to help users manage their habits by creating a list of things they should avoid doing.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    codeLink: "https://github.com/bishalk21/FS-not-to-do-app",
    liveLink: "https://not-to-do-list-app.herokuapp.com/",
  },
  {
    id: 2,
    image: procrasteNoMore1,
    transitionImage: procrasteNoMore2,
    title: "Procraste No More",
    description:
      "A full-stack web application designed to help users overcome procrastination by managing tasks and tracking productivity.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Chakra UI"],
    codeLink: "https://github.com/bishalk21/procras-no-more",
    liveLink: "https://procras-no-more-frontend.vercel.app/",
  },
];
