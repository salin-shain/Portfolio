import placifyImage from '@/public/placify-img.png'; 
import fireChatImage from '@/public/fire-chat-img.png'; 
import whiteBoardImage from '@/public/whiteboard-img.png'; 
const projects = [
  {
    "name": "Placify Dashboard",
    "technologies": [
      "NextJS",
      "Material-UI",
      "Tailwind",
      "Firebase",
      "axios-Interceptor"
    ],
    "imageLink": placifyImage,
    "githubLink": "",
    "liveDemoLink": "",
    "description": "Custom dashboard for St. Joseph's College placement cell. Connects staff with students via mobile app, streamlining recruitment. Built with NextJS and Firebase."
  },
  {
    "name": "Vidyalai White Board",
    "technologies": [
      "ReactJS",
      "FabricJs",
      "Tailwind",
      "Firebase"
    ],
    "imageLink": whiteBoardImage,
    "githubLink": "https://github.com/roshith2001/vidyalai-assignment",
    "liveDemoLink": "https://vidyalai-whiteboard.web.app/",
    "description": "Interactive digital whiteboard with customizable drawing tools and shape creation. Built using ReactJS and FabricJs."
  },
  {
    "name": "Fire-Chat",
    "technologies": [
      "ReactJS",
      "Firebase",
      "Tailwind",
    ],
    "imageLink": fireChatImage,
    "githubLink": "https://github.com/roshith2001/fire-chat",
    "liveDemoLink": "https://roshith-chat.web.app/",
    "description": "Real-time chat app using Firebase and ReactJS. Features live messaging, user authentication, and responsive design."
  },
]

export default projects;