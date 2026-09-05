// ── Add/edit your projects here ───────────────────────────────────────────
// videoSrc: path to an mp4 under /public/videos/ (e.g. "/videos/demo.mp4").
//           Leave it null and a friendly placeholder shows instead.
// poster:   optional thumbnail image shown before the video plays.

const projects = [
  {
    id: 'Browser-based-dashboard',
    title: 'Browser based dashboard',
    tagline: 'Website dashboard with real-time communication between IoT devices and web clients',
    description:
      'A web-based dashboard that allows users to monitor and control an IoT based robot in real-time. Built with React for the frontend, Redux Toolkit for state management, Node.js and Socket.IO and mqtt for real-time communication. The dashboard provides a user-friendly interface to visualize device data, send commands, and receive live updates from a robot.',
    category: 'IoT',
    stack: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Socket.IO', 'MQTT'],
    videoSrc: `${import.meta.env.BASE_URL}/public/videos/RobobotVid.mp4`,
    filePath: '~/projects/Browser-based-dashboard/demo.mp4',
    github: 'https://github.com/joycxmac/Browser-based-dashboard-for-autonomous-robots',
    year: '2026',
  },
  {
    id: 'Roborally',
    title: 'Roborally',
    tagline: 'A turnbased race game with robots and lasers',
    description:
      'A turn-based racing game where players control robots navigating through obstacle courses filled with lasers. Built with React, Redux Toolkit for state management for the frontend and Java with springboot for the backend. The game features real-time multiplayer functionality, allowing players to compete against each other in exciting races. The project is made by a team of 10 people over the course of 6 months.',
    category: 'Game Development',
    stack: ['React', 'Tailwind CSS', 'Java', 'Spring Boot', 'Socket.IO', 'PostgreSQL', 'jira'],
    videoSrc: `${import.meta.env.BASE_URL}/public/videos/Roborally.mp4`,
    filePath: '~/projects/Roborally/demo.mp4',
    github: 'https://github.com/jimtete/roborally-be',
    year: '2025',
  },
  {
    id: 'Bonk',
    title: 'Bonk',
    tagline: 'Multiplayer capture-the-flag game',
    description:
      'A school project made in Unity, where players control a character to capture the flag of the opposing team while avoiding obstacles and opponents. The game features real-time multiplayer functionality, allowing players to compete against each other in exciting matches. The project is made by a team of 30 people over the course of 3 months.',
    category: 'Game Development',
    stack: ['Unity', 'C#', 'blender', 'Trello'],
    imageSrc: `${import.meta.env.BASE_URL}/public/videos/Bonk.png`,
    videoSrc: null,
    filePath: '~/projects/bonk/demo.mp4',
    year: '2022',
  },
  {
    id: 'pinball',
    title: 'Pinball',
    tagline: 'Mobile habit tracker with gentle nudges',
    description:
      'A cross-platform habit tracker focused on streak recovery instead of streak shame — miss a day and Pulse helps you restart instead of guilt-tripping you.',
    category: 'Computer Graphics',
    stack: ['wgsl', 'html'],
    videoSrc: `${import.meta.env.BASE_URL}/public/videos/pinball.mp4`,
    filePath: '~/projects/pinball/demo.mp4',
    year: '2025',
  },
  {
    id: 'snake',
    title: 'Snake',
    tagline: 'Classic snake game with a twist',
    description:
      'A Classic snake game made in Java, where the player controls a snake to eat food and grow longer while avoiding obstacles and the snake\'s own tail. ',
    category: 'Game Development',
    stack: ['Java'],
    videoSrc: null,
    filePath: '~/projects/snake/demo.mp4',
    live: '',
    year: '2023',
  },
]

export const categories = [
  'All',
  ...Array.from(new Set(projects.map((p) => p.category))),
]

export default projects
