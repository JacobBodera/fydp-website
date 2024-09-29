import {
  jacobProfile,
  overviewPic,
  wesProfile,
  josephProfile,
  calebProfile,
} from "../assets";

export const progressDataList = [
  {
    title: "Project Kickoff",
    date: "09-09-2024",
    content:
      "The project officially began with an initial presentation was given my the professors running the MTE481 project course. Key objectives and timelines were established, the following points were discussed:\n1. Project scope and deliverables\n2. Roles and responsibilities\n3. Initial milestones and deadlines\n4. Communication plan\n\nThe team was officially formed and some key responsibilities were discussed which involved assessing strengths of each teammate and assigning roles which most suited each member. These roles are subject to change but were generally assigned as follows:\n\nJacob: Web/app development, machine learning, data analytics.\nWesley: Backend development, app development, manufacturing\nJoseph: Project management, mechanical design, manufacturing\nCaleb: Computer vision, electronic design and fabrication",
  },
  {
    title: "Problem Definition",
    date: "16-09-2024",
    content:
      "The team researched some potential problem spaces and discussed the practicality of each. Each member provided their own interests regarding topics and techincal areas, and using these interests to narrow scope, some initial project ideas were discussed:\n\n- Mental Health Robot: a small desktop robot that could perform a variety of different functions such as schedule planning, analyze emotial state to provide assistance, and regulate balance between work and rest time.\n\n- Object Tracking Glasses: Glasses directed for the visually impaired, elderly, or people with memory impairment which automatically detects when an object is picked up and keeps track of where that object in placed. When looking for an item, the system can desribe the location of where that object was last seen.\n\n- Optimal Path AR Helmet: A helmet that contains a vision system and a heads-up-display that shows a commuter the optimal path through a group of people or obstacles. This is designed for people who use electronics bikes, scooters, skateboards, omniwheels to show them how to safely navigate their surrounding and show them important infromation while riding.",
  },
  {
    title: "Finalized Problem Space",
    date: "23-09-2024",
    content:
      "Discussed project ideas further and presented them to the project professors to get some feedback and thoughts on the feasibility of each. From the feedback recieved, the team decided to move forward with the object tracking system for individuals with visual and memory impairments, and the project overview was updated with this change. We brainstormed many different ways that this project can be implemented as well as all the possible functions that it could have relating to the problem space, and categorized them into constrains and criteria.",
  },
  {
    title: "Started Work on Preliminary Report",
    date: "25-09-2024",
    content:
      "With the project idea now finalized, the team was able to start working on some of the deliverables for the preliminary design report. This included creating a list of constraints and criteria, designing possible solutions for the problem, and researching patents. All of these tasks were divided among the team, with Jacob updating the website data and making it mobile accessible, Wesley and Joseph researching similar patents, Caleb creating a list of constraints and criteria. As well, everyone brainstormed a few viable options for how our idea could be implemented and listing some of the pros and cons for each.",
  },
];

export const memberInfoList = [
  {
    name: "Jacob Bodera",
    profile: jacobProfile,
    description:
      "Hello! My name is Jacob Bodera and I am in my final-year of Mechatronics Engineering Student. Throughout my undergraduate degree, I have been extremely interested in software development with a strong interest in fullstack development and machine learning. My previous experience includes web development & machine learning at Windscribe VPN, computer vision applications in soft robotics at the University of Guelph, and backend development and data analytics at Amazon Web Services. In my free time, I love going rockclimbing outdoors, playing games, and reading.",
    linkedinUrl: "https://www.linkedin.com/in/jacob-bodera-869938226/",
  },
  {
    name: "Wesley Kim",
    profile: wesProfile,
    description:
      "Hello, I’m Wesley and I am in my final year of Mechatronics Engineering at the University of Waterloo. Through my work experiences, I was able to explore web development. Aside from the technical skills, I also worked closely with Project Managers and UI/UX Designers to get a deeper understanding of how products interact with its users. Outside of work, my hobbies include fishing, going to the gym, and meeting new people.",
    linkedinUrl: "https://www.linkedin.com/in/wes-kim/",
  },
  {
    name: "Joseph Lee",
    profile: josephProfile,
    description:
      "Hi there! My name is Joseph Lee and I am in my final year of Mechatronics Engineering at the University of Waterloo. Throughout my co-op experiences and undergraduate degree, I've developed a passion for Project Management, as well as interests in front-end development and computer vision. When I have a chance to unwind, I enjoy going to the gym, playing basketball, and hiking.",
    linkedinUrl: "https://www.linkedin.com/in/josephlee0130/",
  },
  {
    name: "Caleb Ng",
    profile: calebProfile,
    description:
      "Hey, I'm Caleb, I'm in my final year of tron. I started out doing mechanical design, but ended up finding software a lot more fun. Recently, I've found myself working on ML, vision, and embedded systems. I really like playing guitar and am trying to get better at volleyball.",
    linkedinUrl: "https://www.linkedin.com/in/caleb-ng/",
  },
];

export const overviewData = {
  intro:
    "This project focuses on developing a vision system designed to assist visually impaired individuals, the elderly, and those with memory challenges in locating household objects. The system utilizes computer vision to recognize items like keys, remotes, and phones when the user interacts with them. By tracking where these objects are placed, the system can provide users with helpful information regarding the last known location of their belongings through simple voice commands.",
  image: overviewPic,
  body: "The core functionality of this system relies on advanced object recognition and tracking technologies, integrated with a user-friendly voice interface. When a user picks up or moves an object such as a phone, wallet, or glasses, the system's camera identifies the item and updates its database with the new location. This continuous monitoring helps ensure that misplaced items can be easily found by querying the system, which will then inform the user of the object's most recent location. The system is designed to be intuitive, requiring minimal effort from the user, and aims to provide a seamless and efficient solution to common daily challenges faced by people with visual impairments, memory difficulties, or aging-related cognitive decline.",
};
