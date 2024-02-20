// Work.js

import Work from "./Work";

const projects = [
    {
        title: "weather-dashboard",
        link: "https://github.com/rashid-subhani/weather-dashboard",
        imgSrc: "/weather.jpg",
        description: "A responsive weather dashboard that provides real-time weather information, featuring dynamic data fetching and a user-friendly interface."
    },
    {
        title: "team-profile-generator",
        link: "https://github.com/rashid-subhani/team--profile-generator",
        imgSrc: "/team-sample.png",
        description: "Empower's team identity with Team profile generator. A user friendly tool designed for quick and concise team introductions."
    },
    {
        title: "work-day-schedular",
        link: "https://github.com/rashid-subhani/work-day-schedular",
        imgSrc : "/shedular.jpg",
        description : "A productivity-enhancing application designed to help users organize and optimize their work day."
    }
]

function WorkPage() {
  return (
   <div>
    <h1>My work</h1>
    {projects.map(project => <Work title ={project.title} link={project.link} imageSrc={project.imgSrc} description={project.description}  key={project.title}/>)}
   </div>
  );
}

export default WorkPage;
