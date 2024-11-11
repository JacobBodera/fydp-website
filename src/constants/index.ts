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
  {
    title: "Created a Detailed Design Document",
    date: "04-11-2024",
    content:
      "The team created a detailed design document to list all of the hardware, electrical, and software components that will be required for the project and started researching the best approaches for the project. The document includes the specific components and software that will be used for the project and includes reasoning as to why it was chosen. The summary of this research can be seen in the 'Detailed Design Overview' section above.",
  },
];

export const technicalDetailDataList = [
  {
    title: "Constraints",
    content:
      "- Cost limit of $300 per term as a group\n- Must be able to track 3 distinct objects at a minimum\n- Able to describe location of tracked items to a 1m radius\n- Provide real-time data retrieval, maximum of 5 second processing\n- Must be operational for at least 12 hours of the day\n- Object location and image data must be secure\n- Data storage must be sufficiently large to store object locations",
    link: null,
  },
  {
    title: "Criteria",
    content:
      "- Should have minimum cost\n- Should involve as minimal setup\n- Should have as much vision of the environment at any given time\n- Object location retrieval should be accessible to visually impaired\n- Should not create additional obstacles for the user such as being restrictive to wear",
    link: null,
  },
  {
    title: "Poterntial Solutions",
    content:
      "- Bird’s eye view camera\n\n- Wearable attachment\n\n- Phone application\n\n- Glasses\n\n- Could help with warehouses",
    link: null,
  },
  {
    title: "Patents",
    content:
      "Patent 1: System and method for continuous and incremental location tracking of a smartphone based on situation-aware control of the level of background sensing\n- This invention uses the sensors of a smartphone to continuously and incrementally track its specific location\n- Uses different tracking modes (walking, stationary, and vehicle movement)\n- Adjusts sensor usage according to activity minimizing energy consumption\nhttps://patents.google.com/patent/US20130166201A1/en\n\nPatent 2: Item Locator\n- Patent introduces a system designed to locate lost or stolen items using a receiver module and tracking devices\n- Each tracked item has a mounted tracking chip\n- System allows users to select specific items through a handheld device/app\n- Can incorporate GPS to locate items over long distances\nhttps://patents.google.com/patent/US20180137739A1/en\n\nPatent 3: System and method for using a wearable location tracking and monitoring device\n- Patent outlines a system using wearable devices for tracking the location of objects or individuals\n- Wearable device communicates with a server through wireless networks, providing continuous monitoring and location data\n- System can also send alerts when an item moves beyond a specific range\nhttps://patents.google.com/patent/US20240242588A1/en?oq=20240242588",
    link: null,
  },
  {
    title: "Detailed Design Overview",
    content:
      "Microcontoller - Raspberry Pi 5 & AI HAT+\n   - very popular development platform and has a lot of open-source reference material\n   - can purchase at a reasonable price, especially when comparing to components used in industry\n   - the AI HAT resolves one of the greatest concerns in terms of computing power as it offloads all of this processing from the microcontroller\n   - the Raspberry Pi 5 includes all of the connections that we may need and WIFI/ethernet connection which is required for data transfer\n\n" +
      "Camera - Raspberry Pi Camera Module 3\n   - guaranteed to integrated with microcontroller as it comes from the same manufacturer\n   - 12MP camera which provides high-quality image and video quality, which will make object detection much easier and more accurate\n   - documentation includes detailed technical specifications such as focal length and field of view, which are required for image calibration\n   - very low cost option compared to similar-quality alternatives\n\n" +
      "Power Supply - Outlet Connection\n   - this is the most simple and reliable option to supply power and the system\n   - it provides an easy setup with no maintenence whatsoever, such as recharging or replacing a battery\n   - the camera system will be stationary and so direct outlet connection makes the most sense\n\n" +
      "Frontend - Swift & XCode\n - the team has some experience creating IOS apps using these technologies\n -  the application can easily be created later for other platforms once design and functionality has been finalized\n\n" +
      "Backend - Django\n   - a very versatile platform with simple API creation and usage\n   - since our API should be quite simple with only string data being transferred, a simple backend is much more desirable\n   - comes with useful built-in functions and security options\n   - the team is already experienced Python and setting up Django\n\n" +
      "Object Detection/Machine Learning - Tensorflow & YOLO\n   - the team is already well-versed in Python and Tensorflow software development\n   - Python is being used in the backend developement already and it is important to keep software usage as consistent as possible within the project to avoid confusion and ensure that everyone is knowledgeable in the developement\n   - Tensorflow is one of the most popular machine learning frameworks for Python and has incredible documentation supporting it\n   - YOLO was chosen as the object detection model because it has the useful function of being able to complete object detection and bouding in one pass, which will be the input to the teams custom tracking model",
    link: null,
  },
];

export const memberInfoList = [
  {
    name: "Jacob Bodera",
    profile: jacobProfile,
    description:
      "Hello! My name is Jacob Bodera and I am in my final-year of Mechatronics Engineering. Throughout my undergraduate degree, I have been extremely interested in software development with a strong interest in fullstack development and machine learning. My previous experience includes web development & machine learning at Windscribe VPN, computer vision applications in soft robotics at the University of Guelph, and backend development and data analytics at Amazon Web Services. In my free time, I love going rockclimbing outdoors, playing games, and reading.",
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
